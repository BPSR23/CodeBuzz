// import React from "react";
// import {
//   BrowserRouter as Router,
//   Redirect,
//   Route,
//   Switch,
//   useLocation,
// } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";
// import ForgotPasswordPage from "../pages/ForgotPasswordPage";
// import Homepage from "../pages/Homepage";
// import Loginpage from "../pages/Loginpage";
// import { Layout } from "../components/Layout";
// import NotfoundPage from "../pages/NotfoundPage";
// import Profilepage from "../pages/Profilepage";
// import Registerpage from "../pages/Registerpage";
// import ResetPasswordPage from "../pages/ResetPasswordPage";
// import TestPage from "../pages/TestPage";
// import DashboardV1_1 from "./DashboardV1_1";
// import DetailedProfile from "../pages/DetailedProfile";

// export default function AppRouter(props) {
//   return (
//     <>
//       <Router>
//         <Layout />
//         <Switch>
//           <Route exact path="/" component={Homepage} />
//           <ProtectedRoute exact path="/login" component={Loginpage} />
//           <ProtectedRoute exact path="/register" component={Registerpage} />
//           <ProtectedRoute exact path="/dashboard" component={DashboardV1_1} />
//           <ProtectedRoute exact path="/profile" component={DetailedProfile} />
//           {/* <ProtectedRoute exact path='/test' component={TestPage} /> */}
//           <ProtectedRoute
//             exact
//             path="/forgot-password"
//             component={ForgotPasswordPage}
//           />
//           <ProtectedRoute
//             exact
//             path="/reset-password"
//             component={ResetPasswordPage}
//           />
//           <Route exact path="*" component={NotfoundPage} />
//         </Switch>
//       </Router>
//     </>
//   );
// }

// function ProtectedRoute(props) {
//   const { currentUser } = useAuth();
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
