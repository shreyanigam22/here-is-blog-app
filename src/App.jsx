import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/login/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App(){
  const currentUser=false;
  return (
   
    <Router>
    <TopBar/>
    <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/register"> {currentUser ? <Home/> : <Register/>}</Route>
          <Route path="/login"> {currentUser ? <Home/> : <Login/>}</Route>
          <Route path="/write"> {currentUser ? <Write/> : <Register/>}</Route>
          <Route path="/setting">{currentUser ? <Setting/> : <Login/>}</Route>
          <Route path="/post/:postId">
          <Single/>

          </Route>
        </Switch>
    </Router>
  );
}

export default App;
