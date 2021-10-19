<template>
  <div class="container mt-5 pb-5">
    <div class="bg-light rounded-3 pt-5 px-4 px-md-5 mb-5">
      <div class="row gx-5 justify-content-center">
        <div class="col-lg-8 col-xl-6">
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <!-- Name input-->
            <div class="form-floating mb-3">
              <input class="form-control" id="name" type="text" placeholder="Zona de búsqueda" data-sb-validations="required" />
              <label for="name">Zona de búsqueda</label>
              <div class="invalid-feedback" data-sb-feedback="name:required">La zona de búsqueda es requerida.</div>
            </div>
            <div class="form-floating mb-3">
              <input class="form-control" id="fecha" type="date" placeholder="dd/mm/aaaa" data-sb-validations="required" />
              <label for="fecha">Fecha de reserva</label>
              <div class="invalid-feedback" data-sb-feedback="fecha:required">La fecha de la reserva es requerida.</div>
            </div>
            <div class="d-none" id="submitSuccessMessage">
              <div class="text-center mb-3">
                <div class="fw-bolder">Form submission successful!</div>
                To activate this form, sign up at
                <br />
                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
              </div>
            </div>

            <div class="d-none" id="submitErrorMessage">
              <div class="text-center text-danger mb-3">Error sending message!</div>
            </div>
            <!-- Submit Button-->
            <div class="d-grid">
              <button class="btn btn-usala btn-lg" id="submitButton" type="submit">Buscar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="card bg-dark my-3 text-white">
        <img src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg" class="card-img" alt="Musica electrónica">
        <div class="card-img-overlay">
          <h5 class="card-title">Encuentra tu sala cerca</h5>
          <p class="card-text">Las mejores salas de tu ciudad</p>
        </div>
    </div>
    <div class="card-columns">
      <div class="card mt-3">
        <img class="card-img-top" src="https://miguiaargentina.com.ar/Imagenes/b/783566081-2-sala-de-ensayo-la-zotea.jpeg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title that wraps to a new line</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
      <div class="card mt-3">
        <img class="card-img-top" src="https://miguiaargentina.com.ar/Imagenes/b/783566081-2-sala-de-ensayo-la-zotea.jpeg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title that wraps to a new line</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
      <div class="card mt-3">
        <img class="card-img-top" src="https://miguiaargentina.com.ar/Imagenes/b/783566081-2-sala-de-ensayo-la-zotea.jpeg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title that wraps to a new line</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
      <div class="card mt-3">
        <img class="card-img-top" src="https://miguiaargentina.com.ar/Imagenes/b/783566081-2-sala-de-ensayo-la-zotea.jpeg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title that wraps to a new line</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
      <div class="card mt-3">
        <img class="card-img-top" src="https://miguiaargentina.com.ar/Imagenes/b/783566081-2-sala-de-ensayo-la-zotea.jpeg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title that wraps to a new line</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
      <div class="card mt-3">
        <img class="card-img-top" src="https://miguiaargentina.com.ar/Imagenes/b/783566081-2-sala-de-ensayo-la-zotea.jpeg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title that wraps to a new line</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
      <div class="py-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
  props: {
    msg: String
  }
}
</script>