<script setup>
import bgImage from '@/assets/about_1.jpg'
import Service from '../components/Service/ServiceItem.vue'
import { ref } from 'vue'
const data = [
  {
    title: 'Service A',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo repellat quidem pariatur suscipit molestiae, sequi est soluta officia doloremque enim aperiam, aspernatur nesciunt reiciendis. Blanditiis tenetur unde sapiente corrupti aliquid. Optio ex odit inventore quos assumenda consequatur magni aspernatur quis?'
  },
  {
    title: 'Service B',
     content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo repellat quidem pariatur suscipit molestiae, sequi est soluta officia doloremque enim aperiam, aspernatur nesciunt reiciendis. Blanditiis tenetur unde sapiente corrupti aliquid.'
  },
  {
    title: 'Service C',
   content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo repellat quidem pariatur suscipit molestiae.'
  }
]
const showTitle = ref(true)
const about = ref('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur quos quasi minima quae harum inventore temporibus, libero officia quisquam totam cum iure, perspiciatis assumenda velit placeat. Doloremque veritatis vitae similique accusantium ducimus voluptates voluptatem obcaecati beatae! Ipsam optio itaque ad eius nihil excepturi molestias iste, blanditiis repudiandae aliquam temporibus nesciunt, ducimus obcaecati at provident debitis facere eligendi numquam repellat sequi. Hic illum ullam ea neque enim! Repellat ex veniam at, distinctio excepturi impedit hic! Et earum numquam natus?')
const aboutus = ref('Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nihil voluptas? Eius quisquam sit aut vero in est repellat dolorum a numquam architecto et voluptatum tempore iste nam hic veritatis, laudantium adipisci provident veniam sunt ea ut quae odio! Ratione quisquam voluptatum aspernatur, eaque ipsa animi eum illo minima tempora, temporibus tenetur optio? Est iure rem pariatur. Totam qui labore provident corrupti, eaque possimus cum veniam illum inventore autem minima non eveniet culpa dolor ipsa assumenda dicta laudantium voluptate! Ipsam!')
const ourservice = ref('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro, molestias saepe eligendi quos ipsa perferendis assumenda tempore. Est, eum.')
</script>
<template>
  <!-- BANNER-SECTION-STARTS-FROM-HERE -->
  <section
    class="relative bg-cover bg-no-repeat bg-top before:absolute before:content-* before:top-0 before:bg-[#00000063] before:h-full before:w-full"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="container mx-auto px-4 lg:px-16">
      <div class="relative z-10 py-24">
        <h1 class="text-5xl text-white font-bold text-center">About Us</h1>
        <ul class="flex justify-center text-white gap-2 pt-4">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li>-</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  </section>
  <!-- BANNER-SECTION-ENDS-FROM-HERE -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 gap-10">
        <!--LEFT -MODULE-->
        <div class="">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <img src="@/assets/about_1.jpg" alt="meeting" class="img-responsive rounded-md" />
              <div class="pt-4">
                <img src="@/assets/about_2.jpg" alt="meeting" class="img-responsive rounded-md" />
              </div>
            </div>
            <div class="mt-12">
              <img src="@/assets/about_2.jpg" alt="meeting" class="img-responsive rounded-md" />
              <div class="pt-4">
                <img src="@/assets/about_1.jpg" alt="meeting" class="img-responsive rounded-md" />
              </div>
            </div>
          </div>
        </div>
        <!-- RIGHT-MODULE -->
        <div class="">
          <h3 class="text-3xl font-bold">Welcome To Lorem</h3>
          <div class="h-1 w-16 my-0 bg-gradient-to-r from-red-400 to-white-500"></div>
          <p class="pt-8">
          {{about}}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="py-20 bg-[#ff3b000a]">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 gap-10">
        <!--LEFT -MODULE-->
        <div class="">
          <h3 class="text-3xl font-bold">About Us</h3>
          <div class="h-1 w-16 my-0 bg-gradient-to-r from-red-400 to-white-500"></div>
          <p class="pt-8">
          {{aboutus}}
          </p>
        </div>
        <!-- RIGHT-MODULE -->
        <div class="flex items-center">
          <div class="grid grid-cols-2 gap-4">
            <img src="@/assets/about_2.jpg" alt="meeting" class="img-responsive rounded-md" />
            <div class="mt-24">
              <img src="@/assets/about_1.jpg" alt="meeting" class="img-responsive rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- OUR-SERVICES-SECTION-STARTS-FROM-HERE -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center my-0 ml-auto mr-auto w-6/12">
        <h3 class="text-3xl font-bold text-center" v-if="showTitle">Our Services</h3>
        <div class="h-1 w-16 my-0 ml-auto mr-auto bg-gradient-to-r from-red-400 to-white-500"></div>
        <p class="pt-6 pb-14">
         {{ourservice}}
        </p>
      </div>
      <div class="grid grid-cols-3 gap-6 pt-8">
        <Service v-for="b in data" :key="b.index" :title="b.title" :content="b.content"></Service>
      </div>
    </div>
  </section>
  <!-- OUR-SERVICES-SECTION-ENDS-FROM-HERE -->
</template>

<style></style>
