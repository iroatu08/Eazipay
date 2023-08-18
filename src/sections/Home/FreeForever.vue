<template>
  <section class="relative pb-32 xl:px-[100px]">
    <img :src="RedDots" alt="" srcset="" class="w-[50px]">
    <div class="bg-img absolute inset-0 -z-10 ">
        <img :src="Intersect" class="w-full h-full object-cover" alt="" srcset="">
    </div>
    <div class="bg-pattern absolute inset-0 -z-10">
        <img :src="Pattern" class="w-full h-full object-cover" alt="" srcset="">
    </div>

    <div class="px-[16px] my-[35px] xl:pl-[20px]   flex flex-col lg:flex-row gap-[44px] items-start">
        <div class="flex flex-col gap-[42px] left-side-content lg:w-[552px] self-center">
            <div class="">
                <h1 class="font-mademellow text-[40px] leading-[32px] text-center lg:text-left  lg:text-[56px] lg:leading-[64px] text-[#292A29]">Free forever for your <span class="text-[#EA4E4B]">salary payment</span></h1>
           
            </div>

            <div class="flex flex-col gap-[16px]">
                <h1 class="font-aeonik text-[18px] leading-[24px] text-center lg:text-left">Download the Eazipay App</h1>

                <div class="flex  gap-4 ">
                <a href="#"  class="inline-block lg:w-[177px] drop-shadow-[0_20px_48px_rgba(170,170,170,0.29)]">  <img :src="Apple" alt="" srcset=""></a>  
                <a href="#" class="inline-block lg:w-[177px] drop-shadow-[0_20px_48px_rgba(170,170,170,0.29)]"> <img  :src="Google" alt="" srcset=""></a>    

                </div>
            </div>


        
        </div>

        <div class="right-side  lg:m-auto">
            <img :src="FreeImg" alt="" class=" lg:w-[500px]" srcset="">
        </div>
    </div>

  </section>
</template>

<script>
import Intersect from '../../assets/Intersect.svg'
import Pattern from '../../assets/patterns.png'
import RedDots from '../../assets/red-dots.png'
import Google from '../../assets/google.png'
import Apple from '../../assets/apple.png'
import FreeImg from '../../assets/free-forever.png'
export default {
    data(){
        return{
            Intersect: Intersect,
            Pattern: Pattern,
            RedDots: RedDots,
            Google: Google,
            Apple: Apple,
            FreeImg : FreeImg
         
        }
    }
}
</script>

<style>

</style>