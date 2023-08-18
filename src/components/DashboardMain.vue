<template>
  <section class="bg-[#F9FAFC] px-[16px] lg:px-[83px] pt-[48px] ">
    <div class="user-info font-aeonik pb-[40px]">
      <h1 class="font-bold text-[18px] leading-[20px] lg:text-[36px] lg:leading-[48px]">Welcome Abasiama</h1>
      <p class="text-[14px] lg:text-[16px] lg:leading-[24px]">Pay and manage your employee in minutes</p>
    </div>

    <div class="flex flex-col gap-[48px]">

      <div class="overview flex lg:flex-row flex-col gap-[48px] items-center">
        <div class="flex flex-col items-start gap-[48px] w-full lg:w-[85%]">

          <div
            class="bg-[#11453B] w-full wave wallet-card font-aeonik flex items-center justify-between px-[24px] lg:px-[32px] py-[31px] rounded-[24px] border-[1px] border-[#E7E8E7]">
            <div class="gap-[16px] flex flex-col w-full">
              <p class="text-[#D9EBCD] text-[14px] lg:text-[16px] lg:leading-[24px]">Wallet Balance</p>
              <div class=" flex items-center justify-between font-aeonik">


                <div class="flex items-center gap-2 text-white">
                  <h1 class="text-[20px] lg:text-[32px] lg:leading-[40px] font-bold">N12,560,078.00</h1>
                  <img :src="Eye" alt="" srcset="">
                </div>


                <button
                  class="rounded-[24px] ml-auto px-[16px] lg:px-[28px] py-[12px] flex items-center justify-center bg-[#D9EBCD]  drop-shadow-[0_6px_12px_rgba(0,0,0,0.20)]">
                  Fund Wallet
                </button>

              </div>
            </div>


          </div>

          <div class="cards grid grid-cols-2 lg:grid-cols-4 gap-[32px] w-full">
            <router-link
              class="bg-white rounded-[24px] font-aeonik items-center justify-between border-[1px] border-[#e7e8e7] py-[16px] px-[24px]  drop-shadow-[0_9px_18px_rgba(170,170,170,0.15)]"
              to="/">

              <div class="flex gap-[12px] flex-col items-center">
                <img :src="AddEmployee" class="hover:text-primary" alt="" srcset="">
                <h1 class="text-[#515251]  text-[14px] leading-[16px] ">Add Employee </h1>
              </div>

            </router-link>

            <router-link
              class="bg-white rounded-[24px] font-aeonik items-center justify-between border-[1px] border-[#e7e8e7] py-[16px] px-[24px]  drop-shadow-[0_9px_18px_rgba(170,170,170,0.15)]"
              to="/">

              <div class="flex gap-[12px] flex-col items-center">
                <img :src="PaySalary" class="hover:text-primary" alt="" srcset="">
                <h1 class="text-[#515251]  text-[14px] leading-[16px] ">Pay Salaries </h1>
              </div>

            </router-link>

            <router-link
              class="bg-white rounded-[24px] font-aeonik items-center justify-between border-[1px] border-[#e7e8e7] py-[16px] px-[24px]  drop-shadow-[0_9px_18px_rgba(170,170,170,0.15)]"
              to="/">

              <div class="flex gap-[12px] flex-col items-center">
                <img :src="Pay" class="hover:text-primary" alt="" srcset="">
                <h1 class="text-[#515251]  text-[14px] leading-[16px] ">Pay Salary </h1>
              </div>

            </router-link>

            <router-link
              class="bg-white rounded-[24px] font-aeonik items-center justify-between border-[1px] border-[#e7e8e7] py-[16px] px-[24px]  drop-shadow-[0_9px_18px_rgba(170,170,170,0.15)]"
              to="/">

              <div class="flex gap-[12px] flex-col items-center">
                <img :src="QuickLoan" class="hover:text-primary" alt="" srcset="">
                <h1 class="text-[#515251]  text-[14px] leading-[16px] ">Quick Loan</h1>
              </div>

            </router-link>





          </div>

        </div>

        <div class="payroll flex flex-row lg:flex-col self-start w-full lg:w-[25%]">
    

          <div
            class="lg:px-[0px] w-full rounded-l-[16px] rounded-l-t-[16px] rounded-lb-[16px] lg:rounded-tr-[16px] lg:rounded-tl-[16px]  pt-[26px] lg:pt-[0px] space-y-[8px] pb-[24px] bg-white border-[1px] border-[#e7e8e7]  drop-shadow-[0_9px_18px_rgba(170,170,170,0.15)]">
            <div class="font-aeonik">
            <h1
              class="text-[#515251] rounded-l-t-[16px] rounded-lb-[16px] lg:rounded-tr-[16px] lg:rounded-tl-[16px]  text-[16px] font-bold leading-[24px] px-[36px] py-[8px] lg:bg-[#D9EBCD]">
              Next Payroll</h1>
          </div>
            <div class="flex items-center justify-center gap-2 ">
              <img :src="Calendar" alt="" srcset="">
              <h1 class="text-[#515251] text-[12px] leading-[16px] font-light">Friday</h1>

            </div>
            <h1 class="text-[#515251] text-center text-[18px] font-bold leading-[24px] ">09/11/2022</h1>


          </div>

          <div
            class="px-[16px] w-full  rounded-rt-[16px] rounded-rb-[16px] lg:rounded-br-[16px] lg:rounded-bl-[16px]   pt-[24px] space-y-[8px] pb-[16px] bg-white border-[1px] border-[#e7e8e7]  drop-shadow-[0_9px_18px_rgba(170,170,170,0.15)]">

            <h1 class="text-[#515251] text-[16px] leading-[24px] ">Total Employee</h1>

            <h1 class="text-[32px] font-bold leading-40px">64</h1>




            <div class="flex items-center w-full">
              <div class="w-[50%] bg-primary p-2"></div>
              <div class="w-[50%] bg-red-700 p-2"></div>
            </div>

            <div class="flex items-center">
              <div class="font-aeonik w-[50%]">
                <h1 class="text-[#8D8E8D] font-bold text-[10px] leading-[12px] ">Male</h1>
                <p class="text-[#8D8E8D] font-bold text-[10px] leading-[12px] ">32</p>
              </div>

              <div class="font-aeonik w-[50%]">
                <h1 class="text-[#8D8E8D] font-bold text-[10px] leading-[12px] ">Female</h1>
                <p class="text-[#8D8E8D] font-bold text-[10px] leading-[12px] ">32</p>
              </div>

            </div>
          </div>
          <div>

          </div>

        </div>
      </div>

      <div
        class="chart p-[16px] lg:p-[48px] bg-white drop-shadow-[0_9px_18px_rgba(170,170,170,0.15)] rounded-[16px] flex flex-col gap-[16px]">
        <div class="flex flex-row items-center justify-between">
          <div class="inflow font-aeonik">
            <p class="text-[16px] leading-[24px]">Inflow</p>
            <h1 class="lg:text-[28px] text-[16px] font-bold lg:leading-[36px] text-[#219653]">₦1,567,552</h1>

          </div>
          <div class="inflow font-aeonik">
            <p class="text-[16px] leading-[24px]">Outflow</p>
            <h1 class="lg:text-[28px] text-[16px] font-bold lg:leading-[36px]  text-[#EF4444]">₦1,567,552</h1>

          </div>

          <div class=" font-aeonik flex gap-2 items-center">
            <p class="text-[16px] leading-[24px]">Outflow</p>
            <img :src="Arrow" alt="" srcset="">

          </div>
        </div>

        <div class="w-full">
          <!-- <Chart :options="{ responsive: true }" :chartData="{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Top users',
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1,
                        data: [40, 39, 10, 40, 39, 80, 40]
                    }
                ]
          }"></Chart> -->

           <Chart />

        </div>

        <div class="py-[10px] px-[16px] bg-primary w-[72px] ml-auto ">
          <h1 class="text-white font-aeonik text-[16px] font-bold leading-[24px]">2023</h1>
        </div>

      </div>

      <div class="filter">
        <h1 class=" text-[24px] lg:text-[32px] lg:leading-[40px] font-aeonik text-[#292A29]">Recent Activities</h1>

        <div class="search-filters py-[24px] flex lg:flex-row flex-col items-center gap-[16px]">
          <div class="search flex items-center bg-white border pl-[32px] w-full lg:w-[90%]  rounded-[16px] ">

            <input type="text" placeholder="Search employee"
              class="text-gray-500  focus:ring-0 focus:outline-none py-[10px] font-aeonik text-[14px] leading-[16px]  w-full" />
            <button class="px-[16px] bg-[#D9EBCD] rounded-r-[16px] py-[10px]">
              <img :src="Search" alt="" srcset="">
            </button>







          </div>

          <div class="more-filter w-full  lg:w-[10%]">
            <button
              class=" w-full flex border border-[#b5b6b5] items-center justify-center px-[16px] py-[10px] rounded-[16px] space-x-2 text-xs">
              <img :src="Filter" alt="" srcset="">
              <span class="text-[#8D8E8D] text-[14px] leading-[14px]">Filters</span>
            </button>
          </div>

        </div>

        <div class="filter-results px-[16px] lg:px-[24px] overflow-y-auto h-[752px] bg-[#f5f5f6] rounded-[20px] pb-28 mb-28">
          <div class="pt-[32px] space-y-[12px]">
            <h1 class="text-[18px] leading-[24px] font-aeonik pb-[24px]">Wednesday, November 09, 2022</h1>

            <div class="filterOne px-[16px] lg:px-[48px] py-[14px] bg-white drop-shadow-[0_9px_18px_rgba(170,170,170,0.15)] rounded-[16px] ">
              <h1 class="text-[14px] leading-[16px] font-aeonik font-light pb-[8px]">PAYROLL</h1>

              <div class="grid grid-cols-2 lg:grid-cols-4 gap-[24px] lg:gap-[100px] py-[10px]">
                <div class="flex items-end lg:items-center gap-[4px]">
      <img :src="UserImg" class="w-10" alt="">
      <div>
         <h1 class="text-[#515251] text-[16px] leading-[24px]  lg:w-[238px] ">Badmus Kemis</h1>
         
      </div>
   </div>     

   <div class="flex flex-col justify-between items-start lg:w-[238px] ">
    
     
        <p class="text-[#898989] text-[12px] leading-[16px]">ACTIVITY</p> 
         <h1 class="text-[#515251] text-[16px] leading-[24px]">Paid November 2022 salary</h1>

     
   </div>     

   <div class="flex flex-col justify-between items-start">
    
     
    <p class="text-[#898989] text-[12px] leading-[16px]">EMPLOYEE</p> 
     <h1 class="text-[#515251] text-[16px] leading-[24px]">52</h1>

 
