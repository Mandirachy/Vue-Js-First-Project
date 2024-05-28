<script setup>

</script>

<template>
  <footer class="py-20 bg-[#f37a49]">
    <section>
      <div class="container mx-auto px-4 lg:px-16">
        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <!-- LEFT-GRID -->
          <div class="">
            <img src="@/assets/logo.png" alt="Logo" class="img-responsive w-24 brightness-[40]" />
            <p class="text-white text-lg pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptates!
            </p>
          </div>
          <!-- MIDDLE-GRID -->
          <div class="text-white text-lg">
            <h6 class="font-bold text-xl">Links</h6>
            <div class="h-1 w-16 bg-gradient-to-r from-gray-100 to-white-500"></div>
            <ul class="pt-4">
              <li><RouterLink to="/about">About</RouterLink></li>
              <li><RouterLink to="/contact">Contact</RouterLink></li>
            </ul>
          </div>
          <!-- RIGHT-GRID -->
          <div class="text-lg">
            <h6 class="font-bold text-xl text-white">Social Media</h6>
            <div class="h-1 w-16 bg-gradient-to-r from-gray-100 to-white-500"></div>
            <div class="flex pt-4 gap-2.5">
              <a
                href="https://www.facebook.com/"
                title="Facebook"
                class="flex items-center justify-center w-9 h-9 text-[#f37a49] bg-white rounded-full hover:text-white hover:bg-[#e15d27]"
                ><i class="fa-brands fa-facebook-f"></i
              ></a>
              <a
                href="https://instagram.com/"
                title="Instagram"
                class="flex items-center justify-center w-9 h-9 text-[#f37a49] bg-white rounded-full hover:text-white hover:bg-[#e15d27]"
                ><i class="fa-brands fa-instagram"></i
              ></a>
              <a
                href="https://twitter.com/?lang=en"
                title="Twitter"
                class="flex items-center justify-center w-9 h-9 text-[#f37a49] bg-white rounded-full hover:text-white hover:bg-[#e15d27]"
              >
                <i class="fa-brands fa-x-twitter"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<style scoped></style>
