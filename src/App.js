
import './App.css';
import Home from './home/Home';
import { Route,Routes} from "react-router-dom";
import PostDetails from './postDetails/PostDetails';
import { createContext, useState, useEffect  } from 'react';

export const PostContext = createContext();

function App() {
  const [posts,setPosts] = useState([]);
  const [comments,setComments] = useState([])
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComments(data));
  },[])
  
  return (
    <div className="App">
      <PostContext.Provider value={[posts,setPosts,comments]}>
      <Routes>
          <Route exact path="/" element={<Home></Home>}/>
          <Route exact path="/post/:id" element={<PostDetails></PostDetails>}/>
      </Routes>
      </PostContext.Provider>
    </div>
  );
}

export default App;
