import React from "react";
import * as HomePage from "../pages/HomePage";
import * as UsersListPage from "../pages/UsersListPage";

const Routes = [
    {
        path: "/",
        component: HomePage.default,
        exact: true
    },
    {
        path: "/users",
        component: UsersListPage.default,
        exact: true,
        loadData: UsersListPage.loadData
    }
];

export default Routes;


// import { Route } from "react-router-dom";

// const Routes = () => {
//     return (
//       <div>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/users" component={UsersList} />
//       </div>
//     )
// }