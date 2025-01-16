<template>
  <section class="projects">
    <h2 class="projects-title">Featured Projects</h2>
    <div class="projects-list">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-item"
      >
        <div class="project-image-container">
          <img
            :src="require(`@/assets/${project.image}`)"
            :alt="project.title"
            class="project-image"
          >
        </div>
        <div class="project-details">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <a
            :href="project.link"
            target="_blank"
            class="project-link"
          >
            <i class="fab fa-github"></i> View Project
          </a>
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
          id: 2,
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
.projects {
  padding: 4rem 2rem;
  background-color: #0a0f1a;
  min-height: 100vh;
}

.projects-title {
  text-align: center;
  font-size: 2.5rem;
  color: #6e8ac7;
  margin-bottom: 3rem;
  font-weight: bold;
  position: relative;
}

.projects-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background-color: #6e8ac7;
}

.projects-list {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
  padding: 0 1rem;
}

.project-item {
  background-color: #1a2332;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.project-item:hover {
  transform: translateY(-5px);
}

.project-image-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-item:hover .project-image {
  transform: scale(1.05);
}

.project-details {
  padding: 1.5rem;
}

.project-details h3 {
  font-size: 1.5rem;
  color: #6e8ac7;
  margin-bottom: 1rem;
}

.project-details p {
  color: #a0aec0;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #6e8ac7;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #8ba3d4;
}

@media (max-width: 768px) {
  .projects-list {
    grid-template-columns: 1fr;
  }

  .project-image-container {
    height: 250px;
  }

  .projects-title {
    font-size: 2rem;
  }

  .project-details h3 {
    font-size: 1.25rem;
  }
}
</style>