</div>   

<div class="flex flex-col justify-between items-start">
    
     
    <p class="text-[#898989] text-[12px] leading-[16px]">TIME</p> 
     <h1 class="text-[#515251] text-[16px] leading-[24px]">16:15</h1>

 
</div>   

              </div>

              

            </div>

            <div class="filterTwo px-[16px]  lg:px-[48px] py-[8px] bg-white drop-shadow-[0_9px_18px_rgba(170,170,170,0.15)] rounded-[16px] ">
              <h1 class="text-[14px] leading-[16px] font-aeonik font-light pb-[8px]">EMPLOYEE MANAGEMENT</h1>

              <div class="grid  grid-cols-2 lg:grid-cols-4 gap-[24px] lg:gap-[100px]  py-[10px]">
                <div class="flex items-end lg:items-center  gap-[4px]">
      <img :src="UserImg" class="w-10" alt="">
      <div>
         <h1 class="text-[#515251] text-[16px] leading-[24px]  lg:w-[238px] ">Badmus Kemis</h1>
         
      </div>
   </div>     

   <div class="flex flex-col justify-between items-start lg:w-[238px] ">
    
     
        <p class="text-[#898989] text-[12px] leading-[16px]">ACTIVITY</p> 
         <h1 class="text-[#515251] text-[16px] leading-[24px]">Added new employee</h1>

     
   </div>     

   <div class="flex flex-col justify-between items-start">
    
     
    <p class="text-[#898989] text-[12px] leading-[16px]">EMPLOYEE</p> 
     <h1 class="text-[#515251] text-[16px] leading-[24px]">04</h1>

 
