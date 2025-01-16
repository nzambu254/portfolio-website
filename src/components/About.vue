<template>
  <section id="about" data-aos="fade-up">
    <div class="about-container">
      <div class="about-image">
        <img src="@/assets/profile.jpg" alt="Nzambu Joseph">
        <div class="about-shape"></div>
      </div>
      <div class="about-content">
        <h2>About Me</h2>
        <p>
          I'm a certified fullstack software developer with a passion for creating mobile applications that make a positive impact. With expertise in various technologies, I enjoy solving complex problems and continuously strive to learn and grow.
        </p>
        <div class="about-stats">
          <div class="stat-item">
            <span class="stat-number">4+</span>
            <span class="stat-text">Years Experience</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">10+</span>
            <span class="stat-text">Projects Completed</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">10+</span>
            <span class="stat-text">Technical Articles</span>
          </div>
        </div>
        <div class="about-buttons">
          <a href="/josephCV.pdf" download class="download-cv">
            <span class="button-text">Download CV</span>
            <span class="button-icon">
              <i class="fas fa-download"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
#about {
  padding: 50px;
  background-color: #000;
  color: #fff;
  text-align: center;
}

.about-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.about-image {
  position: relative;
}

.about-image img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ddd;
}

.about-shape {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  z-index: -1;
}

.about-content {
  max-width: 600px;
  text-align: center;
  font-family: monospace;
  font-size: 1.3em; /* Increased font size for monospace */
}

.about-content h2 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #b37707;
}

.about-content p {
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
}

.about-stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 1.5em;
  font-weight: bold;
  color: #b37707;
}

.stat-text {
  display: block;
  font-size: 1em;
}

.about-buttons {
  display: flex;
  justify-content: center;
}

.download-cv {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none; /* Remove default underline from link */
}

.download-cv:hover {
  background-color: #0056b3;
}

.button-icon {
  margin-left: 10px;
}
</style>
