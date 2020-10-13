<template>
  <div class="auth-login">
    <div class="row">
      <div class="col-md-6 col-sm-12 mx-auto">
        <div class="card">
          <div class="card-header">
            <h3 class="text-primary font-weight-bold">Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="authenticateUser">
              <div class="form-group">
                <label
                  for="username"
                  class="text-primary font-weight-bold font-size-sm"
                  >Username</label
                >
                <input
                  type="text"
                  id="username"
                  class="form-control"
                  placeholder="Username"
                  v-model="user.username"
                />
              </div>
              <div class="form-group">
                <label
                  for="password"
                  class="text-primary font-weight-bold font-size-sm"
                  >Password</label
                >
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="user.password"
                />
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn-block">Login</button>
              </div>
              <div class="form-group">
                <routerLink to="/auth/register"
                  >Need an account? Register Now!</routerLink
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    user: {
      username: "",
      password: "",
    },
  }),
  methods: {
    ...mapActions({
      loginUser: "Auth/loginUser",
    }),
    async authenticateUser() {
      await this.loginUser(this.user);
    },
  },
};
</script>
