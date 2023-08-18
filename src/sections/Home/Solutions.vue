<template>

  <section class="relative py-40 lg:py-32 xl:px-[100px] ">
    <div class="bg-img absolute inset-0 -z-10 ">
        <img :src="Wave" class="w-full h-full object-cover" alt="" srcset="">
    </div>
    <div class="bg-pattern absolute inset-0 -z-10 lg:block hidden">
        <img :src="Pattern" class="w-full h-full object-cover" alt="" srcset="">
    </div>

    <div class="content flex flex-col gap-[64px]">
        <div class="heading flex flex-col text-center gap-[16px]">
            <h1 class="font-mademellow lg:text-[64px] text-[40px] leading-[36px] lg:leading-[64px] text-primary">For Individuals and Businesses</h1>
            <p class="text-[18px] lg:text-[20px] text-[#292A29] leading-[24px]">Join 200+ businesses using Eazipay's easy solution.</p>
        </div>

        <div class="cards px-[16px] lg:px-0 flex lg:flex-row flex-col gap-[16px] relative">
            <div class="relative  lg:hover:left-[45%] lg:transition-all duration-300 p-[32px] lg:p-[64px] bg-primary  text-white flex flex-col gap-[24px] rounded-[16px] shadow">
                <h1 class="font-aeonik text-[28px] font-bold leading-[36px]">Tamper-proof Payroll for LIfe</h1>

                <div class="font-aeonik text-[18px] leading-[24px] flex flex-col gap-[16px]">
                    <p>Your staff payroll history is kept in one place forever.</p>
                    <p>No more excel sheet or manual records.</p>
                    <p>Download your payroll history anytime you need it.</p>
                </div>
              
            </div>

            <div class="lg:absolute  lg:top-0 lg:bottom-0 lg:left-[25%] lg:w-[50%]  transition-all duration-300 hover:left-[10%]  p-[32px] lg:p-[64px] bg-primary  text-white flex flex-col gap-[24px] rounded-[16px] shadow">
                <h1 class="font-aeonik text-[28px] font-bold leading-[36px]">Tamper-proof Payroll for LIfe</h1>

                <div class="font-aeonik text-[18px] leading-[24px] flex flex-col gap-[16px]">
                    <p>Your staff payroll history is kept in one place forever.</p>
                    <p>No more excel sheet or manual records.</p>
                    <p>Download your payroll history anytime you need it.</p>
                </div>
              
            </div>


           <div class="relative   lg:transition-all lg:duration-300 lg:hover:left-[-2%] p-[32px] lg:p-[64px] bg-primary  text-white flex flex-col gap-[24px] rounded-[16px] shadow">
                <h1 class="font-aeonik text-[28px] font-bold leading-[36px]">Tamper-proof Payroll for LIfe</h1>

                <div class="font-aeonik text-[18px] leading-[24px] flex flex-col gap-[16px]">
                    <p>Your staff payroll history is kept in one place forever.</p>
                    <p>No more excel sheet or manual records.</p>
                    <p>Download your payroll history anytime you need it.</p>
                </div>
              
            </div>
        </div>

        <div class="flex items-center text-center justify-center">
            <h1 class="text-[20px]  w-[621.74px] text-[#292A29] leading-[24px]">We are happy to answer your queries. Please, reach us at <span class="text-[#EA4E4B]">hello@myeazipay.com</span> and expect our response shortly after.</h1>
        </div>

        
     
    </div>
  
  </section>
</template>

<script>
import Wave from '../../assets/wave.png'
import Pattern from '../../assets/patterns.png'
export default {

    data(){
        return{
            Wave: Wave,
            Pattern: Pattern
         
        }
    }
}
</script>

<style scoped>
/* .wave{
  background-image: url('../../assets/wave.png');
  background-position: center;
  background-repeat:no-repeat;
} */

.shadow{
box-shadow: -11px 0px 19px 0px rgba(23, 23, 23, 0.30), 0px 13px 20px 0px rgba(23, 23, 23, 0.20);
}
</style>