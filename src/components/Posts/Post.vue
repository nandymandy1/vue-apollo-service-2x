<template>
  <div class="card post-card">
    <img :src="post.featuredImage" class="card-img-top" :alt="post.title" />
    <div class="card-body">
      <h4 class="text-primary">{{ post.title }}</h4>
      <p class="card-text">
        By {{ post.author.firstName }} {{ post.author.lastName }}
      </p>
      <p class="card-text">Published On {{ post.createdAt | dateTime }}</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  filters: {
    dateTime(val) {
      return moment(new Date(parseInt(val))).format("LL");
    },
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
