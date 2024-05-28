<template>
        <div class="cursor-pointer py-6 px-5 text-center rounded-md shadow-xl">
          <img src="@/assets/icon.svg" alt="icon" class="img-responsive w-8 my-0 ml-auto mr-auto" />
          <h6 class="py-4 text-xl font-bold">{{title}}</h6>
          <p>
          {{ content }}
          </p>
        </div>
</template>
<script setup>
const props = defineProps({
    title:{
        default:''
    },
    content:{
        default :''
    }
})
console.log(props.default)
</script>