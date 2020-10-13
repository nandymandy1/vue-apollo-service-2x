<template>
  <div id="app" class="d-flex flex-column">
    <Navbar />
    <div class="container flex-grow-1 py-5">
      <routerView />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Layouts/Navbar";
import Footer from "@/components/Layouts/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  async created() {
    await this.$store.dispatch("Auth/getAuthUser");
  },
};
</script>