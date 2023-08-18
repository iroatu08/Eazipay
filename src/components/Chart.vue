<template>
  <Line :data="data" :options="options" />
  </template>
  
  <script>
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    components: {Line},
    data() {
      return {
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
          datasets: [
    {
      label: 'Data Inflow',
      borderColor: '#f87979',
      data: [40, 39, 10, 40, 39, 80, 40]
    }
  ]
        },
        options: {
          responsive: true, 
        
        }
      }
    }
  }
  </script> 