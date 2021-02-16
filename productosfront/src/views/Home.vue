<template>
  <div>
    <h1>Ingrese Producto</h1>
    <form class="row g-3" id="myForm" v-on:submit.prevent="onSubmit">
      <div class="col-md-12">
        <label for="inputEmail4" class="form-label">Acción</label>
        <!-- <input type="text" class="form-control" placeholder="Calculadora" name="title"> -->
        <select name="metodo" class="form-control" id="select">
          <option value="post">Crear</option>
          <option value="put">Actualizar</option>
          <option value="delete">Eliminar</option>
        </select>
      </div>
      <div class="col-md-12">
        <label for="inputId" class="form-label">ID</label>
        <input id="inputId" class="form-control none" type="number" placeholder="0" name="id"  >
      </div>
      <div class="col-md-12">
        <label for="title" class="form-label">Nombre</label>
        <input type="text" class="form-control" placeholder="Calculadora" id="title" name="title">
      </div>
      <div class="col-md-12">
        <label for="price" class="form-label">Precio</label>
        <input type="number" class="form-control" placeholder="132456" id="price" name="price">
      </div>
      <div class="col-md-12">
        <label for="tumbnails" class="form-label">Foto URL</label>
        <input type="text" class="form-control" placeholder="https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-512.png" id="tumbnails" name="tumbnails">
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Enviar</button>
      </div>
    </form>
    <br>
    <br>
    <div class="row">
      <button class="btn btn-warning" @click="ver">
        Ver Productos
      </button>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  },
  data(){
    return {
      myForm :  null,
      inputs : null,
      select : null,
    }
  },
  methods:{
    ver : function(){
      this.$router.push({path:'/productos/vista'})
    },
    onSubmit:function(){
      
    }
  },
  async mounted(){
    let dom = await import('../utils/dom.js')
    this.myForm = dom.myForm
    this.inputs = dom.inputs
    this.select = dom.select
  }
};
</script>

<style scoped>
  h1{
  color:blue
  }
  .base-form{
      display: grid;
  }

  form>input{
      margin: 5px;
  }
  form>button{
      margin: 4px;
  }
  
</style>
