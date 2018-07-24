<template>
<div class="bejelentkezes">
<div class="container">

    <div class="row my-auto">
      <div class="col-12 col-lg-6 mx-auto">
        <div class="card login-card mb-3">
          <div class="card-header login-card-header text-uppercase">Bejelentkezés</div>
          <div class="card-body">
            <form @submit.prevent="login()">
              <div class="form-group">
                <label for="exampleInputEmail1">Add meg az email címed</label>
                <input type="email" class="form-control" 
                    id="exampleInputEmail1" 
                    placeholder="valami@email.com"
                    v-model="email"
                >
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Add meg a jelszavad</label>
                <input type="password" class="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Jelszó"
                    v-model="password"
                >
                <small class="form-text"><a href="#">Elfelejtetted a jelszavad?</a></small>
                <!-- <div class="form-check mt-3">
                  <input class="form-check-input" type="checkbox" id="autoSizingCheck2">
                  <label class="form-check-label" for="autoSizingCheck2">Bejelentkezve maradok</label>
                </div> -->
                <!-- <div class="my-3 text-center">
                  <button type="submit" class="btn loginBtn loginBtn--facebook py-2 my-2"><img src="img/facebook.svg" height="20" alt="" class="mr-2 mb-1">Facebook bejelentkezés</button>
                  <button type="submit" class="btn loginBtn loginBtn--google py-2 my-2"><img src="img/google.svg" height="25" alt="" class="mr-2">Google bejelentkezés</button>
                </div> -->
                <div class="card-footer"></div>
                <button class="btn btn-login btn-lg btn-block text-uppercase"
                    type="submit">
                    Bejelentkezés
                </button>
                <p class="pt-3 small"><a href="regisztracio.html">Még nem regisztáltál?</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>  
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("signInAction", {
          email: this.email,
          password: this.password
        })
        .then(r => {
          this.$router.push({ name: "profil" });
        });
    }
  }
};
</script>

