<template>
 
  <section class="flex w-full">
    
    <dashboard-sidebar/>

    <div class="flex-1 h-screen overflow-y-auto">
    <dashboard-header />
    <dashboard-main/>
    <dashboard-footer />
    </div>

  </section>
    
 


</template>

<script>
import DashboardHeader from "../../components/DashboardHeader.vue";
import DashboardFooter from "../../components/DashboardFooter.vue";
import DashboardSidebar from "../../components/DashboardSidebar.vue";
import DashboardMain from "../../components/DashboardMain.vue";

export default {
  components: {
    DashboardHeader,
    DashboardFooter,
    DashboardSidebar,
    DashboardMain
  }

}
</script>

<style>

</style>