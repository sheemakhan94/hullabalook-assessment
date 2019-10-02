Vue.component('tile', {

  props: ['product'],
  template: `<div @click="clickHandler">
                <img :src="product.url">
                <span v-if="clicked">You clicked me</span>
              </div>`


})

var game = new Vue({
  el: '#game',
  data: {
    products: [
      { url: './assets/images/products/lipstick.jpg', brand: 'Huda Beauty' },
      { url: './assets/images/products/eyeshadow.jpg', brand: 'Urban Decay' },
      { url: './assets/images/products/highlighter.jpg', brand: 'Laura Mercier' },
      { url: './assets/images/products/contour.jpg', brand: 'KKW Beauty' }
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
