// EmailJS Configuration
// =====================

// 
// SETUP INSTRUCTIONS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add your Gmail as an email service (Email Services section)
// 3. Create an email template (Email Templates section)
// 4. Get your credentials and replace the placeholder values below
//
// WHERE TO FIND CREDENTIALS:
// - Service ID: EmailJS Dashboard > Email Services > Click on your service > Service ID
// - Template ID: EmailJS Dashboard > Email Templates > Click on your template > Template ID  
// - Public Key: EmailJS Dashboard > Account > API Keys > Public Key
//
// SECURITY NOTE:
// This file contains sensitive credentials. Never commit this to version control.
// Always add config.js to your .gitignore file.

const EMAILJS_CONFIG = {
  // Replace these placeholder values with your actual EmailJS credentials
  SERVICE_ID: 'service_shobhit_portfolio',        // Get from: EmailJS > Email Services > Your Service > Service ID
  TEMPLATE_ID: 'template_wxfxjn4',      // Get from: EmailJS > Email Templates > Your Template > Template ID
  PUBLIC_KEY: '1IMbcBrZvRlpyB3FD',        // Get from: EmailJS > Account > API Keys > Public Key
  
  // Email where messages will be sent (already configured in your EmailJS template)
  // This should match the email associated with your EmailJS account
  RECIPIENT_EMAIL: 'shobhitjais2607@gmail.com'
};

// Export configuration for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  // Node.js environment
  module.exports = EMAILJS_CONFIG;
} else {
  // Browser environment - attach to window object
  window.EMAILJS_CONFIG = EMAILJS_CONFIG;
}
