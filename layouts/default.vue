<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
import Vue from 'vue'
import mixins from '../mixins';
import VueCurrencyInput from 'vue-currency-input'
  // import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import Treeselect from '@riophae/vue-treeselect'
Vue.mixin(mixins);
Vue.component('treeselect',Treeselect)

const pluginOptions = {
  globalOptions: { currency: {},precision:0}
}
Vue.use(VueCurrencyInput, pluginOptions)
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
      // console.log('drag', drag)
      return drag
    })
  })
}
export default {
  async asyncData(context) {
    const data = await context.get('search?q=apollo 11&page=1',{abc:'haha'});
    const companies = data.data;

    console.log('companies',companies);

  },
  mounted(){
        var textAreas = document.getElementsByTagName('textarea');
        Array.prototype.forEach.call(textAreas, function(elem) {
            elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
        });
    },
}
</script>

