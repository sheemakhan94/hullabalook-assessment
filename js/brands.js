Vue.component('brand-tile', {
  props: ['brand'],
  template: '<li>{{ brand.name }}</li>'
})

var brandTiles = new Vue({
  el: '#brand-tiles',
  data: {
    brands: [
      {id: 0, name: 'Huda Beauty'},
      {id: 1, name: 'Urban Decay'},
      {id: 2, name: 'Laura Mercier'},
      {id: 3, name: 'KKW Beauty'}
    ]
  }
})
