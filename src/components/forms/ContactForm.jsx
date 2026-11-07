import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { contactConfig } from '../../data/site.js';
import { categories } from '../../data/catalog/categories.js';
import Icon from '../ui/Icon.jsx';
import './ContactForm.css';

const BUDGETS = [
  'Not sure yet',
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $40,000',
  '$40,000 - $100,000',
  'Over $100,000',
];

const TIMELINES = [
  'As soon as possible',
  'Within 1-3 months',
  'Within 3-6 months',
  'Later this year',
  'Still exploring',
];

const EMPTY = {
  name: '',
  email: '',
  company: '',
  services: [],
  budget: '',
  timeline: '',
  details: '',
  consent: false,
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Enter your name so we know who we are replying to.';
  if (!values.email.trim()) {
    errors.email = 'Enter a work email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'That email address does not look complete. Check for a typo.';
  }
  if (!values.services.length) errors.services = 'Select at least one service you need.';
  if (values.details.trim().length < 20) {
    errors.details = 'Add a little more detail: 20 characters or more helps us reply usefully.';
  }
  if (!values.consent) errors.consent = 'Please confirm you are happy for us to reply.';
  return errors;
}

/**
 * Contact form with client-side validation.
 *
 * INTEGRATION POINT
 * -----------------
 * Set `contactConfig.formEndpoint` in src/data/site.js to a URL that accepts a
 * JSON POST ({ name, email, company, services, budget, timeline, details,
 * submittedAt, source }). Examples: an internal /api/contact route, a form
 * provider endpoint, or a CRM webhook.
 *
 * Until that value is set, the form validates and confirms the input but
 * states plainly that nothing was transmitted, and offers the message for
 * copying. It never pretends to have sent anything.
 */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | sent | unconfigured | error
  const [copied, setCopied] = useState(false);
  const summaryRef = useRef(null);
  const confirmationRef = useRef(null);

  const setField = (field, value) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => {
      if (!previous[field]) return previous;
      const next = { ...previous };
      delete next[field];
      return next;
    });
  };

  const toggleService = (title) => {
    setValues((previous) => {
      const selected = previous.services.includes(title)
        ? previous.services.filter((item) => item !== title)
        : [...previous.services, title];
      return { ...previous, services: selected };
    });
    setErrors((previous) => {
      if (!previous.services) return previous;
      const next = { ...previous };
      delete next.services;
      return next;
    });
  };

  const buildMessage = (data) =>
    [
      'Name: ' + data.name,
      'Work email: ' + data.email,
      'Company: ' + (data.company || 'Not provided'),
      'Services needed: ' + data.services.join(', '),
      'Budget: ' + (data.budget || 'Not provided'),
      'Timeline: ' + (data.timeline || 'Not provided'),
      '',
      'Project details:',
      data.details,
    ].join('\n');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      window.requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    if (!contactConfig.formEndpoint) {
      setStatus('unconfigured');
      window.requestAnimationFrame(() => confirmationRef.current?.focus());
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch(contactConfig.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          submittedAt: new Date().toISOString(),
          source: 'digaptics-website-contact-form',
        }),
      });
      if (!response.ok) throw new Error('Request failed with status ' + response.status);
      setStatus('sent');
      window.requestAnimationFrame(() => confirmationRef.current?.focus());
    } catch {
      setStatus('error');
      window.requestAnimationFrame(() => confirmationRef.current?.focus());
    }
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(buildMessage(values));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 4000);
    } catch {
      setCopied(false);
    }
  };

  const resetForm = () => {
    setValues(EMPTY);
    setErrors({});
    setStatus('idle');
  };

  if (status === 'sent' || status === 'unconfigured') {
    return (
      <div
        className="form-confirmation"
        tabIndex={-1}
        ref={confirmationRef}
        role="status"
        aria-live="polite"
      >
        <span className="form-confirmation__icon">
          <Icon name="check" size={24} />
        </span>
        {status === 'sent' ? (
          <>
            <h3>Thanks, {values.name.split(' ')[0]}. Your message is with us.</h3>
            <p>
              Your inquiry has been accepted by the configured delivery service.
            </p>
          </>
        ) : (
          <>
            <h3>Your inquiry is ready to email.</h3>
            <p>Nothing has been sent. Open your email app with the message below, or copy it and email {contactConfig.email}.</p>
            <pre className="form-confirmation__message">{buildMessage(values)}</pre>
            <div className="btn-row">
              <a className="btn" href={'mailto:' + contactConfig.email + '?subject=' + encodeURIComponent('Project inquiry: ' + values.name) + '&body=' + encodeURIComponent(buildMessage(values))}>Open email app</a>
              <button type="button" className="btn btn--secondary" onClick={copyMessage}>
                {copied ? 'Copied to clipboard' : 'Copy message'}
              </button>
              <button type="button" className="btn btn--secondary" onClick={resetForm}>
                Start again
              </button>
            </div>

          </>
        )}
        {status === 'sent' && (
          <div className="btn-row">
            <button type="button" className="btn btn--secondary" onClick={resetForm}>
              Send another message
            </button>
          </div>
        )}
      </div>
    );
  }

  const errorKeys = Object.keys(errors);

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {!contactConfig.formEndpoint && <p className="form-delivery-note">Direct form delivery is not connected. Prepare your inquiry below, then email it to <a href={'mailto:' + contactConfig.email}>{contactConfig.email}</a>. Nothing is sent by this form.</p>}
      {errorKeys.length > 0 && (
        <div className="form-error-summary" tabIndex={-1} ref={summaryRef} role="alert">
          <strong>
            <Icon name="close" size={16} /> There{' '}
            {errorKeys.length === 1 ? 'is 1 problem' : 'are ' + errorKeys.length + ' problems'} with
            this form
          </strong>
          <ul>
            {errorKeys.map((key) => (
              <li key={key}>
                <a href={'#field-' + key} onClick={() => {
                  const target = document.getElementById('field-' + key);
                  const control = target?.matches('input, select, textarea') ? target : target?.querySelector('input');
                  control?.focus();
                }}>{errors[key]}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === 'error' && (
        <div className="form-error-summary" role="alert" tabIndex={-1} ref={confirmationRef}>
          <strong>
            <Icon name="close" size={16} /> That did not send
          </strong>
          <p>
            Something went wrong on the way to our inbox. Try again in a moment, or reach us through
            the social links on this page.
          </p>
        </div>
      )}

      <div className="form-grid">
        <div className="field">
          <label htmlFor="field-name">
            Name <span aria-hidden="true">*</span>
            <span className="visually-hidden">(required)</span>
          </label>
          <input
            id="field-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => setField('name', event.target.value)}
            aria-invalid={errors.name ? 'true' : undefined}
            aria-describedby={errors.name ? 'error-name' : undefined}
            required
          />
          {errors.name && (
            <p className="field__error" id="error-name">
              <Icon name="close" size={14} /> {errors.name}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="field-email">
            Work email <span aria-hidden="true">*</span>
            <span className="visually-hidden">(required)</span>
          </label>
          <input
            id="field-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => setField('email', event.target.value)}
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? 'error-email' : undefined}
            required
          />
          {errors.email && (
            <p className="field__error" id="error-email">
              <Icon name="close" size={14} /> {errors.email}
            </p>
          )}
        </div>

        <div className="field field--full">
          <label htmlFor="field-company">Company</label>
          <input
            id="field-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(event) => setField('company', event.target.value)}
          />
        </div>

        <fieldset className="field field--full" id="field-services">
          <legend>
            Service(s) needed <span aria-hidden="true">*</span>
            <span className="visually-hidden">(required, choose at least one)</span>
          </legend>
          <div className="checkbox-grid">
            {categories.map((service) => (
              <label className="checkbox" key={service.id}>
                <input
                  type="checkbox"
                  name="services"
                  value={service.label}
                  checked={values.services.includes(service.label)}
                  onChange={() => toggleService(service.label)}
                  aria-describedby={errors.services ? 'error-services' : undefined}
                />
                <span>{service.label}</span>
              </label>
            ))}
            <label className="checkbox">
              <input
                type="checkbox"
                name="services"
                value="Not sure yet"
                checked={values.services.includes('Not sure yet')}
                onChange={() => toggleService('Not sure yet')}
              />
              <span>Not sure yet</span>
            </label>
          </div>
          {errors.services && (
            <p className="field__error" id="error-services">
              <Icon name="close" size={14} /> {errors.services}
            </p>
          )}
        </fieldset>

        <div className="field">
          <label htmlFor="field-budget">Approximate budget (optional)</label>
          <select
            id="field-budget"
            name="budget"
            value={values.budget}
            onChange={(event) => setField('budget', event.target.value)}
          >
            <option value="">Select a range</option>
            {BUDGETS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="field-timeline">Desired timeline (optional)</label>
          <select
            id="field-timeline"
            name="timeline"
            value={values.timeline}
            onChange={(event) => setField('timeline', event.target.value)}
          >
            <option value="">Select a timeline</option>
            {TIMELINES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="field field--full">
          <label htmlFor="field-details">
            Project details <span aria-hidden="true">*</span>
            <span className="visually-hidden">(required)</span>
          </label>
          <textarea
            id="field-details"
            name="details"
            rows={6}
            value={values.details}
            placeholder="What are you trying to build or fix? What exists today, and what is driving the timing?"
            onChange={(event) => setField('details', event.target.value)}
            aria-invalid={errors.details ? 'true' : undefined}
            aria-describedby={errors.details ? 'error-details' : 'hint-details'}
            required
          />
          {errors.details ? (
            <p className="field__error" id="error-details">
              <Icon name="close" size={14} /> {errors.details}
            </p>
          ) : (
            <p className="field__hint" id="hint-details">
              The more context you give, the more useful our first reply will be.
            </p>
          )}
        </div>

        <div className="field field--full" id="field-consent">
          <label className="checkbox checkbox--consent">
            <input
              type="checkbox"
              name="consent"
              checked={values.consent}
              onChange={(event) => setField('consent', event.target.checked)}
              aria-invalid={errors.consent ? 'true' : undefined}
              aria-describedby={errors.consent ? 'error-consent' : undefined}
              required
            />
            <span>
              I agree that Digaptics may use these details to respond to my enquiry, as described in
              the <Link to="/privacy">Privacy Policy</Link>. <span aria-hidden="true">*</span>
            </span>
          </label>
          {errors.consent && (
            <p className="field__error" id="error-consent">
              <Icon name="close" size={14} /> {errors.consent}
            </p>
          )}
        </div>
      </div>

      <div className="contact-form__actions">
        <button type="submit" className="btn" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : contactConfig.formEndpoint ? 'Send project inquiry' : 'Prepare email inquiry'}
        </button>
        <p className="caption">Fields marked * are required.</p>
      </div>
    </form>
  );
}
