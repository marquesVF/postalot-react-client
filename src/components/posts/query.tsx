import gql from 'graphql-tag'

export const QUERY_POST_LIST = gql`
    query posts {
        posts {
            createdAt
            author
            title
            content
            comments {
                author
                content
            }
        }
    }
`

export const QUERY_POST = gql`
    query post($id: ID!) {
        post(id: $id) {
            createdAt
            author
            title
            content
            comments {
                author
                content
            }
        }
    }
`
