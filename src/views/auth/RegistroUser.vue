<template>
    <div class="container mt-4 py-5">
        <div class="row">
            <h2 class="col-12 mb-5">Registrar mi sala</h2>

                <form action="#" method="POST" enctype="multipart/form-data" class="mx-auto">
                    <div class="row mb-3">
                        <div class="col-md-6 text-start mb-3">
                            <label for="name" class="form-label">Nombre</label>
                            <select id="name" name="name" class="form-select"  v-model="name">
                                <option selected value="sala">Sala de ensayo</option>
                                <option value="estudio">Estudio de grabación</option>
                            </select>
                        </div>
                        <div class="mb-3 col-md-6 text-start">
                            <label for="lastname" class="form-label">Apellido</label>
                            <input type="text" id="lastname" name="lastname" class="form-control" v-model="lastname">
                        </div>
                    
                        <div class="mb-3 col-md-6 text-start">
                            <label for="age" class="form-label">Edad</label>
                            <input type="text" id="age" name="age" class="form-control" v-model="age">
                        </div>

                        <div class=" text-start">
                            <label for="img" class="form-label">Foto</label>
                            <input type="file" id="img" name="img" class="form-control" multiple>
                        </div>
                        
                    </div>
                        <div class="row">
                            <div class="col-md-9 mb-3 text-start">
                                <label for="direccion" class="form-label">Dirección</label>
                                <input name="direccion" id="direccion" class="form-control" v-model="direccion">
                            </div>
                            <div class="col-md-3 text-start">
                                <label for="precio" class="form-label">Precio por hora</label>
                                <input type="precio" class="form-control" id="precio"  v-model="precio">
                            </div>
                        </div>
                    <div class="row">
                        <div class="my-3 text-start">
                        <label for="" class="mb-1">Otros datos</label><br>
                        <label>
                            <input type="checkbox" id="wifi" value="wifi"  v-model="wifi"> Wifi
                        </label><br>
                        <label>
                            <input type="checkbox" id="alquilerinstrumentos" value="alquilerinstrumentos"  v-model="alquilerinstrumentos"> Alquiler de instrumentos
                        </label>
                    </div>
                    <button class="btn btn-usala btn-lg mt-3" type="submit">Registrar Sala</button>
                    </div>
                    
                </form>
                <div class="py-3"></div>
        </div>
    </div>
    
</template>

<script>
//import { defineComponent } from '@vue/composition-api'

export default {
    data () {
        return {
            name: '',
            lastname: '',
            age: '',
            img: '',
            direccion: '',
            precio: '',
            wifi: '',
            alquilerinstrumentos: ''
        }
    },
    name: 'Registro'    
    
}
</script>