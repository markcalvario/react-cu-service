import React, {useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import "./App.css";
import { useDispatch} from "react-redux";
import {checkUserSession} from "./redux/user/user.actions";

//components
import AdminToolbar from "./components/adminToolbar/adminToolbar";

//hoc
import WithAuth from "./hoc/WithAuth";
import WithAdminAuth from "./hoc/WithAdminAuth";

//Layouts
import MainLayout from "./layouts/MainLayout"
import HomepageLayout from "./layouts/HomepageLayout"

//pages
import Login from "./pages/login/Login"
import Homepage from "./pages/homepage/Homepage"
import Recovery from "./pages/recovery/Recovery"
import Registration from "./pages/registration/Registration"
import Dashboard from "./pages/dashboard/Dashboard"
import Admin from "./pages/admin/admin";



//App
const App = props => {

  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(checkUserSession());
   
  },[])

    return (
      <div className="app">
          <AdminToolbar/>
          <Switch>
            <Route exact path="/" render={()=>(
              <HomepageLayout {...props} >
                  <Homepage {...props}/>
              </HomepageLayout>
              
            )} />
            <Route path="/login" 
            render={()=> (
              <MainLayout >
                <Login/>
              </MainLayout>
            )} />
            <Route path="/register"
            render={()=>  (
              <MainLayout>
                <Registration/>
              </MainLayout>
            )} />
            <Route path="/recovery" render={()=>(
              <MainLayout>
                  <Recovery/>
              </MainLayout>
              
            )} />
            <Route path="/dashboard" render={()=>(
              <WithAuth>
                  <HomepageLayout>
                      <Dashboard/>
                  </HomepageLayout>
              </WithAuth>
            )} />
            <Route path="/admin" render={()=>(
              <WithAdminAuth>
                <MainLayout>
                    <Admin/>
                </MainLayout>
              </WithAdminAuth>
            )} />
          </Switch>
      
     
      </div>
    );

}

export default App;
