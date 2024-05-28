<script setup>
import { ref } from 'vue'
import bgImage from '@/assets/about_1.jpg'
const showTitle = ref(true)
const blogdetail=ref('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias aliquam adipisci aspernatur delectus eum omnis eius, ipsum ipsam? Dolores recusandae at nostrum, sint saepe corporis harum! Rerum sapiente perferendis ipsa reprehenderit modi? Quidem recusandae, laboriosam ipsam accusamus tempora ad temporibus a? At maxime, error nisi eos rem reiciendis tempore non atque minus praesentium, est adipisci molestias provident nobis fugit nesciunt maiores labore quas sed rerum suscipit! Ipsam exercitationem ea id sed voluptas aliquid nostrum consequatur, iure expedita velit ipsum aliquam quidem distinctio, cumque, maxime voluptatum excepturi. Excepturi aut corporis quibusdam molestiae a quia corrupti aliquam officiis doloremque, voluptatem iure! Beatae?')
</script>
<template>
  <!-- BANNER-SECTION-STARTS-FROM-HERE -->
  <section
    class="relative bg-cover bg-no-repeat bg-top before:absolute before:content-* before:top-0 before:bg-[#00000063] before:h-full before:w-full"
    :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="container mx-auto px-4 lg:px-16">
      <div class="relative z-10 py-24">
        <h1 class="text-5xl text-white font-bold text-center" v-if='showTitle'>Blog Details</h1>
        <ul class="flex justify-center text-white gap-2 pt-4">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li>-</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  </section>
  <!-- BANNER-SECTION-ENDS-FROM-HERE -->
  <section class="py-20">
    <div class="container mx-auto px-4 lg:px-16">
      <div class="rounded-md p-10 my-0 mr-auto ml-auto w-9/12 shadow-xl">
        <div class="">
          <h3 class="text-3xl font-bold text-center" v-if='showTitle'>Blog Details</h3>
          <div
            class="h-1 w-16 my-0 mr-auto ml-auto bg-gradient-to-r from-red-400 to-white-500"
          ></div>
        </div>
        <img src="@/assets//blog_1.jpg" alt="Blog" class="img-responsive py-10 px-0" />
        <p>
      {{blogdetail}}
        </p>
      </div>
    </div>
  </section>
</template>
<style></style>
