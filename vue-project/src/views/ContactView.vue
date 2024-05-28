<script setup>
import ContactItem from '../components/Contact/ContactItem.vue'
import bgImage from '@/assets/about_1.jpg';
</script>
<template>
  <!-- BANNER-SECTION-STARTS-FROM-HERE -->
<section
    class="relative bg-cover bg-no-repeat bg-top before:absolute before:content-* before:top-0 before:bg-[#00000063] before:h-full before:w-full" :style="{ backgroundImage: `url(${bgImage})`}">
    <div class="container mx-auto px-4 lg:px-16">
      <div class="relative z-10 py-24">
        <h1 class="text-5xl text-white font-bold text-center">Contact Us</h1>
        <ul class="flex justify-center text-white gap-2 pt-4">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li>-</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  </section>
  <!-- BANNER-SECTION-ENDS-FROM-HERE -->
<ContactItem />
  <section class="overflow-hidden">
    <div class="relative h-0 overflow-hidden -m-11 pb-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4586969152406!2d85.31995887447226!3d27.703120425679717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a840580f49%3A0xd34d67fdd3c0f3b1!2sPutali%20Sadak%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1715182417090!5m2!1sen!2snp"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="absolute top-0 left-0 h-full w-full"
      ></iframe>
    </div>
  </section>
  <!-- FORM-SECTION-ENDS-HERE -->
</template>
<script></script>
