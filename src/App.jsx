
import './App.css';

function App() {
  return (
<div className='container'>
  <div className='row'></div>
  <div className="col-md-12"></div>
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="https://img.freepik.com/iconos-gratis/mcdonalds_318-566082.jpg?auto=format&h=200" alt="Big Mac" width={80} /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">locales</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">en familia</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href='#'>nosotros</a>
              </li>
            </ul>
          </div>
          </div>
        </nav>
      </div>
  );
}


export default App;
