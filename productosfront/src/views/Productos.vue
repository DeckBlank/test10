<template>
  <div class="">
    <h1>Vista de productos</h1>
    <table class="table table-dark table-striped" v-if="hayProductos">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Foto</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(producto,i) of productos">
          <th scope="row">{{i+1}}</th>
          <td>{{producto.title}}</td>
          <td>{{producto.price}}</td>
          <td>
            <img class="image" :src="producto.tumbnails" :alt="producto.title">
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="!hayProductos">
      <h1 class="error">
        {{error}}
      </h1>
    </div>
  </div>
  
</template>
<script>
import {query} from '../utils/query.js'
export default {
  name:'Producto',
  data(){
    return {
      productos:[],
      error:'',
      hayProductos:true,
    }
  },
  methods:{

  },
  async mounted(){
    let productos = await query('/api/productos','get',{})
    if(productos.error){
      this.hayProductos = false;
      this.error = productos.error
    }else{
      this.hayProductos = true;
      this.productos = productos
    } 

  }
}
</script>
<style scoped>
  .image{
    width:60px;
    height: 60px;
  }
  .error{
    color: var(--bs-warning)!important;
  }
</style>
