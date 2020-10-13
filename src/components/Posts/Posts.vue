<template>
  <div class="row my-3">
    <div class="col-sm-12 col-md-6 mb-3" v-for="post in posts" :key="post.id">
      <Post :post="post" />
    </div>
  </div>
</template>

<script>
import Post from "./Post";
export default {
  name: "Posts",
  components: {
    Post,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
