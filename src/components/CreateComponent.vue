<template>
  <div>
    <h1>Registrar servicio</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Tipo de Vehiculo:</label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
        </div>
        </div>
        <div class="row">


<h3>- Caracteristicas  -</h3>
        <h5>Placa</h5>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                 <input type="text" size="35" maxlength="50"  name="nombre de usuario">
                </div>
              </div>
              </div>
              <h5>Celular Contacto:</h5>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                 <input type="text" size="35" maxlength="50"  name="nombre de usuario">
                </div>
              </div>
              </div>
              <h5>Tipo de servicio</h5>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                 <input type="text" size="35" maxlength="50"  name="nombre de usuario">
                </div>
              </div>
              </div>



          <!--<div class="col-md-6">
            <div class="form-group">
              <label>Caracteristicas:</label>
              <textarea class="form-control" v-model="post.body" rows="5"></textarea>
            </div>
          </div>-->


        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Registrar</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          post:{}
        }
    },
    methods: {
      addPost(){
        let uri = 'http://localhost:4000/contactos/add';
        this.axios.post(uri, this.post).then(() => {
          this.$router.push({name: 'posts'});
        });
      }
    }
  }
</script>