<template>
   <header class="content">

   </header>
   <main class="content">
     <router-view/>
   </main>
   <footer class="content">
     2021
   </footer>
  
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  mounted(){
  }
};
</script>

<style>
*{
  margin:0;
  outline: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*  */
}
body{
    display: grid;
    background-color: gray;
}
.content{
    margin: auto;
    width: 500px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.none{
      display: none;
  }
footer{
  text-align: center;
}

</style>
