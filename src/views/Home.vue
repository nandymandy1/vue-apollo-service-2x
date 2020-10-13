<template>
  <div class="home">
    <h4 class="text-primary display-4">News Feed</h4>
    <ApolloQuery
      :query="
        (gql) =>
          gql`
            ${GET_ALL_PAGINATED_POSTS}
          `
      "
      :variables="{ page: currentPage, limit: 10 }"
    >
      <template v-slot="{ result: { data, loading, errors } }">
        <p class="loading" v-if="loading">Loading ...</p>
        <div class="error" v-else-if="errors">Error :-(</div>
        <div class="posts" v-else-if="data">
          <PostList :posts="data.getPostsByLimitAndPage.posts" />
          <bPagination
            align="center"
            v-model="currentPage"
            :per-page="data.getPostsByLimitAndPage.paginator.perPage"
            :total-rows="data.getPostsByLimitAndPage.paginator.postCount"
          />
        </div>
        <div v-else>No data found...</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import PostList from "@/components/Posts/Posts";
export default {
  components: {
    PostList,
  },
  name: "Home",
  data: () => ({
    currentPage: 1,
    GET_ALL_PAGINATED_POSTS: `
      query GET_PAGINATED_POSTS($page: Int!, $limit: Int!) {
            getPostsByLimitAndPage(limit: $limit, page: $page) {
              posts {
                id
                title
                featuredImage
                author {
                  username
                  firstName
                  lastName
                }
              }
              paginator {
                perPage
                postCount
              }
            }
        }`,
  }),
};
</script>