<template>
  <div class="auth-register">
    <div class="row">
      <div class="col-md-6 col-sm-12 mx-auto">
        <div class="card">
          <div class="card-header">
            <h3 class="text-primary font-weight-bold">Register</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="signUpUser">
              <div class="form-group">
                <label
                  for="firstName"
                  class="text-primary font-weight-bold font-size-sm"
                  >First Name</label
                >
                <input
                  type="text"
                  id="firstName"
                  class="form-control"
                  placeholder="First Name"
                  v-model="user.firstName"
                />
              </div>
              <div class="form-group">
                <label
                  for="lastName"
                  class="text-primary font-weight-bold font-size-sm"
                  >Last Name</label
                >
                <input
                  type="text"
                  id="lastName"
                  class="form-control"
                  placeholder="Last Name"
                  v-model="user.lastName"
                />
              </div>
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
                  for="email"
                  class="text-primary font-weight-bold font-size-sm"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  class="form-control"
                  v-model="user.email"
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
                <button class="btn btn-primary btn-block">Register</button>
              </div>
              <div class="form-group">
                <routerLink to="/auth/login"
                  >Already have an account? Login Now!</routerLink
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
      email: "",
      username: "",
      lastName: "",
      password: "",
      firstName: "",
    },
  }),
  methods: {
    ...mapActions({
      registerUser: "Auth/registerUser",
    }),
    signUpUser() {
      console.log("USER", this.user);
      this.registerUser(this.user);
    },
  },
};
</script>
