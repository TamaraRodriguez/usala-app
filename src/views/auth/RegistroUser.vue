<template>
    <div class="container mt-4 py-5">
        <div class="row">
            <h2 class="col-12 mb-5">Registrar mi sala</h2>

                <form action="#" method="POST" enctype="multipart/form-data" class="mx-auto">
                    <div class="row mb-3">
                        <div class="col-md-6 text-start mb-3">
                            <label for="name" class="form-label">Nombre</label>
                            <input type="text" id="name" name="name" class="form-control" v-model="name">
                        </div>
                        <div class="mb-3 col-md-6 text-start">
                            <label for="lastname" class="form-label">Apellido</label>
                            <input type="text" id="lastname" name="lastname" class="form-control" v-model="lastname">
                        </div>

                        <div class="mb-3 col-md-6 text-start">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" id="email" name="email" class="form-control" v-model="email">
                        </div>

                        <div class=" text-start">
                            <label for="pass" class="form-label">Password</label>
                            <input type="password" id="pass" name="pass" class="form-control" v-model="pass">
                        </div>
                    
                        <div class="mb-3 col-md-6 text-start">
                            <label for="age" class="form-label">Edad</label>
                            <input type="text" id="age" name="age" class="form-control" v-model="age">
                        </div>

                        <div class="text-start">
                            <label for="img" class="form-label">Foto</label>
                            <input type="file" id="img" name="img" class="form-control" multiple>
                        </div>
                        
                    </div>
                        <div class="row">
                            <div class="col-md-9 mb-3 text-start">
                                <label for="address" class="form-label">Dirección</label>
                                <input name="address" id="address" class="form-control" v-model="address">
                            </div>
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
            address: '',
            email: '',
            pass: '',
            alquilerinstrumentos: ''
        }
    },
    name: 'Registro'    
    
}
</script>