import { Grid, Paper } from '@material-ui/core';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from './../App';
import Avatar from '@mui/material/Avatar';
import picture from './../DATA';
const PostDetails = () => {
    
    const {id} = useParams();
    const [posts,,comments] = useContext(PostContext)
    // const history = useNavigate();
    // history('/');
    const commentsStyle={"textAlign":"left","margin":"20px 10px 10px 20px"};
    
    const filteredComments = comments.filter(item=>item.postId===Number(id))
    const post = posts.find(item=> item.id===Number(id))

    
    return (
        <div>
             <Grid container direction="row" justifyContent='center' alignItems="center">
                <Grid style={{"marginBottom":"10px"}} item xs={6} md={8}>
                    <Paper style={{"height":"100px","fontSize":"30px", "marginBottom":"10px"}} elevation={8} square>{post.title}</Paper>
                    <Paper style={{"height":"150px","fontSize":"20px", "marginBottom":"10px"}} elevation={8} square>{post.body}</Paper>
                    {filteredComments.map(item=>                        
                        <div key={item.id}>
                            <Paper style={{"height":"250px", "marginBottom":"10px"}} elevation={8} square>
                                <Avatar style={{"margin":"20px" ,"border":"2px solid black", "width":"80px","height":"80px"}} alt="Not Found" src={`${picture.filter(pic=>pic.id===Number(item.id)).map(pic=>pic.image)}`} />
                                <h4 style={commentsStyle}>name: {item.name}</h4>
                                <h5 style={commentsStyle}>email: {item.email}</h5>
                                <h6 style={commentsStyle}>comments: {item.body}</h6>
                            </Paper>
                        </div>
                    )}
                </Grid>
            </Grid>
        </div>
    );
};

export default PostDetails;