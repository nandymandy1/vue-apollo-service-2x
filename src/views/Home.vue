<template>
  <div class="home">
    <h2 class="text-primary font-weight-bold mb-3">News Feed</h2>
    <ApolloQuery
      :query="
        (gql) =>
          gql`
            ${feedsQuery}
          `
      "
      :variables="{ limit: 6, page: currentPage }"
    >
      <template v-slot="{ result: { data, error, loading } }">
        <div v-if="loading"><p>Loading...</p></div>
        <div v-else-if="data">
          <Posts :posts="data.getPostsByLimitAndPage.posts" />
          <bPagination
            align="center"
            v-model="currentPage"
            :per-page="data.getPostsByLimitAndPage.paginator.perPage"
            :total-rows="data.getPostsByLimitAndPage.paginator.postCount"
          />
        </div>
        <div v-else-if="error">Something happend please try again...</div>
        <div v-else>No Result</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import Posts from "@/components/Posts/Posts";
export default {
  components: {
    Posts,
  },
  watch: {
    currentPage() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  name: "Home",
  data: () => ({
    currentPage: 1,
    feedsQuery: `
    query GetPaginatedPosts($page: Int!, $limit: Int!) {
            getPostsByLimitAndPage(page: $page, limit: $limit) {
              posts {
                id
                title
                featuredImage
                createdAt
                updatedAt
                author {
                  id
                  username
                  firstName
                  lastName
                  avatarImage
                }
              }
              paginator {
                currentPage
                postCount
                perPage
              }
            }
          }
    `,
  }),
};
</script>