</div>   

              </div>

              

            </div>

          </div>

          <div class="pt-[32px] space-y-[12px]">
            <h1 class="text-[18px] leading-[24px] font-aeonik pb-[24px]">Wednesday, November 09, 2022</h1>

            <div class="filterOne px-[16px] lg:px-[48px] py-[14px] bg-white drop-shadow-[0_9px_18px_rgba(170,170,170,0.15)] rounded-[16px] ">
              <h1 class="text-[14px] leading-[16px] font-aeonik font-light pb-[8px]">PAYROLL</h1>

              <div class="grid grid-cols-2 lg:grid-cols-4 gap-[24px] lg:gap-[100px] py-[10px]">
                <div class="flex items-end lg:items-center gap-[4px]">
      <img :src="UserImg" class="w-10" alt="">
      <div>
         <h1 class="text-[#515251] text-[16px] leading-[24px]  lg:w-[238px] ">Badmus Kemis</h1>
         
      </div>
   </div>     

   <div class="flex flex-col justify-between items-start lg:w-[238px] ">
    
     
        <p class="text-[#898989] text-[12px] leading-[16px]">ACTIVITY</p> 
         <h1 class="text-[#515251] text-[16px] leading-[24px]">Paid November 2022 salary</h1>

     
   </div>     

   <div class="flex flex-col justify-between items-start">
    
     
    <p class="text-[#898989] text-[12px] leading-[16px]">EMPLOYEE</p> 
     <h1 class="text-[#515251] text-[16px] leading-[24px]">52</h1>

 
