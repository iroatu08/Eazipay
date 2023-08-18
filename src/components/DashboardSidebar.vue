<template>
    <div class="w-[272px] hidden lg:block h-screen  overflow-y-auto ">
        <div class="logo">
            <router-link to="/"><img :src="Logo" alt="" class="" srcset=""></router-link>
        </div>

        <div class="nav-items pt-5 pb-20">
            <router-link
                class="nav-item flex text-[16px] leading-[24px] font-aeonik items-center border-b-[0.8px] gap-[12px] py-[16px] px-[20px]  text-[#515251] hover:bg-[#f7fbf5] hover:text-primary hover:border-l-[4px] hover:border-l-primary hover:rounded-l-[2px] hover:transition-all"
                to="/">

                <img :src="Dashboard" class="hover:text-primary" alt="" srcset="">
                <h1>Dashboard</h1>

            </router-link>

            <router-link
                class="nav-item flex  text-[16px] leading-[24px]  font-aeonik items-center border-b-[0.8px] gap-[12px] py-[16px] px-[20px]  text-[#515251] hover:bg-[#f7fbf5] hover:text-primary hover:border-l-[4px] hover:border-l-primary hover:rounded-l-[2px] hover:transition-all"
                to="/">

                <img :src="Wallet" class="hover:text-primary" alt="" srcset="">
                <h1>Wallet</h1>

            </router-link>

            <router-link
                class="nav-item flex  text-[16px] leading-[24px]  font-aeonik items-center justify-between border-b-[0.8px] py-[16px] px-[20px]  text-[#515251] hover:bg-[#f7fbf5] hover:text-primary hover:border-l-[4px] hover:border-l-primary hover:rounded-l-[2px] hover:transition-all"
                to="/">

                <div class="flex gap-[12px] items-center">
                    <img :src="Employee" class="hover:text-primary" alt="" srcset="">
                    <h1>Employee Management</h1>
                </div>


                <img :src="Arrow" class="hover:text-primary" alt="" srcset="">


            </router-link>

            <router-link
                class="nav-item flex  text-[16px] leading-[24px]  font-aeonik items-center justify-between border-b-[0.8px] py-[16px] px-[20px]  text-[#515251] hover:bg-[#f7fbf5] hover:text-primary hover:border-l-[4px] hover:border-l-primary hover:rounded-l-[2px] hover:transition-all"
                to="/">

                <div class="flex gap-[12px] items-center">
                    <img :src="Payroll" class="hover:text-primary" alt="" srcset="">
                    <h1>Payroll</h1>
                </div>


                <img :src="Arrow" class="hover:text-primary" alt="" srcset="">


            </router-link>

            <router-link
                class="nav-item flex  text-[16px] leading-[24px]  font-aeonik items-center justify-between border-b-[0.8px] py-[16px] px-[20px]  text-[#515251] hover:bg-[#f7fbf5] hover:text-primary hover:border-l-[4px] hover:border-l-primary hover:rounded-l-[2px] hover:transition-all"
                to="/">

                <div class="flex gap-[12px] items-center">
                    <img :src="Compliance" class="hover:text-primary" alt="" srcset="">
                    <h1>Compliance</h1>
                </div>


                <img :src="Arrow" class="hover:text-primary" alt="" srcset="">


            </router-link>

            <router-link
                class="nav-item flex  text-[16px] leading-[24px]  font-aeonik items-center justify-between border-b-[0.8px] py-[16px] px-[20px]  text-[#515251] hover:bg-[#f7fbf5] hover:text-primary hover:border-l-[4px] hover:border-l-primary hover:rounded-l-[2px] hover:transition-all"
                to="/">

                <div class="flex gap-[12px] items-center">
                    <img :src="Loan" class="hover:text-primary" alt="" srcset="">
                    <h1>Quick Loan </h1>
                </div>


                <img :src="Arrow" class="hover:text-primary" alt="" srcset="">


            </router-link>

            <router-link
                class="nav-item flex  text-[16px] leading-[24px]  font-aeonik items-center justify-between  py-[16px] px-[20px]  text-[#515251] hover:bg-[#f7fbf5] hover:text-primary hover:border-l-[4px] hover:border-l-primary hover:rounded-l-[2px] hover:transition-all"
                to="/">

                <div class="flex gap-[12px] items-center">
                    <img :src="Book" class="hover:text-primary" alt="" srcset="">
                    <h1>Book Keeping </h1>
                </div>


                <img :src="Arrow" class="hover:text-primary" alt="" srcset="">


            </router-link>

            <div class="my-[24px] px-[20px]">
                <hr>
            </div>

            <router-link
                class="nav-item flex text-[16px] leading-[24px] font-aeonik items-center border-b-[0.8px] gap-[12px] py-[16px] px-[20px]  text-[#515251] hover:bg-[#f7fbf5] hover:text-primary hover:border-l-[4px] hover:border-l-primary hover:rounded-l-[2px] hover:transition-all"
                to="/">

                <img :src="Support" class="hover:text-primary" alt="" srcset="">
                <h1>Support</h1>

            </router-link>

            <router-link
                class="nav-item flex  text-[16px] leading-[24px]  font-aeonik items-center justify-between  py-[16px] px-[20px]  text-[#515251] hover:bg-[#f7fbf5] hover:text-primary hover:border-l-[4px] hover:border-l-primary hover:rounded-l-[2px] hover:transition-all"
                to="/">

                <div class="flex gap-[12px] items-center">
                    <img :src="Settings" class="hover:text-primary" alt="" srcset="">
                    <h1>Settings </h1>
                </div>


                <img :src="Arrow" class="hover:text-primary" alt="" srcset="">


            </router-link>
            





        </div>


    </div>
</template>

<script>

import Logo from "../assets/logo-wave.svg"
import Dashboard from "../assets/dashboard.svg"
import Arrow from "../assets/arrow-down.svg"
import Wallet from "../assets/wallet.svg"
import Employee from "../assets/employee.svg"
import Payroll from "../assets/payroll.svg"
import Compliance from "../assets/compliance.svg"
import Loan from "../assets/loan.svg"
import Book from "../assets/book.svg"
import Support from "../assets/support.svg"
import Settings from "../assets/setting.svg"
export default {
    data() {
        return {
            Logo: Logo,
            Dashboard: Dashboard,
            Arrow: Arrow,
            Wallet:Wallet,
            Employee: Employee,
            Payroll: Payroll,
            Compliance: Compliance,
            Loan: Loan,
            Book: Book,
            Support: Support,
            Settings: Settings

        }
    }

}
</script>

<style></style>