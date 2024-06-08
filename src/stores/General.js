import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {imagenes} from './img'
 
export const useGeneralStore = defineStore('counter', () => {
  
  const i = imagenes
   
  return {i}
})
