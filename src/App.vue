<template>
  <div id="main-content" class="flex flex-col min-h-screen">
    <!-- Meta Tags Manager -->
    <MetaTags />

    <!-- Navigation -->
    <Navbar />

    <!-- Main Content with top padding for fixed navbar -->
    <main class="flex-grow pt-20">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import MetaTags from './components/MetaTags.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

#app {
  width: 100%;
  height: 100%;
}
</style>
