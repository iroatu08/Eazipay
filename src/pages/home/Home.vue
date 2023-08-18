<template>
  <Header/>
  <section>
    <Hero/>
    <Solutions/>
    <Steps/>
    <FreeForever/>
    <Demo/>
  </section>
  <Footer/>
</template>


<script>
import { Hero, Solutions,Steps, FreeForever, Demo } from '../../sections/Home';
import {Header, Footer} from "../../components"
export default {
components:{
  Header,
  Footer,
Hero,
Solutions,
Steps,
FreeForever,
Demo
}
}
</script>

