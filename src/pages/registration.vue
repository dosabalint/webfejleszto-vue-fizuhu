<template>
<div class="regisztracio">
    <div class="container">

      <div class="row margin">
      <div class="col-6 mx-auto">

        <div class="card login-card mb-3">
          <div class="card-header h3">Regisztrácó</div>
          <div class="card-body">

            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Felhasználónév</label>
                <input type="text" class="form-control" placeholder="Felhasználónév">
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Jelszó</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Jelszó még egyszer</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>



              <div class="my-3 text-center">
                <button type="submit" class="btn loginBtn loginBtn--facebook py-2"><i class="fa fa-facebook pr-2"></i>Facebook bejelentkezés</button>
                <button type="submit" class="btn loginBtn loginBtn--google py-2"><i class="fa fa-google pr-2"></i>Google bejelentkezés</button>
              </div>
              <div class="card-footer bg-transparent"></div>
              <a class="btn btn-primary btn-lg btn-block" href="index.html" role="button">Regisztráció</a>
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
  name: "registration"
};
</script>

