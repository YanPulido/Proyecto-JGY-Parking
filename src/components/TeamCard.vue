<template>
        
        <div class="card" style="width: 20rem;">
            <div class="d-flex justify-content-center">
                <img :src="miembro.imagen" alt="Fotografía del equipo" >
            </div>
            <div class="card-body">
                <h3 class="card-title">{{ miembro.nombre }}</h3>
                <p class="card-text">{{ miembro.descripcion }}</p>
                <p class="card-text"><span>Tarifa: </span> {{ miembro.rol }}</p>
                <p class="card-text"><span>Código de Servicio: </span> {{ miembro.codigo}}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Oferta valida unicamente por el mes de Octubre</small>
            </div>
            <pre>
            </pre>
        </div>
    
</template>

<script>
// Estamos recibiendo el objeto miembro por props correctamente pero las pruebas nos siguen saliendo mal
// Al parecer nos estamos olvidando de algo
    export default {
        name: "TeamCard",
        props: ['miembro']
    }
</script>

<style scoped>

</style>
