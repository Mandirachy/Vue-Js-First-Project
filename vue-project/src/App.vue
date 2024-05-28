<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterPage from './views/FooterView.vue'
</script>

<template>
  <header>
    <nav class="bg-[#f37a49]">
      <div class="container mx-auto px-4 lg:px-16">
        <div class="flex items-center justify-between py-1.5">
          <div class="">
            <RouterLink to="/"
              ><img src="@/assets/logo.png" alt="Company Logo" class="img-responsive img-responsive brightness-[40] w-24"
            /></RouterLink>
          </div>
          <div>
            <ul class="flex gap-10 text-white text-lg">
              <li><RouterLink to="/">Home</RouterLink></li>
              <li><RouterLink to="/about">About</RouterLink></li>
              <li><RouterLink to="/contact">Contact</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
  <FooterPage />
</template>

<style scoped></style>
