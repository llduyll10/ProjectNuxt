<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
import Vue from 'vue'
Vue.prototype.$checkDragDrop = (classSelector) => {
  let arrImg = Array.from(document.querySelectorAll(classSelector))
  arrImg.forEach(item => {
    let drag = false
    item.addEventListener('mousedown', () =>{
      drag = false
    })
    item.addEventListener('mousemove', () =>{
      drag = true
    })
    item.addEventListener('mouseup', () =>{
      console.log('drag', drag)
      return drag
    })
  })
}
export default {

}
</script>

