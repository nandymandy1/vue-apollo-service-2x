<template>
  <div class="dashboard-posts">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="text-primary">Dashboard Posts</h3>
          </div>
          <ApolloQuery
            :query="
              (gql) =>
                gql`
                  ${GET_AUTHENTICATED_USER_POSTS}
                `
            "
            :variables="{ limit: 10, page: currentPage }"
          >
            <template v-slot="{ result: { data, error, loading } }">
              <p v-if="loading">Loading...</p>
              <div v-else-if="error">An error occurred</div>
              <div v-else-if="data" class="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Featured Image</th>
                      <th scope="col">Title</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(post, i) in data.getAuthenticatedUsersPosts.posts"
                      :key="post.id"
                    >
                      <th scope="row">{{ i + 1 }}</th>
                      <td>
                        <img
                          v-if="post.featuredImage"
                          class="img-thumbnail"
                          :src="post.featuredImage"
                          :style="{ height: '80px' }"
                        />
                      </td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>
                        <button
                          class="btn btn-primary btn-sm"
                          @click="$router.push(`/post/${post.id}`)"
                        >
                          View
                        </button>
                        <button class="btn btn-info btn-sm ml-2">Edit</button>
                        <button class="btn btn-danger btn-sm ml-2">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <b-pagination
                  v-model="currentPage"
                  :total-rows="
                    data.getAuthenticatedUsersPosts.paginator.postCount
                  "
                  :per-page="data.getAuthenticatedUsersPosts.paginator.perPage"
                  align="center"
                />
              </div>
              <div v-else class="no-result apollo">No result :(</div>
            </template>
          </ApolloQuery>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    currentPage: 1,
    GET_AUTHENTICATED_USER_POSTS: `
    query GET_AUTH_USERS_POSTS(
        $limit: Int! 
        $page: Int!
    ) {
        getAuthenticatedUsersPosts(
          page: $page, 
          limit: $limit
        ){
            posts{
              id
              title
              featuredImage
              createdAt
            }
            paginator{
              perPage
              postCount
            }
          }
      }
    `,
  }),
};
</script>