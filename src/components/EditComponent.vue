<template>
  <div>
    <h1>Ingresar a plataforma</h1>






    <form @submit.prevent="updatePost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Tipo de Vehiculo: </label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Caracteristicas: </label>
              <textarea class="form-control" v-model="post.body" rows="5"></textarea>
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Ingresar</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {

      data() {
        return {
          post: {}
        }
      },
      created() {
        let uri = `http://localhost:4000/ingresar/edit/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.post = response.data;
        });
      },
      methods: {
        updatePost() {
          let uri = `http://localhost:4000/ingresar/update/${this.$route.params.id}`;
          this.axios.post(uri, this.post).then(() => {
            this.$router.push({name: 'posts'});
          });
        }
      }
    }
</script>