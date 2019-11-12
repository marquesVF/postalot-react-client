import * as React from 'react'
import { PostsQuery } from "../../generated/graphql"
import { Card, CardContent, Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

interface Props {
    data: PostsQuery
}

const useStyles = makeStyles({
    card: {
        backgroundColor: "#e5e6e0",
        margin: 14
    },
    comment: {
        backgroundColor: "#e6dfe1",
        margin: 12
    },
    title: {
        color: "#243327",
        fontSize: 24,
        fontFamily: 'Rubik',
        textAlign: "left"
    },
    author: {
        fontSize: 15,
        textAlign: "left"
    },
    content: {
        fontSize: 17,
        fontFamily: 'Noto Sans TC',
        textAlign: "left"
    }
})

const PostList: React.FC<Props> = ({ data }) => {
    const classes = useStyles()

    return (
        <Container>
            {!!data.posts && data.posts.map(post => (
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} component="h2" color="textPrimary">
                            <b>{post.title}</b>
                        </Typography>
                        <Typography className={classes.author} color="textSecondary">
                            {post.author}
                            <br/>
                        </Typography>
                        <Typography className={classes.content} paragraph>
                            {post.content}
                        </Typography>
                    </CardContent>
                    {!!post.comments && post.comments.length > 0 && post
                        .comments.map(comment => (
                            <Card className={classes.comment}>
                                <CardContent>
                                    <Typography className={classes.author}>{!!comment && comment.author}</Typography>
                                    <Typography className={classes.content} paragraph>{!!comment && comment.content}</Typography>
                                </CardContent>
                            </Card>
                        ))
                    }
                </Card>
            ))}
        </Container>
    )
}

export default PostList