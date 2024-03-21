export const App = () => {
    let divRoot = document.querySelector("#root");
    divRoot.innerHTML = "<h1> Nuestra primera web SPA </h1>";

    document.getElementById("root").innerHTML = `
            <nav class="navbar navbar-expand-lg bg-success">
             <div class="container-fluid">
                <img src="./assets/epm.png" alt="epm">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">ENERGIA</a></li>
                                <li><a class="dropdown-item" href="#">Acueducto</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Otros productos</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Contactanos</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
        <div class="container text-center">
            <div class="row align-items-start">
                <div class="col">
                    <img src="./assets/torre1.jpg" alt="Imagen de la torre">
                </div>
                <div class="col">
                <h1> Producto </h1>
                <p> Torre de Energia</p>
                <p> Altura 30 Metros </p>
                <p> Estructura Metalica </p>
                <p> Con lineas de vida </p>
                </div>
            </div>
        </div>

        <div class="card">
        <h5 class="card-header">EPM</h5>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>

        



    `;
}
