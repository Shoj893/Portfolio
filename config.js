// EmailJS Configuration
// =====================
console.log('config.js: Loading configuration file...');

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
  PUBLIC_KEY: 'bDqJniZlROaK6aIaa'        // Get from: EmailJS > Account > API Keys > Public Key
  
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
  console.log('config.js: Attaching EMAILJS_CONFIG to window object...');
  console.log('config.js: EMAILJS_CONFIG data:', EMAILJS_CONFIG);
  window.EMAILJS_CONFIG = EMAILJS_CONFIG;
  console.log('config.js: Successfully attached to window. window.EMAILJS_CONFIG:', window.EMAILJS_CONFIG);
}
