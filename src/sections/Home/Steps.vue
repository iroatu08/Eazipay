<template>
  <section class=" py-10 lg:py-32 xl:px-[100px] px-[16px] how-it-works">

    <div class="heading flex flex-col text-center gap-[16px]">
            <h1 class="font-mademellow  text-[44px] lg:text-[64px] lg:leading-[64px] text-primary">How Eazipay Works</h1>
            <p class="text-[20px] text-[#292A29] leading-[24px]">Get started in 3 simple steps.</p>
        </div>

        <div class="hero-section my-[50px]  flex flex-col lg:flex-row items-start gap-[26px]">
        <div class="left-side-content relative  lg:h-[600px] lg:w-[600px] flex justify-center">
            <div class="circle absolute top-0 left-0 w-full h-full lg:grid place-items-center -z-10 hidden">
                <img :src="Oval" alt=""  class="w-full">
            </div>
          
            <img :src="Gif" alt=""  class=" w-auto rounded-[40px]">
              
        </div>


        <div class="right-side  ml-auto">
            <img :src="Steps" alt="" class="w-[400px]" srcset="">
        </div>
    </div>

  </section>
</template>

<script>
import Oval from '../../assets/oval.png';
import Gif from '../../assets/payroll.gif' 
import Steps from "../../assets/steps.svg";
export default {
    data(){
        return{
            Gif: Gif,
            Oval: Oval,
            Steps: Steps
        }
    }

}
</script>

<style>

</style>