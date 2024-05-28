<template>
<div class="bg-white rounded-lg overflow-hidden shadow">
          <img src="@/assets/blog_1.jpg" alt="Blog" class="img-responsive" />
          <div class="flex flex-col justify-between">
            <div class="p-6">
              <h6 class="font-bold text-lg">{{ title}}</h6>
              <span class="text-gray-500 text-lg"><i class="fa-regular fa-calendar-days text-[#f37a49] pr-1"></i> {{date}}</span>
              <p>
                {{content}}
              </p>
            </div>
            <div class="pb-6 pl-6">
              <RouterLink to="/blogdetail" class="py-2.5 px-6 text-white bg-[#f37a49] rounded text-lg hover:bg-[#e15d27]">Read More</RouterLink>
            </div>
          </div>
        </div>
</template>
<script setup>
const props = defineProps({
    title:{
        default:''
    },
    date: {
    default: ''
  },
  content:{
  default: ''
  }
})
console.log(props.default)
</script>