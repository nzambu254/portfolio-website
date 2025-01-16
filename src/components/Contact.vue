<template>
  <section class="contact">
    <div class="content-wrapper">
      <h2 class="contact-title">Connect with me</h2>
      <div class="contact-details">
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
          <li>
            <a href="https://www.google.com/maps?q=Eldoret,+Kenya" target="_blank">
              <i class="fas fa-map-marker-alt" /> Location: Eldoret, Kenya
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #0a0f1a;
  min-height: 100vh;
  position: relative;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
  transform: translateY(-50px); /* Moves the content upwards */
}

.contact-title {
  font-size: 2.5rem;
  color: #6e8ac7;
  margin-bottom: 3rem;
  font-weight: bold;
  position: relative;
}

.contact-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background-color: #6e8ac7;
}

.contact-details {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

/* Background Image */
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
  opacity: 0.3;
  z-index: 0;
}

@media (max-width: 768px) {
  .contact-details {
    grid-template-columns: 1fr;
  }
}
</style>
