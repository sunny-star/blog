
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Login'
import Register from './pages/Register'
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'
import { UserContextProvider } from './context/UserContext'
import MyBlogs from './pages/MyBlogs'






const App = () => {
  return (


    <UserContextProvider>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/posts/post/:id" Component={PostDetails} />
        <Route exact path="/write" Component={CreatePost} />
        <Route exact path="/edit/:id" Component={EditPost} />
        <Route exact path="/myblogs/:id" Component={MyBlogs} />
        <Route exact path="/profile/:id" Component={Profile} />
      </Routes>
    </UserContextProvider>




  )
}

export default App
