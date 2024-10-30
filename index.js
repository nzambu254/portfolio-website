
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Function to send message
const sendWhatsAppMessage = async (phoneNumber, templateName = 'hello_world', languageCode = 'en_US') => {
  try {
    const response = await axios.post(
      'https://graph.facebook.com/v20.0/413512821853715/messages', // WhatsApp API endpoint
      {
        messaging_product: 'whatsapp',
        to: phoneNumber,
        type: 'template',
        template: {
          name: templateName,
          language: {
            code: languageCode
          }
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.WHATSAPP_API_KEY}`, // Load API key from .env
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Message sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending message:', error.response ? error.response.data : error.message);
  }
};

// Example
const examplePhoneNumber = '254743379990'; // recipient phone number
sendWhatsAppMessage(examplePhoneNumber);
