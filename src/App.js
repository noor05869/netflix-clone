import Home from "./screens/Home";
import react,{useEffect} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./screens/Login";
import ProfileScreen from "./screens/ProfileScreen";
import { auth } from "./firbase";
import {useDispatch,useSelector} from 'react-redux'
import {logout,login,selectUser} from "./features/userSlice"
import Test from "./Test";
function App() {
  // const user =null;
 const dispatch = useDispatch();
const user = useSelector(selectUser);
   useEffect(() => {
     const unSubcribe =auth.onAuthStateChanged((userAuth)=>{
       if(userAuth){
         console.log(userAuth)
         dispatch(
           login({
           uid:userAuth.uid,
           email: userAuth.email,
          }))
      //  login
        }
       else{
        //  logout
        dispatch(logout());
       }
     }

     )
     return () => {
       unSubcribe();
     }
   }, [dispatch])
  return (
    
  <Router>
    {!user ?(
      <Login/>
    ):(
      <Switch>
         <Route path ="/test">
            <Test/>
            </Route>
            <Route exact path="/">
          <Home />
        </Route>
          <Route path ="/profile">
            <ProfileScreen/>
            </Route>
      
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    
  
    )}
  </Router>    

  );
}

export default App;
