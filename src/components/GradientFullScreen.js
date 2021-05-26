const GradientFullScreen = () => {
return (
  <div class="App min-vh-100 d-flex flex-column">
    <div class="flex-fill d-flex" style="background-image: linear-gradient(to right, rgb(168, 192, 255), rgb(63, 43, 150));">
      <nav class="fixed-top nav">
        <li class="nav-item">
          <a class="btn btn-dark text-white nav-link me-2" href="/">Tous</a>
        </li><li class="nav-item">
          <a class="btn btn-dark text-white nav-link me-2" href="/gradient/3">Précédent</a>
        </li><li class="nav-item">
          <a class="btn btn-dark text-white nav-link" href="/gradient/5">Suivant</a>
        </li></nav> <div class="m-auto text-center">
        <h1 class="text-white display-1">Slight Ocean View</h1>
        <div class="bg-white shadow p-2 rounded">
          <code>background-image: linear-gradient(to right, rgb(168, 192, 255), rgb(63, 43, 150));</code>
        </div>
      </div>
    </div>
    <footer class="bg-dark text-white text-center p-3 mt-auto">Made with Love for Alyra</footer>
  </div>
  )
}
export default GradientFullScreen