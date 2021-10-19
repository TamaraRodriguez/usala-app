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
                <div class="col-md-4">
                    <img src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg" class="img-fluid rounded-start" alt="">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Domus Artis</h5>
                        <p class="card-text">Sala ubicada en el barrio de Villa Ortuzar. De las más completas de Argentina.</p>
                        <p class="card-text"><small class="text-muted">$ 1.500</small></p>
                    </div>
                </div>
            </div>
            <div class="row g-0 card mt-3 list-group-horizontal">
                <div class="col-md-4">
                    <img src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg" class="img-fluid rounded-start" alt="">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Domus Artis</h5>
                        <p class="card-text">Sala ubicada en el barrio de Villa Ortuzar. De las más completas de Argentina.</p>
                        <p class="card-text"><small class="text-muted">$ 1.500</small></p>
                    </div>
                </div>
            </div>
            <div class="row g-0 card mt-3 list-group-horizontal">
                <div class="col-md-4">
                    <img src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg" class="img-fluid rounded-start" alt="">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Domus Artis</h5>
                        <p class="card-text">Sala ubicada en el barrio de Villa Ortuzar. De las más completas de Argentina.</p>
                        <p class="card-text"><small class="text-muted">$ 1.500</small></p>
                    </div>
                </div>
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