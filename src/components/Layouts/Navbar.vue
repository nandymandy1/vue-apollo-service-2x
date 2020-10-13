<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">Vue Apollo</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <li class="nav-item">
          <routerLink to="/" class="nav-link">Home</routerLink>
        </li>
        <li class="nav-item">
          <routerLink to="/about" class="nav-link">About</routerLink>
        </li>
        <li class="nav-item" v-if="!isAuth">
          <routerLink to="/auth/login" class="nav-link">Login</routerLink>
        </li>
        <li class="nav-item" v-if="!isAuth">
          <routerLink to="/auth/register" class="nav-link">Register</routerLink>
        </li>
        <li class="nav-item" v-if="isAuth">
          <routerLink to="/dashboard/my-profile" class="nav-link">
            Profile
          </routerLink>
        </li>
        <li class="nav-item" v-if="isAuth">
          <routerLink to="/dashboard/my-posts" class="nav-link"
            >Posts</routerLink
          >
        </li>
        <li class="nav-item" v-if="isAuth">
          <routerLink to="/dashboard/logout" class="nav-link">
            Logout
          </routerLink>
        </li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      isAuth: "Auth/isAuth",
    }),
  },
};
</script>
