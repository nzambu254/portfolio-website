<template>
  <section class="projects">
    <div class="projects-background" />
    <div class="projects-content">
      <h2>My Projects</h2>
      <p>
        You can find more projects on my 
        <a
          href="https://github.com/joe4780"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github" /> GitHub profile
        </a>.
      </p>
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
              <i class="fab fa-github" /> View Project
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
          id: 2,
          title: "In-App Notification App",
          description: "An in-app notification system where an admin, using the web app backend, can send notifications to specific users in the Flutter app and see if the users have read or not.",
          image: "adminpanel.jpg",
          link: "https://github.com/joe4780/notificationApp/tree/main"
        }
      ]
    };
  }
};
</script>

<style scoped>
html,
body {
  height: 100%; /* Ensure the body takes full height */
  margin: 0; /* Remove default margin */
  overflow: hidden; /* Disable scrolling */
}

.projects {
  height: calc(100vh - 20px); /* Adjust height based on navbar height */
  position: relative; /* Position relative for absolute positioning of background */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; /* Center align text */
  margin-top: 200px; /* Space for the navbar */
}

.projects-background {
  position: absolute; /* Position it absolutely */
  top: 0; /* Start at the top */
  left: 0; /* Start at the left */
  width: 100%; /* Cover the full width */
  height: 100%; /* Cover the full height */
  background-image: url('@/assets/codespace.jpg'); /* Background image */
  background-size: cover; /* Ensure the image covers the section */
  background-position: center; /* Center the background image */
  opacity: 0.5; /* Adjusted opacity for better visibility of text */
  z-index: -1; /* Ensure it stays behind content */
}

.projects-content {
  position: relative; /* For stacking context */
  z-index: 1; /* Ensure content is above the background */
  color: #333; /* Text color */
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background for readability */
  padding: 2rem; /* Padding around the content */
  border-radius: 10px; /* Rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.projects-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px; /* Space between projects */
}

.project-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px; /* Width of each project item */
}

.project-image {
  width: 100%; /* Full width */
  height: auto; /* Maintain aspect ratio */
  border-radius: 5px; /* Rounded image corners */
}

.project-details {
  margin-top: 10px; /* Space between image and text */
}

.project-details h3 {
  margin: 10px 0 5px 0; /* Margin for the title */
}

.project-details p {
  font-size: 0.9rem; /* Smaller font size */
}

.project-details a {
  text-decoration: none;
  color: #00b4d8; /* Link color */
  display: flex;
  align-items: center;
  gap: 5px; /* Space between icon and text */
}

.project-details a i {
  font-size: 1.2rem; /* Icon size */
}

.project-details a:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>
