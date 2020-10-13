<template>
  <div
    class="card"
    :style="{ cursor: 'pointer' }"
    @click="$router.push(`/post/${post.id}`)"
  >
    <img
      v-if="post.featuredImage"
      :src="post.featuredImage"
      class="card-img-top"
    />
    <div class="card-body">
      <h3 class="card-title">{{ post.title }}</h3>
      <div class="card-subtitle">
        <p class="text-muted">
          Postsed on:
          <span class="font-weight-bold">{{ new Date() }}</span>
        </p>
        <p class="text-muted">
          Posted by:
          <span class="font-weight-bold">
            {{ post.author.firstName }} {{ post.author.lastName }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
