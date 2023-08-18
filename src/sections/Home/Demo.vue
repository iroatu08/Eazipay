<template>
  <section class="relative px-[16px] pb-32 xl:px-[100px]">
    <div class="bg-img absolute left-0 top-10 lg:block hidden">
        <img :src="GreenDots" class=" w-[150px]" alt="" srcset="">
    </div>
    <div class="bg-img absolute right-0 top-0 -z-10 g:block hidden">
        <img :src="Logos" class=" w-[400px] opacity-30" alt="" srcset="">
    </div>

    <div class="hero-section py-[80px] lg:py-[130px]   flex flex-col lg:flex-row gap-[44px] items-start">
        <div class="flex flex-col gap-[42px] left-side-content lg:w-[552px] self-center  text-center lg:text-left ">
            <div class="">
                <h1 class="font-mademellow text-[40px] leading-[34px] lg:text-[64px] lg:leading-[72px] text-primary">Get an Exclusive Demo of Eazipay</h1>
           
            </div>

          
                <h1 class="lg:w-[435px] font-aeonik text-[18px] lg:text-[24px] leading-[30px]">Our greatest priority is to put you and your business first. Let’s show you how we can help.</h1>
        
        </div>

        <div class="right-side  m-auto">
           <div class="form-card flex flex-col gap-[24px] lg:w-[552px] border bg-white border-[#E7E8E7] rounded-[32px] p-[32px] shadow">
            <div class="heading flex flex-col gap-[12px] items-center">
                <h1 class="text-center font-aeonik text-[28px] font-bold leading-[48px]">First things first</h1>
                <p class="lg:w-[342px] font-aeonik text-center leading-[24px] text-[18px] text-[#444]">We want to serve you better. Tell us a bit about yourself or company</p>
            </div>

            <div class="flex gap-3 items-center  p-[8px] border-[1.15px] border-[#E7E8E7] rounded-[16px]">

                <button @click="SetSelectedTab('individual-form')" :class="individualChangeStyle">
                Individual     
               </button>

               <button @click="SetSelectedTab('business-form')" :class="businessChangeStyle"> 
                Company     
               </button>

            </div>

            <keep-alive>
                <component :is="selectedTab"></component>
            </keep-alive>

           </div>
        </div>
    </div>


  </section>
</template>

<script>
import GreenDots from '../../assets/green-dots.png'
import Logos from '../../assets/logos.png'
import FreeImg from '../../assets/free-forever.png'
import IndividualForm from '../../components/IndividualForm.vue'
import BusinessForm from '../../components/BusinessForm.vue'

export default {
  components: { IndividualForm, BusinessForm  },

    data(){
        return{
            Logos:Logos,
            GreenDots: GreenDots,
            FreeImg : FreeImg,
            selectedTab: 'individual-form'
           
        }
    },

    methods: {
        SetSelectedTab(tab){
            this.selectedTab = tab

        }
    },
    computed: {
        individualChangeStyle(){
            if(this.selectedTab === 'individual-form'){
                return 'active'
            }else {
                return 'normal'
            }
        },

        businessChangeStyle(){
            if(this.selectedTab === 'business-form'){
                return 'active'
            }else {
                return 'normal'
            }
        },


    }

}
</script>

<style scoped>
.shadow{
    box-shadow: 0px 20px 48px 0px rgba(170, 170, 170, 0.29);
}

/* @media only screen and (min-width: 320px) {
 .active{
      width: 100px;
 }

 .normal{
      width: 100px;
 }
} */
.active{
    width: 50%;
    font-family: "Aeonik";
    font-size: 16px;
    line-height: 24px;
    border: 1.5px solid #11453B;
    background-color: #11453B;
    color: white;
    border-radius: 12px;
    padding: 8px 11px;
    box-shadow: 0px 8.871848106384277px 40.5570182800293px -2.534813642501831px rgba(24, 39, 75, 0.12), 0px 5.069627285003662px 13.941474914550781px -3.802220582962036px rgba(24, 39, 75, 0.12);
    
}

.normal{
    width: 50%;
    font-family: "Aeonik";
    font-size: 16px;
    line-height: 24px;
    border: 1.5px solid #F2F1F1;
    background-color: #F2F1F1;
    color: #515251;
    border-radius: 12px;
    padding: 8px 11px;
    
}
</style>