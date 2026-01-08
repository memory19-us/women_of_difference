# Email Configuration Guide

To enable email functionality for the contact forms, you need to configure SMTP settings in your environment variables.

## Setup Instructions

1. Create a `.env.local` file in the root directory of your project.

2. Add the following environment variables:

```env
# Email Configuration
# SMTP server settings for sending emails

# SMTP Host (examples: smtp.gmail.com, smtp.outlook.com, smtp.yourdomain.com)
SMTP_HOST=smtp.gmail.com

# SMTP Port (usually 587 for TLS or 465 for SSL)
SMTP_PORT=587

# SMTP Username (your email address or SMTP username)
SMTP_USER=your-email@gmail.com

# SMTP Password (your email password or app-specific password)
# For Gmail, you may need to use an App Password instead of your regular password
# Generate one at: https://myaccount.google.com/apppasswords
SMTP_PASSWORD=your-app-password-or-password

# Recipient Email (where contact form submissions will be sent)
CONTACT_EMAIL=info@womenofdifferencegroup.com
```

## Gmail Setup

If you're using Gmail:

1. Enable 2-Factor Authentication on your Google Account
2. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Women of Difference Website"
   - Copy the generated password
   - Use this password as `SMTP_PASSWORD`

## Other Email Providers

### Outlook/Hotmail
- `SMTP_HOST=smtp-mail.outlook.com`
- `SMTP_PORT=587`
- Use your Outlook email and password

### Custom SMTP Server
- Contact your email provider or hosting service for SMTP settings
- Common ports: 587 (TLS) or 465 (SSL)

## Default Behavior

- If `CONTACT_EMAIL` is not set, emails will default to `info@womenofdifferencegroup.com`
- All contact form submissions from both the contact page and other pages will be sent to this address
- The sender's email will be included in the reply-to field for easy responses

## Testing

After configuration, test the contact form by submitting a message. Check the browser console and server logs for any errors if emails are not being sent.
