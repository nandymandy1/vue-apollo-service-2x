<template>
  <div class="posts">
    <div class="row">
      <div
        class="col-md-6 col-sm-12 h-100 mb-3"
        v-for="post in posts"
        :key="post.id"
      >
        <PostCard :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from "./Post";
export default {
  components: {
    PostCard,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
