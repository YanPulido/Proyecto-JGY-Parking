<template>
  <div>
      <h1>Ingresar a Plataforma</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <ul>
  
          </ul>
          <ul>
  
          </ul>

<h3>- Ingrese su Usuario -</h3>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                 <input type="text" size="35" maxlength="50"  name="nombre de usuario">
                </div>
              </div>
              </div>
<ul>

</ul>
              <h3>- Ingrese su Contraseña -</h3>  
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                 <input type="password" size="35" maxlength="50"  name="nombre de usuario">
                </div>
              </div>
              </div>
          
<ul>
  
</ul>

          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Entrar</router-link>
          </div>
        </div><br />



<ul>
  
</ul>
<ul>
  
</ul>


       <!--<table class="table table-hover">
            <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post._id">
                  <td>{{ post.title }}</td>
                  <td>{{ post.body }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: post._id }}" class="btn btn-primary">Editar / Salida</router-link></td>
                  <td><button class="btn btn-danger" @click.prevent="deletePost(post._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>-->
  </div>
</template>

<script>
  export default {
      data() {
        return {
          posts: []
        }
      },
      created() {
      let uri = 'http://localhost:4000/ingresar';
      this.axios.get(uri).then(response => {
        this.posts = response.data;
      });
    },
    methods: {
      deletePost(id)
      {
        let uri = `http://localhost:4000/ingresar/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.posts = response.posts;
          //this.posts.splice(this.posts.indexOf(id), 1);
        });
      }
    }
  }
</script>