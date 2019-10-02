Vue.component('brand-tile', {
  props: ['brand'],
  template: '<li>{{ brand.name }}</li>'
})

var brandTiles = new Vue({
  el: '#brand-tiles',
  data: {
    brands: [
      {id: 0, name: 'adidas'},
      {id: 1, name: 'reebok'},
      {id: 2, name: 'nike'},
      {id: 3, name: 'new balance'}
    ]
  }
})
