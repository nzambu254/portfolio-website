<template>
  <section class="projects">
    <div class="projects-background"></div>
    <div class="projects-content">
      <h2>Projects</h2>
      <p>
        You can find more projects on my
        <a
          href="https://github.com/joe4780"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i> GitHub profile
        </a>.
      </p>

      <!-- Projects List -->
      <div class="projects-list">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-item"
        >
          <img
            :src="require(`@/assets/${project.image}`)"
            :alt="project.title"
            class="project-image"
          >
          <div class="project-details">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a
              :href="project.link"
              target="_blank"
            >
              <i class="fab fa-github"></i> View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "CityInspector App",
          description: "An application built to enable traffic police to preview routes of high priority vehicles like ambulances and GKs to prevent transportation of illegal substances.",
          image: "cityinspector.jpg",
          link: "https://city-inspector-app-git-master-josephs-projects-55b96ac2.vercel.app/"
        },
        {
          id:2,
          title: "Digiskool App",
          description: "Digiskool is a complete school management system that has all essentials needed for running a school.The application is designed to suit all education institutions below the tertiary level and provides Comprehensive and Enriched school management functions in real-time.",
          image: "digisk.jpeg",
          link: "https://digiskool.co.ke/digiskool.apk"
        },
        {
          id: 3,
          title: "Event Updates App",
          description: "An application built to enable users in an event to follow live updates from their comfort place ",
          image: "wrld.jpeg",
          link: "https://github.com/joe4780/updates_app"
        }
      ]
    };
  }
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #121212; /* Background color */
  font-family: 'Roboto', sans-serif;
  color: #E0E0E0; /* Default text color */
}

.projects {
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.projects-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/codespace.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.4;
  z-index: -1;
}

.projects-content {
  z-index: 1;
  background-color: rgba(226, 220, 220, 0.8); /* Semi-transparent black background */
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
}

.projects-content h2 {
  margin-bottom: 1.5rem;
  color: #00b4d8;
  font-size: 2.5rem;
}

.projects-content p {
  margin-bottom: 2rem;
  font-size: 1.2rem;
}

.projects-content a {
  color: #00b4d8;
  text-decoration: none;
  transition: color 0.3s ease;
}

.projects-content a:hover {
  text-decoration: underline;
  color: #0288d1;
}

.cv-download {
  margin: 2rem 0;
  text-align: center;
}

.cv-download a {
  color: #00b4d8;
  font-size: 1.2rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #1a1a1a;
  padding: 10px 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.cv-download a:hover {
  background-color: #00b4d8;
  color: #121212;
}

.projects-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.project-item {
  background-color: #b37707;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7);
}

.project-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.project-details h3 {
  margin: 15px 0 10px;
  color: #092dfa;
  font-size: 1.5rem;
}

.project-details p {
  font-size: 1rem;
  margin-bottom: 15px;
}

.project-details a {
  color: #00b4d8;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s ease;
}

.project-details a:hover {
  text-decoration: underline;
  color: #0288d1;
}
</style>
