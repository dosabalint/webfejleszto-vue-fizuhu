<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0 sticky-top">
    <a class="navbar-brand fizu" href="index.html">fizu.hu</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active px-3">
          <a class="nav-link" href="index.html">Főoldal
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="kedvenc-stat.html">Kedvenc statisztikáink</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="kerdoivek.html">Kérdőívek</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="rolunk.html">Rólunk</a>
        </li>
        <li class="nav-item dropdown mr-5 ml-3">
          <a class="nav-link dropdown-toggle btn-group mr-5" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">Profil</a>
          <div class="dropdown-menu  text-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="profilom.html">Profilom</a>
            <a class="dropdown-item" href="terkep.html">Fizu-térkép</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Kijelentkezés</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
