<script setup>

import navegation from '../components/nav_responsive.vue'
import foot from '@/components/l_footer.vue'

import { RouterLink } from 'vue-router';
import { useGeneralStore } from '../stores/General';

const GeneralStore = useGeneralStore()


</script>

<template>

<navegation></navegation>

<main class="bg-[url('../assets/img/fondo_web.webp')] bg-cover bg-bottom mb-10">
  <div class="backdrop-brightness-[0.3] pr-6 pt-10 pl-6 pb-6  relative ">
 
  <img :src="GeneralStore.i.cuerda" class="absolute right-0 bottom-[-3%]  z-40" alt="">
  <div class="inner-shadow absolute w-full h-full  z-40 top-0 right-0 rotate-180"></div>
      <!--texto main-->
  <div class="gap-5 flex flex-col">
  
    <h1 class="text-center text-5xl text-white mb-4">Nuevo Johnnie Walker</h1>
   
    <div class="flex justify-center overflow-hidden max-h-[50vh] relative ">
      <img :src="GeneralStore.i.botella" alt="" class="object-top object-cover w-[10rem] shadow-2xl">
      
    </div>
   
    <p class="text-white text-center z-50 ">Emocionante llegada de la última edición de Johnnie Walker con Chessmen.</p>
    <RouterLink class=" font_chess h-[3.9rem] w-4/4 text-white z-50 bg-amber-400 text-4xl text-center flex items-center justify-center" to="/about">comprar</RouterLink>
  </div>


  
  </div>

  
</main>
<!--------------------------------------------------  fin del main -------------------------------------------->



<!--------------------------------------------------  fin del main -------------------------------------------->
<article class="flex flex-col gap-20 pt-10 relative">
  
   <!-----------------------------------------seccion botella--------------------------------------->
    <div class="sticky top-10 z-10 ">
      <div class="relative w-full flex justify-center">
      
      <!--label-->
      <div class="
    bg-black h-12 top-10 left-5 flex items-center 
      px-3 absolute gap-3 rounded-full z-40">
        
      <div class="h-9 overflow-hidden rounded-full">
          <img :src="GeneralStore.i.colombia" alt="colombia" class="
          max-h-full">
        </div>

        <p class="text-white">Colombiano</p>
      
      </div>
      <!--label-->

      <div class="bg-[url('../assets/img/fondo_web.webp')] bg-cover brightness-50  h-56 w-56 absolute z-10 rounded-full top-40 inner-shadow2"></div>
     
      <div class="z-30">
        <img :src="GeneralStore.i.botella" alt="" class="w-[7rem]">
      </div>

       <!--labels-->
       <div class="
       z-40 absolute bottom-[-3rem] right-5 flex flex-col gap-3
       ">
       <div class="
    bg-black h-12 b-10 left-5 flex items-center 
      px-3 gap-3 rounded-full ">
        
      <div class="h-9 overflow-hidden rounded-full">
          <img :src="GeneralStore.i.colombia" alt="colombia" class="
          max-h-full">
        </div>

        <p class="text-white">Colombiano</p>
      
      </div>
      <div class="
    bg-black h-12 b-10 left-5 flex items-center 
      px-3 gap-3 rounded-full ">
        
      <div class="h-9 overflow-hidden rounded-full">
          <img :src="GeneralStore.i.colombia" alt="colombia" class="
          max-h-full">
        </div>

        <p class="text-white">Colombiano</p>
      
      </div>
      </div>
       <!--labels-->

     </div>
    </div>
   
<!-----------------------------------------seccion botella--------------------------------------->
<div class=" bg-black z-20 text-white p-8 text-balance text-center">
    <h2 class="descripcion_title text-4xl mb-10">
          ¿Por qué <span>Johnnie</span> y <span>ChessMen</span> están juntos?
    </h2>
    
    <p>
      Para una colaboración con la serie 'Chessmen' de Erwin Olaf, la marca de licor Johnnie Walker se destacaría como la elección más adecuada. <br><br><br> Su rica herencia y tradición, que se remontan a más de un siglo, encajarían perfectamente con el concepto de la serie, que a menudo explora la belleza atemporal y la profundidad de la historia. <br><br><br> 
    </p>

 </div>


</article>

 <!--hablador comprar-->

 <article 
 class="flex flex-col justify-center items-center
   mt-10 mb-20">

<div class="rounded-full h-20 
w-[90%] bg-[url('../assets/img/fondo_web.webp')] bg-cover backdrop-brightness-0
 mt-10">
<div class="backdrop-brightness-50 
flex items-center justify-between h-full
p-2 gap-4">
<div class="">
    <img 
    src="https://firebasestorage.googleapis.com/v0/b/proyecto-olaf.appspot.com/o/chesslabelmitad.png?alt=media&token=585f483e-095e-4969-81c0-fa30ceb9a384&_gl=1*oqg8ep*_ga*NjU1MzIwMjcuMTY4OTk5NTQzNA..*_ga_CW55HF8NVT*MTY5ODQ1ODgxMy4zMS4xLjE2OTg0NTkyNDMuNTcuMC4w" 
    alt=""
    class="hidden absolute sm:inline">
  </div>
  <p class="text-white">Compra tu Chess Label</p>
<div class="">
  <RouterLink class="">
    <div class="h-16 w-16 bg-amber-300 rounded-full flex justify-center items-center">
      <i class="fa-solid fa-cart-shopping text-3xl flex  "></i>
    </div>
  </RouterLink>
</div>
</div>
  

</div>

</article>

<!--hablador comprar-->

<!--chessmen-->

<div class="">
  <div class="text-center flex flex-col justify-center px-8">
    <h2 class="text-4xl mb-6">¿Qué es Chessmen?</h2>
    <p class="">
      Erwin Olaf presentó su serie "Chessmen" en 2002. Esta serie de fotografías tiene un enfoque en el juego de ajedrez y presenta retratos de personas en situaciones que sugieren un juego de ajedrez. La serie "Chessmen" se caracteriza por su estilo teatral y altamente estilizado. <br><br>
      Como en muchas de sus obras, Erwin Olaf tiende a desafiar las normas sociales y de género, y a explorar la psicología y la dinámica de las relaciones humanas a través de la imagen. Su trabajo a menudo invita a la reflexión y a la interpretación individual, y es una expresión de su estilo artístico distintivo y su enfoque provocativo 
    </p>
  </div>
 
 
  <!--imagenes chess-->
  <div class=""></div>


</div>


<footer class="mt-10 pt-10">
  <div class="px-9 ">
      <h2 class="text-5xl text-balance text-center opacity-60">
        "Creo que una buena imagen es aquella que <br><br> te hace sentir incómodo,<br> <br> que te hace pensar, <br><br> que te hace cuestionar lo que ves."
      </h2>
      <div class="">
          <p class="text-center mt-7"><i class="text-3xl">"Erwin Olaf"</i></p>
      </div>
  </div>

  
</footer>
<foot></foot>
</template>










<style>
.inner-shadow {
  
  box-shadow: inset 0px 40vh 100px 10px rgba(0, 0, 0, 1);
}
.inner-shadow2 {
  
  box-shadow: inset 10px 7vh 30px 10px rgba(0, 0, 0, 1);
}
</style>