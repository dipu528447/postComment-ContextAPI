import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { PostContext } from '../App';

const Home = () => {
    const [posts,setPosts] = useContext(PostContext)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    })
    
    return (
        <div>
            <Grid container direction="row" justifyContent='center' alignItems="center">
                {posts.map(item=>
                    <Grid style={{"marginBottom":"10px"}}item xs={6} md={8} key={item.id}>
                        <Paper style={{"height":"50px","fontSize":"20px", "marginBottom":"10px"}} elevation={8} square>{item.title}</Paper>
                        <Link to={`/post/${item.id}`} style={{"textDecoration":"none"}}><Button variant="outlined">See More</Button></Link>
                    </Grid>
                )}
            </Grid>
        </div>
    );
};

export default Home;