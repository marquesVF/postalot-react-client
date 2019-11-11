import gql from 'graphql-tag'

export const QUERY_POST_LIST = gql`
    query posts {
        posts {
            title
            author
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
            title
            author
            comments {
            author
            content
            }
        }
    }
`
