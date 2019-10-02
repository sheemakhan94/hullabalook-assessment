Vue.component('tile', {

  props: ['image'],
  template: `<div @click="clickHandler">
                <img :src="image.url">
                <span v-if="clicked">You clicked me</span>
              </div>`


})

var game = new Vue({
  el: '#game',
  data: {
    images: [
      { url: './assets/images/products/lipstick.jpg' },
      { url: './assets/images/products/eyeshadow.jpg' },
      { url: './assets/images/products/highlighter.jpg' },
      { url: './assets/images/products/contour.jpg' }
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
