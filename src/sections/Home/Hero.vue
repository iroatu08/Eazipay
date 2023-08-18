<template>
<section class="py-[50px] mb-20">
    <div class="hero-section my-[35px] xl:pl-[100px] gap-[64px] lg:pl-[151px]  flex lg:flex-row flex-col items-start">
        <div class="flex flex-col gap-[72px]  px-[16px]  left-side-content   lg:w-[500px]">
            <div class="flex flex-col gap-[24px] text-center lg:text-left">
                <h1 class="font-mademellow text-[40px] leading-[32px] lg:text-[64px] lg:leading-[72px] text-[#292A29]">Run your <span class="text-primary">payroll</span> <span class="text-[#B4A572]">easily</span> in <span class="text-[#EA4E4B]">seconds</span></h1>
            <p class="lg:w-[480.729px] font-aeonik lg:text-[20px] lg:leading-[28px] text-[#515251] ">We’ve built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once.</p>
            <button class="lg:w-[272px] font-aeonik text-[14px] leading-[20px] border border-primary bg-primary text-white rounded-[32px] px-[36px] py-[16px] drop-shadow-[0_8px_16px_rgba(17,69,59,0.20)]">
            Start Using Free, Forever
        </button>
            </div>

            <div class="flex flex-col gap-[16px]">
                <h1 class="font-aeonik text-[18px] leading-[24px] text-center lg:text-left">Download the Eazipay App</h1>

                <div class="flex  gap-4 ">
                <a href="#"  class="inline-block lg:w-[177px] drop-shadow-[0_20px_48px_rgba(170,170,170,0.29)]">  <img :src="Apple" alt="" srcset=""></a>  
                <a href="#" class="inline-block lg:w-[177px] drop-shadow-[0_20px_48px_rgba(170,170,170,0.29)]"> <img  :src="Google" alt="" srcset=""></a>    

                </div>
            </div>
         

        
        </div>
        <div class="right-side  lg:ml-auto">
            <img :src="RightImg" alt="" class=" lg:w-[700px]" srcset="">
        </div>
    </div>

</section>
</template>

<script>
import RightImg from '../../assets/hero-media.png'
import Google from '../../assets/google.png'
import Apple from '../../assets/apple.png'
export default {
    data(){
        return{
            RightImg: RightImg,
            Google: Google,
            Apple: Apple
        }
    }

}
</script>

<style scoped>



</style>