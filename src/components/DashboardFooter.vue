<template>
  <div class="md:hidden w-full z-20  fixed bottom-0 left-0 px-2 bg-white grid grid-cols-5 drop-shadow-[0_-8px_12px_rgba(101,108,125,0.08)]"
   >
    <div class="flex flex-col items-center gap-1 p-4 cursor-pointer"><img class="w-6"
        :src="Home" alt=""><span class="text-primary text-xs font-medium"
      >Home</span></div>

      <div class="flex flex-col items-center gap-1 p-4 cursor-pointer"><img class="w-6"
        :src="Employee" alt=""><span class="text-dark-900 text-xs font-medium"
      >Employee </span></div>

    <div class="flex flex-col items-center gap-1 p-4 cursor-pointer"><img class="w-6"
        :src="Payroll" alt=""><span class="text-dark-900 text-xs font-medium"
      >Payroll</span></div>

      <div class="flex flex-col items-center gap-1 p-4 cursor-pointer"><img class="w-6"
        :src="Loan" alt=""><span class="text-dark-900 text-xs font-medium"
      >Loan</span></div>


    <div
      class="text-dark-900 flex flex-col items-center justify-center gap-1 p-4 cursor-pointer py-3 px-6 md:py-0 md:px-0"
  ><img :src="Dashboard" alt="Eazipay"><span
      class="text-xs font-medium">More</span></div>
</div></template>

<script>
import Home from "../assets/home.svg"
import Dashboard from "../assets/dashboard.svg"
import Employee from "../assets/employee.svg"
import Payroll from "../assets/payroll.svg"

import Loan from "../assets/loan.svg"

export default {
  data() {
        return {
            Home: Home,
            Dashboard: Dashboard,
          
            Employee: Employee,
            Payroll: Payroll,
          
            Loan: Loan,
          

        }
    }
}
</script>

<style></style>