<template>
    <div class="container mt-4 py-5">
        <div class="row justify-content-center">
            <h2>Iniciar Sesion</h2>
        <div class="col-lg-6">
            <div class="card-body">
                <form>
                    <div class="form-floating mb-3">
                        <input class="form-control" id="inputEmail" type="email" placeholder="ejemplo@gmail.com" />
                        <label for="inputEmail">Email</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input class="form-control" id="inputPassword" type="password" placeholder="Contraseña" />
                        <label for="inputPassword">Contraseña</label>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                        <a class="btn btn-usala w-100 btn-lg" href="index.html">Entrar</a>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div>
</template>

<script>

export default {
    
    name: 'Login'    
    
}
</script>
