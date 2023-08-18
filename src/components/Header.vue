<template>
    <div class="absolute left-0 top-0 w-full overflow-hidden -z-10"><img :src="Gradient"></div>
    <header class=" px-[16px] xl:px-[100px] w-full py-[20px] flex items-center justify-between">

        <div class="flex items-center gap-[72px]">
            <div class="logo">
                <router-link to="/"><img :src="Logo" alt="" class="" srcset=""></router-link>
            </div>

            <nav class="hidden lg:block">
                <ul class="flex items-center font-aeonik font-[16px] gap-[24px] text-[#515251] leading-[24px]">
                    <li class="py-[8px]"><router-link to="">Individual</router-link></li>
                    <li class="py-[8px]"> <router-link to="">Business</router-link></li>
                    <li class="py-[8px]"> <router-link to="/dashboard">Dashboard</router-link></li>
                    <li class="py-[8px]"> <router-link to="">Set your payroll</router-link></li>
                </ul>

            </nav>
        </div>


        <div class="btns hidden items-center gap-[24px] font-aeonik  lg:flex ">
            <button class=" w-[168px] text-[14px] leading-[20px] border border-primary rounded-[24px] px-[32px] py-[10px]">
                Log in
            </button>

            <button
                class="w-[168px] text-[14px] leading-[20px] border border-primary bg-primary text-white rounded-[24px] px-[32px] py-[10px] drop-shadow-[0_8px_16px_rgba(17,69,59,0.20)]">
                Register
            </button>
        </div>

        <div class="icon">
            <i @click="toggleMobileNav" v-show="mobileIcon" class="fa-solid fa-bars"
               ></i>
        </div>

        <div v-show="mobileNav"
            class="backdrop fixed z-10 w-full bg-[rgba(17,69,59,.5)] bg-opacity-30 h-screen top-0 left-0 ">


            <transition name="mobile">
                <div class="transition-all w-[min(300px,80vw)]  bg-white fixed h-screen top-0 right-0 overflow-y-auto z-10">

                    <div class="pt-6 pb-4">

                        <div class="flex flex-col gap-10 px-4">
                            <div class="logo pb-10 flex items-center justify-between">

                                <router-link to="/"><img :src="Logo" alt="" class="" srcset=""></router-link>
                                <div class="icon">
                                    <i @click="toggleMobileNav" v-show="mobileIcon" class="fa-solid fa-xmark"
                                       ></i>
                                </div>


                            </div>


                            <nav class="">
                                <ul
                                    class="flex flex-col items-start font-aeonik font-[16px] gap-[14px] text-[#515251] leading-[24px]">
                                    <li class="py-[8px]"><router-link to="">Individual</router-link></li>
                                    <li class="py-[8px]"> <router-link to="">Business</router-link></li>
                                    <li class="py-[8px]"> <router-link to="/dashboard">Dashboard</router-link></li>
                                    <li class="py-[8px]"> <router-link to="">Set your payroll</router-link></li>
                                </ul>

                            </nav>



                            <div class=" items-center gap-[24px] font-aeonik  lg:flex ">
                                <button
                                    class="w-full text-[14px] leading-[20px] border border-primary bg-primary text-white rounded-[24px] px-[32px] py-[10px] drop-shadow-[0_8px_16px_rgba(17,69,59,0.20)]">
                                    Register
                                </button>
                            </div>

                        </div>


                    </div>

                </div>


            </transition>
        </div>


    </header>
</template>

<script>
import Logo from '../assets/logo.svg'
import Gradient from '../assets/gradients.png'

export default {

    data() {
        return {
            Logo: Logo,
            Gradient: Gradient,
            mobileIcon: null,
            mobileNav: null,
            windowWidth: null,
        }
    },

    created() {
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkScreenSize);
    },

    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },

        checkScreenSize() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 1017) {
                this.mobileIcon = true;
                return;
            }
            this.mobileIcon = false;
            this.mobileNav = false;
            return;
        },
    }


}
</script>

<style scoped>
i {
    cursor: pointer;
    font-size: 30px;
  
}

</style>