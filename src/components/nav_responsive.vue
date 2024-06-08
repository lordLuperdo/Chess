<script setup>
import { useGeneralStore } from '@/stores/General';

const GeneralStore = useGeneralStore()
console.log(GeneralStore.i.logo)
</script>

<template>
    <nav class="bg-black">
        <RouterLink to="/about" class="link_logo">
          <img :src="GeneralStore.i.logo" class="logo" alt="">
        </RouterLink>
    </nav>
    <div class="w-full relative">
      <div class=" h-10 w-7 absolute z-50 trapecio2 top-0"></div>
    </div>

</template>

<style>


nav{
  display: flex;
  justify-content:space-around;
  align-items: center;
 
  min-height: 7vh;
 }
 
 .logo{
  min-width: 100%;
}
.link_logo{
  transition: all 0.3s ease 0s;
  max-width: 50%;
}

.links_nav{
  display: flex;
  box-sizing: content-box;
  position:relative;
  align-items: center;
}


.fotos_lista,.nosotros_lista{
  display: none;
  position: absolute;
  min-height: 10vh;
 
  background-color:rgb(195, 191, 169)
  
}

.routerfotos ,.routernosotros{
  color: white;
  padding:2rem;
  font: size 18px;;
  transition: all 0.3s ease 0s;
 
}


/*funcionalidad del nav*/

.link_fotos, .link_nosotros, .link_comprar{
  color: white;
  padding:2rem;
  font: size 18px;;
  transition: all 0.3s ease 0s;
 
}


</style>