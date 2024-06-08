<template>
    <nav class="bg-black">
        <RouterLink to="/about" class="link_logo">
          <img src="./assets/img/logojw.png" class="logo" alt="">
        </RouterLink>
        
        
        <ul class="links_nav">
         
          
          <li class="lista_fotos"><RouterLink to="/about" class="link_fotos">fotos</RouterLink>
              <ul class="fotos_lista">
                    <li><RouterLink to="/producto" class="routerfotos">Producto</RouterLink></li>
                    <li><RouterLink to="/cm" class="routerfotos">ChessMen</RouterLink></li>
              </ul>
          </li>
          
          
          <li class="lista_nosotros">
                <RouterLink to="/nosotros" class="link_nosotros">nosotros</RouterLink>
                <ul class="nosotros_lista">
                    <li><RouterLink to="/jw" class="routernosotros">Johnnie Walker</RouterLink></li>
                    <li><RouterLink to="/ErwinOlaf" class="routernosotros">Erwin Olaf</RouterLink></li>
              </ul>
          </li>


          <li><RouterLink to="/comprar" class="link_comprar">comprar</RouterLink></li>
        </ul>


      </nav>
</template>

<style>
.espacio{
  background-color: black;
  min-height: 10vh;
  position: fixed;
  min-width: 100%;
  z-index:1;
  }

nav{
  display: flex;
  justify-content:space-around;
  align-items: center;
 
  min-height: 10vh;
 }
 
 .logo{
  min-width: 100%;
}
.link_logo{
  transition: all 0.3s ease 0s;
  max-width: 25%;
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