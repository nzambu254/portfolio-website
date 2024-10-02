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
  </section>
</template>

<script>
export default {
  name: "Contact",
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
  color: #333; /* Darker text color for better contrast */
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-details h2 {
  margin-bottom: 1rem;
  justify-content: left;
  align-items: left;
}

.contact-details ul {
  list-style: none;
  padding: 0;
  justify-content: left;
  align-items: left;
}

.contact-details li {
  margin: 1rem 0;
  justify-content: left;
  align-items: left;
}

.contact-details a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
}

.contact-details a:hover {
  color: #00b4d8; /* Blue color on hover */
}

.contact-details i {
  margin-right: 8px;
  color: #00b4d8; /* Blue color for icons */
  justify-content: left;
  align-items: left;
}
</style>