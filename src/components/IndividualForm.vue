<template>
  <section>
   
    <form action="" class="flex flex-col gap-[24px]">

   
  <div class='relative'>
    <input type="text" class="inputText font-aeonik" required/>
    <span class="floating-label  font-aeonik">First Name</span>
  </div>

  <div class='relative'>
    <input type="text" class="inputText font-aeonik" required/>
    <span class="floating-label  font-aeonik">Last Name</span>
  </div>

  <div class='relative'>
    <input type="email" class="inputText font-aeonik" required/>
    <span class="floating-label  font-aeonik">Email</span>
  </div>

  <div>
        <button class="w-full font-aeonik text-[16px] leading-[24px] border border-primary bg-primary text-white rounded-[32px] px-[36px] py-[16px] drop-shadow-[0_8px_16px_rgba(17,69,59,0.20)]">
            Request Demo        </button>
    </div>
    
  
       
    </form>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>

.inputText {
  font-size: 14px;
width: 100%;
border: 1px solid #B5B6B5;
border-radius: 16px;
padding: 16px;


}
.inputText:focus{
    outline: 1px solid #11453B;
}

.floating-label {
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 15px;
  color:#8D8E8D;
  transition: 0.3s ease all;
}
input:focus ~ .floating-label,
input:not(:focus):valid ~ .floating-label {
  top: -13px;
  background-color: white;
  padding: 4px 6px;
  font-size: 14px;
  color: #8D8E8D

}


</style>