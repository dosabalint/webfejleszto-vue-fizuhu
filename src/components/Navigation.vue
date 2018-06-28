<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0 sticky-top">
    <router-link to="/" class="navbar-brand fizu">fizu.hu</router-link>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        
        <li class="nav-item px-3" v-for="item in itemCollection" :key="item.id">
          <router-link 
            :to="item.path" 
            class="nav-link"> 

            {{ item.name }}
          </router-link>
        </li>

        <!-- <li class="nav-item px-3">
          <a class="nav-link" href="kedvenc-stat.html">
            Kedvenc statisztikáink
          </a>
        </li> -->
        
        <!-- <li class="nav-item px-3">
          <a class="nav-link" href="kerdoivek.html">
            Kérdőívek
            </a>
        </li>
        
        <li class="nav-item px-3">
          <a class="nav-link" href="rolunk.html">
            Rólunk
          </a>
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
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
import navItems from '../navItems';

export default {
    data() {
        return {
            itemCollection: navItems
        };
    }
};
</script>
