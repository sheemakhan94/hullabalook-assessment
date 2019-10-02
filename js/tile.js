Vue.component('tile', {

  props: ['image'],
  template: `<div @click="clickHandler">
                <img src="{{ image.url }}">
                <span v-if="clicked">You clicked me</span>
              </div>`


})

var game = new Vue({
  el: '#game',
  data: {
    images: [
      { url: '../assets/images/adidas.jpg' },
      { url: 'https://www.reebok.co.uk/dis/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-reebok-products/default/dw58e1097b/zoom/CN6033_01_standard.jpg?sh=840&strip=false&sw=840' },
      { url: 'https://i1.adis.ws/i/jpl/jd_214003_a?qlt=80&w=600&h=425&v=1&fmt=webp' },
      { url: 'https://nb.scene7.com/is/image/NB/mcruznn2_nb_02_i?$pdpPictLG2x$&fmt=webp' }
    ]
    //
    // return {
    //   clicked: false
    // }
  },

  methods: {
    clickHandler() {
      this.clicked = true
      this.$emit('tile-clicked', this.name)
    }
  }

})
