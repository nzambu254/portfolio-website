// src/main.js
import { createApp } from 'vue'; // Import createApp from Vue 3
import App from './App.vue';       // Import your main App component
import router from './router';     // Import the router
import '@fortawesome/fontawesome-free/css/all.css';


// Create the Vue application
const app = createApp(App);

// Disable production tip in console
app.config.productionTip = false;

// Use the router
app.use(router);

// Mount the app to the DOM
app.mount('#app');
