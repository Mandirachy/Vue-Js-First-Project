<script setup>
import '../assets/js/script.js'
import BlogItem from '../components/Blog/BlogItem.vue'
import { ref } from 'vue'
const data = [
  {
    title: 'Blog A',
    date: 'May 04, 2024', 
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, consequuntur.',
  },
  {
    title: 'Blog B',
    date: 'May 05, 2024',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Blog C',
    date: 'May 06, 2024',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,',
  }
]
const showTitle = ref(true)
const welcome = ref('Welcome To Lorem')
const companydetail = ref('Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi, ducimus veritatis dolorum maiores illo accusantium voluptatum sit et perspiciatis aliquam minima repellat sunt modi obcaecati saepe consequuntur distinctio qui vel veniam dignissimos maxime? Velit recusandae dolorem beatae distinctio.')
const blogheading = ref('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro, molestias saepe eligendi quos ipsa perferendis assumenda tempore. Est, eum.')
</script>

<template>
  <!-- BANNER-SECTION-STARTS-FROM-HERE -->
  <section>
    <div
      class="relative before:absolute before:content-* before:top-0 before:bg-[#00000063] before:h-full before:w-full"
    >
      <img src="@/assets/meeting.jpg" alt="Meeting" class="img-responsive" />
    </div>
    <div class="container mx-auto px-4 lg:px-16">
      <div
        class="absolute hidden text-white text-center w-5/6 lg:block lg:top-48 md:block md:top-32 sm:top-24 sm:block"
      >
        <h1 class="text-3xl font-bold md:text-4xl">{{welcome}}</h1>
        <p class="pt-5 pb-8 text-base md:text-lg">
          {{companydetail}}
        </p>
        <RouterLink
          to="/about"
          class="py-2.5 px-6 text-[#f37a49] bg-white rounded text-lg hover:bg-[#e15d27] hover:text-white"
          >Explore</RouterLink
        >
      </div>
    </div>
  </section>
  <!-- BANNER-SECTION-ENDS-FROM-HERE -->
  <!-- BLOG-SECTION-STARTS-FROM-HERE -->
  <section class="bg-[#ff3b000a] py-20">
    <div class="container mx-auto px-4 lg:px-16">
      <div class="text-center w-full my-0 ml-auto mr-auto md:w-1/2">
        <h3 class="text-3xl font-bold" v-if="showTitle">Our Blogs</h3>
        <div class="h-1 w-16 my-0 ml-auto mr-auto bg-gradient-to-r from-red-400 to-white-500"></div>
        <p class="pt-6 pb-14 text-lg">
         {{blogheading}}
        </p>
      </div>
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <!-- LEFT-CONTENT -->
        <BlogItem v-for="b in data" :key="b.index" :title="b.title" :date="b.date" :content="b.content"></BlogItem>
      </div>
    </div>
  </section>
  <!-- BLOG-SECTION-ENDS-FROM-HERE -->

</template>
