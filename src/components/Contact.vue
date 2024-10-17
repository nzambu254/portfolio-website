<template>
  <section class="contact">
    <div class="contact-details">
      <h2>Connect with me</h2>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/joseph-nzambu-ba4234212/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin" /> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://x.com/NzambuTm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-x" /> X App
          </a>
        </li>
        <li>
          <a href="mailto:muthini181@gmail.com">
            <i class="fas fa-envelope" /> Email
          </a>
        </li>
        <li>
          <a href="tel:+254743379990">
            <i class="fas fa-phone" /> Phone: +254743379990
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/254743379990"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-whatsapp" /> WhatsApp: +254743379990
          </a>
        </li>
      </ul>
    </div>

    <!-- WhatsApp Message Form -->
    <div class="whatsapp-message-form">
      <h3>Send a WhatsApp Message</h3>
      <form @submit.prevent="sendMessage">
        <div>
          <label for="phoneNumber">Phone Number:</label>
          <input
            type="text"
            v-model="phoneNumber"
            id="phoneNumber"
            placeholder="Enter recipient's phone number"
            required
          />
        </div>
        <div>
          <label for="template">Message Template:</label>
          <select v-model="templateName" id="template">
            <option value="hello_world">Hello World</option>
            <!-- Add more templates here if needed -->
          </select>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div v-if="response">
        <h2>Response</h2>
        <pre>{{ response }}</pre>
      </div>
      <div v-if="error">
        <h2>Error</h2>
        <pre>{{ error }}</pre>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Contact',
  data() {
    return {
      phoneNumber: '',
      templateName: 'hello_world',
      response: null,
      error: null,
    };
  },
  methods: {
    async sendMessage() {
      try {
        const res = await axios.post(
          'https://graph.facebook.com/v20.0/413512821853715/messages',
          {
            messaging_product: 'whatsapp',
            to: this.phoneNumber,
            type: 'template',
            template: {
              name: this.templateName,
              language: {
                code: 'en_US',
              },
            },
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.WHATSAPP_API_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );
        this.response = res.data;
        this.error = null; // Reset error if message sent successfully
      } catch (error) {
        this.error = error.response ? error.response.data : error.message;
        this.response = null; // Reset response if error occurs
      }
    },
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.contact {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/codespace.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.3; /* Increased fading of the background */
  z-index: -1;
}

.contact-details {
  text-align: center;
  color: #333;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-details h2 {
  margin-bottom: 1rem;
}

.contact-details ul {
  list-style: none;
  padding: 0;
}

.contact-details li {
  margin: 1rem 0;
}

.contact-details a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
}

.contact-details a:hover {
  color: #00b4d8;
}

.contact-details i {
  margin-right: 8px;
  color: #00b4d8;
}

/* WhatsApp Message Form Styling */
.whatsapp-message-form {
  margin-top: 2rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.whatsapp-message-form h3 {
  margin-bottom: 1rem;
}

.whatsapp-message-form form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.whatsapp-message-form input,
.whatsapp-message-form select {
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 80%;
}

.whatsapp-message-form button {
  padding: 0.5rem 1rem;
  background-color: #00b4d8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.whatsapp-message-form button:hover {
  background-color: #0077b6;
}

.whatsapp-message-form pre {
  text-align: left;
  white-space: pre-wrap;
}
</style>
