<template>
  <footer class="xl:px-[100px] w-full py-[64px] flex items-start flex-col-reverse lg:flex-row px-[16px] gap-[64px] lg:gap-[125px]  border-t border-[#EAEAEA]">

    <div class="company-info  flex flex-col gap-[40px] w-full lg:items-start items-center  lg:w-[278px]">
        <div>
            <img :src="Logo" alt="" srcset="">
        </div>
        <div class="copy-right font-aeonik text-[#515251] font-light space-y-[8px] text-center lg:text-left">
            <p class="font-[14px] leading-[20px]">Copyright © 2023 Eazipay.</p>
            <p class="font-[14px] leading-[20px]">All rights reserved</p>

        </div>

        <div class="icons">
        <ul class="flex items-center gap-[16px]">
            <li><a href="#"><img :src="Instagram" alt="" srcset=""></a></li>
             <li><a href="#"><img :src="Twitter" alt="" srcset=""></a></li>
             <li><a href="#"><img :src="Linkedin" alt="" srcset=""></a></li>
             <li><a href="#"><img :src="Facebook" alt="" srcset=""></a></li>
        </ul>

        </div>


    </div>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-[30px] w-full">
        <div class="products flex  flex-col gap-[24px]">
            <h1 class="font-aeonik text-[20px] text-[#292A29] font-bold">Product</h1>
        <ul class="flex flex-col items-start font-aeonik font-[16px] gap-[12px] text-[#7C7C7C] leading-[24px]">
        <li><router-link to="">Individual</router-link></li>
        <li> <router-link to="">Business</router-link></li>
        <li> <router-link to="">Pricing</router-link></li>
        <li>  <router-link to="">Set your payroll</router-link></li>
        </ul>

        </div>

        <div class="legal flex  flex-col gap-[24px]">
            <h1 class="font-aeonik text-[20px] text-[#292A29] font-bold">Legal</h1>
        <ul class="flex flex-col items-start font-aeonik font-[16px] gap-[12px] text-[#7C7C7C] leading-[24px]">
        <li><router-link to="">Privacy Policy</router-link></li>
        <li> <router-link to="">Terms of Service</router-link></li>
      
        </ul>

        </div>


        <div class="resources flex  flex-col gap-[24px]">
            <h1 class="font-aeonik text-[20px] text-[#292A29] font-bold">Resources</h1>
        <ul class="flex flex-col items-start font-aeonik font-[16px] gap-[12px] text-[#7C7C7C] leading-[24px]">
        <li><router-link to="">FAQs</router-link></li>
        <li> <router-link to="">Blog</router-link></li>
        <li><router-link to="">Career</router-link></li>
        <li> <router-link to="">Customer Stories</router-link></li>
      
        </ul>

        </div>

        <div class="resources flex  flex-col gap-[24px]">
            <h1 class="font-aeonik text-[20px] text-[#292A29] font-bold">Contact us</h1>
        <ul class="flex flex-col items-start font-aeonik font-[16px] gap-[12px] text-[#7C7C7C] leading-[24px]">
        <li><a href="mailto:eazipay@gmail.com">eazipay@gmail.com</a></li>
        <li><a href="tel:+234 816 878 9518">+234 816 878 9518</a></li>       
        </ul>

        <div class="newsletter">
            <form action="" class="rounded-[16px] w-full lg:w-[200px] flex items-center gap-[10px] font-aeonik bg-[#F2F1F1] px-[16px] py-[9px]">
                <input placeholder="Your email address" class="w-full bg-transparent p-2 outline-none placeholder-[#515251] text-[#515251] text-[14px] leading-[20px]" type="text" name="" id="">
                <button type="submit"><img :src="Enter" alt="" srcset=""></button>
            </form>

        </div>

        </div>

    </div>
   
   


  </footer>
  </template>
  
  <script>
  import Logo from "../assets/logo-footer.svg"
  import Instagram from "../assets/instagram.svg"
  import Facebook from "../assets/facebook.svg"
  import Twitter from "../assets/twitter.svg"
  import Linkedin from "../assets/linkedin.svg"
  import Enter from "../assets/enter.svg"
  export default {
    data(){
        return{
            Logo: Logo,
            Instagram: Instagram,
            Facebook: Facebook,
            Twitter: Twitter,   
            Linkedin: Linkedin,
            Enter: Enter
        }
    }

  }
  </script>
  
  <style>
  
  </style>