</div>   

<div class="flex flex-col justify-between items-start">
    
     
    <p class="text-[#898989] text-[12px] leading-[16px]">TIME</p> 
     <h1 class="text-[#515251] text-[16px] leading-[24px]">16:15</h1>

 
</div>   

              </div>

              

            </div>

            <div class="filterTwo px-[16px]  lg:px-[48px] py-[8px] bg-white drop-shadow-[0_9px_18px_rgba(170,170,170,0.15)] rounded-[16px] ">
              <h1 class="text-[14px] leading-[16px] font-aeonik font-light pb-[8px]">EMPLOYEE MANAGEMENT</h1>

              <div class="grid  grid-cols-2 lg:grid-cols-4 gap-[24px] lg:gap-[100px]  py-[10px]">
                <div class="flex items-end lg:items-center  gap-[4px]">
      <img :src="UserImg" class="w-10" alt="">
      <div>
         <h1 class="text-[#515251] text-[16px] leading-[24px]  lg:w-[238px] ">Badmus Kemis</h1>
         
      </div>
   </div>     

   <div class="flex flex-col justify-between items-start lg:w-[238px] ">
    
     
        <p class="text-[#898989] text-[12px] leading-[16px]">ACTIVITY</p> 
         <h1 class="text-[#515251] text-[16px] leading-[24px]">Added new employee</h1>

     
   </div>     

   <div class="flex flex-col justify-between items-start">
    
     
    <p class="text-[#898989] text-[12px] leading-[16px]">EMPLOYEE</p> 
     <h1 class="text-[#515251] text-[16px] leading-[24px]">04</h1>

 
