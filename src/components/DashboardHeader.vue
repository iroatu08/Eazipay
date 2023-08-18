<template>
 <header class="flex-1 shadow items-center justify-between flex py-[11px] bg-white px-[16px] lg:pl-[61px] lg:pr-[48px] sticky top-0 z-10">
  <div class="company-logo ">
   <img :src="CompanyLogo" class="w-[70px] lg:w-[117px]" alt="" srcset="">
  </div>

  <div class="flex gap-[20px] lg:gap-[64px] items-center">

   <div class="relative">
      <span class="absolute right-[-6px] top-[-4px] w-[16px] h-[16px] px-[1px] flex flex-col justify-center items-center text-[10px] rounded-[100px] text-white bg-red-600">7</span>
      <img :src="Bell" alt="">
   </div>

   <div class="flex items-center gap-[16px]">
      <img :src="UserImg" alt="">
      <div>
         <h1 class="text-[#2B2B2B] text-sm lg:text-[16px] font-bold lg:leading-[24px]">Kalu Abasiama</h1>
         <p class="text-[#898989] text-[14px] leading-[16px]">Admin</p>
      </div>
      <img :src="Arrow" class="" alt="">
   </div>

  </div>
 </header>
</template>

<script>
import CompanyLogo from "../assets/company-logo.svg"
import Arrow from "../assets/arrow-right.svg"
import UserImg from "../assets/user-img.svg"
import Bell from "../assets/bell.svg"
export default {
   data() {
        return {
            CompanyLogo: CompanyLogo,
            UserImg: UserImg,
            Arrow: Arrow,
            Bell: Bell

           
           

        }
    }
}
</script>

<style scoped>
.shadow{
   box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.05);
}
</style>