import * as React from 'react'
import { PostsQuery } from "../../generated/graphql";
import Container from '@material-ui/core/Container'
import { Card, CardContent, Typography, GridList, GridListTile } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';

interface Props {
    data: PostsQuery
}

const useStyles = makeStyles({
    title: {
        fontSize: 16,
        textAlign: "left"
    },
    author: {
        fontSize: 12,
        textAlign: "left"
    },
    content: {
        fontSize: 14,
        textAlign: "left"
    }
})

const PostList: React.FC<Props> = ({ data }) => {
    const classes = useStyles()

    return (
        <GridList>
            {!!data.posts && data.posts.map(post => (
                <GridListTile>
                    <Card>
                        <CardContent>
                            <Typography className={classes.title} component="h2" color="textPrimary">
                                <b>{post.title}</b>
                            </Typography>
                            <Typography className={classes.author} color="textSecondary">
                                {post.author}
                                <br/>
                            </Typography>
                            <Typography className={classes.content} component="p">
                                {post.content}
                            </Typography>
                        </CardContent>
                    </Card>
                </GridListTile>
            ))}
        </GridList>
    )
}

export default PostList