</div>   

              </div>

              

            </div>

          </div>

          <div class="pt-[32px] space-y-[12px]">
            <h1 class="text-[18px] leading-[24px] font-aeonik pb-[24px]">Wednesday, November 09, 2022</h1>

            <div class="filterOne px-[16px] lg:px-[48px] py-[14px] bg-white drop-shadow-[0_9px_18px_rgba(170,170,170,0.15)] rounded-[16px] ">
              <h1 class="text-[14px] leading-[16px] font-aeonik font-light pb-[8px]">PAYROLL</h1>

              <div class="grid grid-cols-2 lg:grid-cols-4 gap-[24px] lg:gap-[100px] py-[10px]">
                <div class="flex items-end lg:items-center gap-[4px]">
      <img :src="UserImg" class="w-10" alt="">
      <div>
         <h1 class="text-[#515251] text-[16px] leading-[24px]  lg:w-[238px] ">Badmus Kemis</h1>
         
      </div>
   </div>     

   <div class="flex flex-col justify-between items-start lg:w-[238px] ">
    
     
        <p class="text-[#898989] text-[12px] leading-[16px]">ACTIVITY</p> 
         <h1 class="text-[#515251] text-[16px] leading-[24px]">Paid November 2022 salary</h1>

     
   </div>     

   <div class="flex flex-col justify-between items-start">
    
     
    <p class="text-[#898989] text-[12px] leading-[16px]">EMPLOYEE</p> 
     <h1 class="text-[#515251] text-[16px] leading-[24px]">52</h1>

 
</div>   

<div class="flex flex-col justify-between items-start">
    
     
    <p class="text-[#898989] text-[12px] leading-[16px]">TIME</p> 
     <h1 class="text-[#515251] text-[16px] leading-[24px]">16:15</h1>

 
</div>   

              </div>

              

            </div>

            <div class="filterTwo px-[16px]  lg:px-[48px] py-[8px] bg-white drop-shadow-[0_9px_18px_rgba(170,170,170,0.15)] rounded-[16px] ">
              <h1 class="text-[14px] leading-[16px] font-aeonik font-light pb-[8px]">EMPLOYEE MANAGEMENT</h1>

              <div class="grid  grid-cols-2 lg:grid-cols-4 gap-[24px] lg:gap-[100px]  py-[10px]">
                <div class="flex items-end lg:items-center  gap-[4px]">
      <img :src="UserImg" class="w-10" alt="">
      <div>
         <h1 class="text-[#515251] text-[16px] leading-[24px]  lg:w-[238px] ">Badmus Kemis</h1>
         
      </div>
   </div>     

   <div class="flex flex-col justify-between items-start lg:w-[238px] ">
    
     
        <p class="text-[#898989] text-[12px] leading-[16px]">ACTIVITY</p> 
         <h1 class="text-[#515251] text-[16px] leading-[24px]">Added new employee</h1>

     
   </div>     

   <div class="flex flex-col justify-between items-start">
    
     
    <p class="text-[#898989] text-[12px] leading-[16px]">EMPLOYEE</p> 
     <h1 class="text-[#515251] text-[16px] leading-[24px]">04</h1>

 
</div>   

              </div>

              

            </div>

          </div>
         
         
        </div>

      </div>


    </div>



  </section>
</template>

<script>
import Eye from "../assets/eye.svg"
import AddEmployee from "../assets/add-employee.svg"
import PaySalary from "../assets/pay-salary.svg"
import Pay from "../assets/pay.svg"
import QuickLoan from "../assets/quick-loan.svg"
import Calendar from "../assets/calendar.svg"
import Arrow from "../assets/arrow-down.svg"
import Search from "../assets/search.svg"
import Filter from "../assets/filter.svg"
import UserImg from "../assets/user-img.svg"
import Chart from "../components/Chart.vue"

export default {
  components: {
    Chart
  },
  data() {
    return {
      Eye: Eye,
      AddEmployee: AddEmployee,
      PaySalary: PaySalary,
      Pay: Pay,
      QuickLoan: QuickLoan,
      Calendar: Calendar,
      Arrow: Arrow,
      Search: Search,
      Filter: Filter,
      UserImg: UserImg,
      
      

    }
  }

}
</script>

<style scoped>.wave {
  background-image: url(../assets/waveee.svg);
  /* background-position-y: 10%; */
  background-size: cover;
  background-repeat: no-repeat;

}</style>