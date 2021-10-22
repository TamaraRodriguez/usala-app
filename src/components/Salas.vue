<template>
    <div class="container mt-2 py-5">
        <nav class="navbar navbar-expand navbar-light mb-0 border-top">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/"><i class="bi bi-arrow-down-up"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/favoritos "><i class="bi bi-funnel"></i></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/registro"><i class="bi bi-map"></i></router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="mb-3 mt-3">
            <div class="row g-0 card mt-3 list-group-horizontal">
                <router-link class="text-decoration-none text-black" to="/login">
                    <div class="col-md-4">
                        <img src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg" class="img-fluid rounded-start" alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body text-start">
                            <div class="card-title row">
                                <h5 class="col-10 h3 my-auto">Domus Artis</h5>
                                <a href="#" class="col-2 text-end"><i class="bi bi-heart fs-3 black"></i></a>
                            </div>
                            <div class="row card-text">
                                <i class="bi bi-geo-alt fs-5 col-1"></i>
                                <p class="col-10 my-auto">Villa Ortuzar</p>
                            </div>
                            <p class="card-text">Esto es una pequeña descripción de la sala para enganchar al posible cliente.</p>
                            <div class="row">
                                <p class="col-2 puntuacion text-center">8,6</p>
                                <p class="col-5"><small class="text-muted">Muy bien - 6 comentarios</small></p>
                                <p class="col-5 card-text h2 bold text-end">$ 1.500</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="row g-0 card mt-3 list-group-horizontal">
                <router-link class="text-decoration-none text-black" to="/login">
                    <div class="col-md-4">
                        <img src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg" class="img-fluid rounded-start" alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body text-start">
                            <div class="card-title row">
                                <h5 class="col-10 h3 my-auto">Domus Artis</h5>
                                <a href="#" class="col-2 text-end"><i class="bi bi-heart fs-3 black"></i></a>
                            </div>
                            <div class="row card-text">
                                <i class="bi bi-geo-alt fs-5 col-1"></i>
                                <p class="col-10 my-auto">Villa Ortuzar</p>
                            </div>
                            <p class="card-text">Esto es una pequeña descripción de la sala para enganchar al posible cliente.</p>
                            <div class="row">
                                <p class="col-2 puntuacion text-center">8,6</p>
                                <p class="col-5"><small class="text-muted">Muy bien - 6 comentarios</small></p>
                                <p class="col-5 card-text h2 bold text-end">$ 1.500</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="row g-0 card mt-3 list-group-horizontal">
                <router-link class="text-decoration-none text-black" to="/login">
                    <div class="col-md-4">
                        <img src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg" class="img-fluid rounded-start" alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body text-start">
                            <div class="card-title row">
                                <h5 class="col-10 h3 my-auto">Domus Artis</h5>
                                <a href="#" class="col-2 text-end"><i class="bi bi-heart fs-3 black"></i></a>
                            </div>
                            <div class="row card-text">
                                <i class="bi bi-geo-alt fs-5 col-1"></i>
                                <p class="col-10 my-auto">Villa Ortuzar</p>
                            </div>
                            <p class="card-text">Esto es una pequeña descripción de la sala para enganchar al posible cliente.</p>
                            <div class="row">
                                <p class="col-2 puntuacion text-center">8,6</p>
                                <p class="col-5"><small class="text-muted">Muy bien - 6 comentarios</small></p>
                                <p class="col-5 card-text h2 bold text-end">$ 1.500</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Listado',
  props: {
    msg: String
  }
}
</script>