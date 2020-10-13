<template>
  <div class="post">
    <button class="btn btn-primary mb-3" @click="$router.go(-1)">Back</button>
    <ApolloQuery
      :query="
        (gql) =>
          gql`
            ${GET_POST_BY_ID}
          `
      "
      :variables="{ id: $route.params.id }"
    >
      <template
        v-slot="{
          result: {
            data,
            error,
            loading,
          },
        }"
      >
        <p v-if="loading">Loading...</p>
        <div v-else-if="error">An error occurred</div>
        <div v-else-if="data">
          <div class="card mb-3">
            <img
              class="card-img-top"
              v-if="data.getPostById.featuredImage"
              :src="data.getPostById.featuredImage"
            />
            <div class="card-body">
              <h2 class="card-title">{{ data.getPostById.title }}</h2>
              <p class="card-text">
                {{ data.getPostById.content }}
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Posted on {{ data.getPostById.createdAt }}
                </small>
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Posted by {{ data.getPostById.author.firstName }}
                  {{ data.getPostById.author.lastName }}
                </small>
              </p>
            </div>
          </div>
        </div>
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  data: () => ({
    GET_POST_BY_ID: `
    query GET_POST_BY_ID($id: ID!){
        getPostById(id: $id){
            id
            title
            content
            author{
                id
                username
                email
                firstName
                lastName
            }
            featuredImage
            createdAt
            updatedAt
        }
    }
    `,
  }),
};
</script>
