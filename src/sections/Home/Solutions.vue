<template>

  <section class="solutions py-40 lg:py-32 xl:px-[100px] ">
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
            <div class="card card_1 rounded-[16px]">
                <h1 class="font-aeonik text-[28px] font-bold leading-[36px]">Tamper-proof Payroll for LIfe</h1>

                <div class="font-aeonik text-[18px] leading-[24px] flex flex-col gap-[16px]">
                    <p>Your staff payroll history is kept in one place forever.</p>
                    <p>No more excel sheet or manual records.</p>
                    <p>Download your payroll history anytime you need it.</p>
                </div>
              
            </div>

            <div class="card card_2 rounded-[16px]">
                <h1 class="font-aeonik text-[28px] font-bold leading-[36px]">All Payroll, Anytime Anywhere</h1>

                <div class="font-aeonik text-[18px] leading-[24px] flex flex-col gap-[16px]">
                    <p>Wherever you are Eazipay has got you covered on ALL your Payroll tasks.</p>
                    <p>Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay handle all your compliamces in one place and easily, in seconds!</p>
                   
                </div>
              
            </div>


           <div class="card card_3 rounded-[16px]">
                <h1 class="font-aeonik text-[28px] font-bold leading-[36px]">Payroll in Seconds</h1>

                <div class="font-aeonik text-[18px] leading-[24px] flex flex-col gap-[16px]">
                    <p>Never again wil you spend more than 2 minutes on payroll.</p>
                    <p>Just click on your staff annd bulk-pay them at once.</p>
                    <p>Payment is done permanently.</p>
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


    .solutions .cards{
        display:flex;
        gap: 0;
        position: relative
    }

    .solutions .card{
        flex: 1;
        background: radial-gradient(50% 50% at 50% 50%,rgba(217,235,205,.14) 0,rgba(217,235,205,.0266) 100%),#11453b;
        box-shadow: 0 13px 20px hsla(0,0%,9%,.2),-11px 0 19px hsla(0,0%,9%,.3);
        color: #fff;
        padding: 60px 50px;
        transition: .45s cubic-bezier(.175,.585,.32,1.2075);
        height: 280px
    }

    .solutions .card h3{
        color: #fff;
        font-size: 26px;
        line-height: 28px;
        margin-bottom: 24px
    }

    .solutions .card p{
        font-size: 16px;
        line-height: 22px;
        color: #fff
    }

    .solutions .card p:after,.solutions .card p:before {
        display: none
    }

 
    .solutions .card_2{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 25%;
        width: 50%
    }

    .solutions .card_3{
        position: relative;
        left: 0
    }

    .solutions .card_1:hover~.card_2{
        left: 40%
    }

    .solutions .card_2:hover {
        left: 5%
    }

    .solutions .card_2:hover~.card-3{
        left: 15%
    }

    .solutions .card_3:hover {
        left: -5%
    }


</style>