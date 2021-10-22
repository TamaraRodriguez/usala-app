<template>
    <div class="sb-nav-fixed fixed-top pt-5">
        <nav class="sb-topnav navbar navbar-expand navbg">
            <!-- Navbar Brand-->
            <router-link class="me-auto navbar-brand text-white" to="/"><h1><img src="../../public/img/logo-usala.png" alt="Usala" class="logo mt-2"></h1></router-link>
            <!-- Sidebar Toggle-->
            <button class="btn ms-auto btn-xs order-1 order-lg-0 me-4 me-lg-0 text-white" id="sidebarToggle" href="#!"><i class="bi bi-list"></i></button>
            <!-- Navbar Search-->
            
            <!-- Navbar-->
            
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion navbg" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <ul class="nav">
                            <li class="nav-item">
                                <router-link class="nav-link menu-lat" to="/">Inicio</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link menu-lat" to="/listado">Salas</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link menu-lat" to="/login">Login</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link menu-lat" to="/registro">Registrar Sala</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link menu-lat" to="/registrouser">Registro User</router-link>
                            </li>                                 
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <nav class="navbar navbar-expand navbar-light fixed-bottom mb-0 border-top">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/"><i class="bi bi-house"></i></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/listado"><i class="bi bi-heart"></i></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/registro"><i class="bi bi-calendar4-week"></i></router-link>
                </li> <!--<i class="bi bi-search"></i>-->
                <li class="nav-item">
                    <router-link class="nav-link" to="/login"><i class="bi bi-person"></i></router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

