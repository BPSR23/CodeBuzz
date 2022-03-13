import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import AppRouter from "./components/AppRouter";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./pages/Loginpage";
import Navbar from "../src/components/Navbar";
import Landing from "./components/DashboardV1";
import Register from "./pages/Registerpage";
import PrivateRoute from "./components/private-route/PrivateRoute";
import DashboardV1_1 from "./components/DashboardV1_1";
// import DashboardV1_1 from "./components/DashboardV1_1";
// import ForgotPasswordPage from "../pages/ForgotPasswordPage";
// import Homepage from "../pages/Homepage";
// import Loginpage from "../pages/Loginpage";
// import { Layout } from "../components/Layout";
// import NotfoundPage from "../pages/NotfoundPage";
// // import Profilepage from "../pages/Profilepage";
// import Registerpage from "../pages/Registerpage";
// import ResetPasswordPage from "../pages/ResetPasswordPage";
// // import TestPage from "../pages/TestPage";
// // import DashboardV1_1 from "../src/components/DashboardV1_1";
import DetailedProfile from "../src/pages/DetailedProfile";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/dashboard" component={DashboardV1_1} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            {/* <PrivateRoute exact path="/dashboard" component={DashboardV1_1} /> */}
          </Switch>
          {/* <Route exact path="/" component={Homepage} /> */}
          {/* < Route exact path="/login" component={Loginpage} /> */}
          {/* < Route exact path="/register" component={Registerpage} /> */}
          <Route exact path="/dashboard" component={DashboardV1_1} />
          <Route exact path="/profile" component={DetailedProfile} />
          {/* < Route exact path='/test' component={TestPage} /> */}
          {/* < Route
            exact
            path="/forgot-password"
            component={ForgotPasswordPage}
          />
          < Route
            exact
            path="/reset-password"
            component={ResetPasswordPage}
          />
          <Route exact path="*" component={NotfoundPage} /> */}
          {/* <AppRouter /> */}
        </div>
      </Router>
    </Provider>
    // <>
    //   <Router>
    //     <Layout />
    //     <Switch>
    //       <Route exact path="/" component={Homepage} />
    //       <Route exact path="/login" component={Loginpage} />
    //       <Route exact path="/register" component={Registerpage} />
    //       <Route exact path="/dashboard" component={DashboardV1_1} />
    //       <Route exact path="/profile" component={DetailedProfile} />
    //       {/* < Route exact path='/test' component={TestPage} /> */}
    //       <Route exact path="/forgot-password" component={ForgotPasswordPage} />
    //       <Route exact path="/reset-password" component={ResetPasswordPage} />
    //       <Route exact path="*" component={NotfoundPage} />
    //     </Switch>
    //   </Router>
    // </>
  );
}
// function  Route(props) {
//   // const { currentUser } = useAuth();
//   const { path } = props;
//   console.log("path", path);
//   const location = useLocation();
//   console.log("location state", location.state);

//   if (
//     path === "/login" ||
//     path === "/register" ||
//     path === "/forgot-password" ||
//     path === "/reset-password"
//   ) {
//     return currentUser ? (
//       <Redirect to={location.state?.from ?? "/dashboard"} />
//     ) : (
//       <Route {...props} />
//     );
//   }
//   return currentUser ? (
//     <Route {...props} />
//   ) : (
//     <Redirect
//       to={{
//         pathname: "/dashboard",
//         state: { from: path },
//       }}
//     />
//   );
// }
