<script setup>

</script>
<template>
  <!-- FORM-SECTION-STARTS-HERE -->
  <section class="">
    <div class="container mx-auto px-4 lg:px-16">
      <div
        class="relative rounded-md grid grid-cols-2 bg-white shadow-xl overflow-hidden z-10 -mt-12"
      >
        <form action="" class="p-10">
          <h3 class="text-3xl font-bold text-[#f37a49]">Send Message</h3>
          <div class="h-1 w-16 bg-gradient-to-r from-red-400 to-white-500"></div>
          <div class="flex flex-col gap-5 mt-7">
            <input
              type="text"
              placeholder="Full Name"
              class="p-2.5 border border-solid outline-none border-gray-400 focus:text-black focus:border-orange-400"
            />
            <input
              type="text"
              placeholder="Address"
              class="p-2.5 border border-solid outline-none border-gray-400 focus:text-black focus:border-orange-400"
            />
            <input
              type="mail"
              placeholder="someone@gmail.com"
              class="p-2.5 border border-solid outline-none border-gray-400 focus:text-black focus:border-orange-400"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="3"
              placeholder="Message"
              class="resize-none p-2.5 border border-solid outline-none border-gray-400 focus:text-black focus:border-orange-400"
            ></textarea>
          </div>
          <div class="mt-6">
            <button
              class="cursor-pointer py-2.5 px-6 text-white bg-[#f37a49] rounded text-lg hover:bg-[#e15d27]"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
        <div class="bg-[#f37a49] p-10">
          <h3 class="text-3xl font-bold text-white">Contact Information</h3>
          <div class="h-1 w-16 bg-gradient-to-r from-gray-100 to-white-500"></div>
          <div class="flex flex-col gap-3.5 pt-7">
            <div class="flex items-center text-white gap-5">
              <i class="fa-solid fa-location-dot"></i>
              <div>
                <p>Address:</p>
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
            <div class="flex items-center text-white gap-5">
              <i class="fa-solid fa-phone"></i>
              <div>
                <p>Phone No.:</p>
                <a href="tel:**********" title="**********">**********</a>
              </div>
            </div>
            <div class="flex items-center text-white gap-5">
              <i class="fa-solid fa-envelope"></i>
              <div>
                <p>E-mail:</p>
                <a href="mailto:mandirachaudhary07@gmail.com" title="mandirachaudhary07@gmail.com"
                  >mandirachaudhary07@gmail.com</a
                >
              </div>
            </div>
            <div class="flex items-center text-white gap-5">
              <i class="fa-solid fa-globe"></i>
              <div>
                <p>Website:</p>
                <a href="" title="link">www.goolge.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- MAP-SECTION-STARTS-HERE -->
</template>
<style>
</style>