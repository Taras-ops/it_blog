import { request, gql } from 'graphql-request'
import { GRAPHQL_API } from '../secret'

const graphqlAPI: any = process.env.GRAPHQL_API || GRAPHQL_API

export const getPosts = async () => {
  const query = gql`
    query GetPosts {
      postsConnection {
        edges {
          node {
            title
            excert
            slug
            image {
              url
            }
            author {
              name
              bio
              id
              photo {
                url
              }
            }
            featured
            createdAt
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges
}

export const getPostDetails = async (slug: String) => {
  const query = gql`
    query GetPostsDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excert
        slug
        image {
          url
        }
        author {
          name
          bio
          id
          photo {
            url
          }
        }
        featured
        createdAt
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug })

  return result.post
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostsDetails {
      posts(orderBy: updatedAt_ASC, last: 3) {
        slug
        title
        createdAt
        image {
          url
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.posts
}

export const getSimilarPosts = async (slug: String, categories: String) => {
  const query = gql`
    query GetPostsDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        slug
        title
        createdAt
        image {
          url
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug, categories })

  return result.posts
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.categories
}

export const getCategoryItems = async (category: any) => {
  const query = gql`
    query GetCategoryPosts($category: String!) {
      posts(where: { categories_some: { slug: $category } }) {
        slug
        title
        createdAt
        image {
          url
        }
        author {
          name
          bio
          id
          photo {
            url
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { category })

  return result.posts
}

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetFeaturedPosts {
      posts(where: {featured: true}) {
        slug
        title
        createdAt
        image {
          url
        }
        author {
          name
          photo {
            url
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.posts
}

// export const submitComment = async (obj) => {
//   const result = await fetch('/api/comments', {
//     method: 'POST',
//     body: JSON.stringify(obj),
//   })

//   return result.json()
// }
