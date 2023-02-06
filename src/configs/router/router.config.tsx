import React from "react";
import Page from "pages";

export const mainRoutes = {
  path: "/",
  element: <Page />,
  // children: [
  //   { path: "*", element: <Navigate to="/404" /> },
  //   { path: ":id", element: <AccountDetailView /> },
  //   { path: "add", element: <AccountAddView /> },
  //   { path: "list", element: <AccountListView /> },
  // ],
};

export const accountRoutes = {
  path: "account",
  element: <Page />,
  // children: [
  //   {path: '*', element: <Navigate to='/404' />},
  //   {path: ':id', element: <AccountDetailView />},
  //   {path: 'add', element: <AccountAddView />},
  //   {path: 'list', element: <AccountListView />},
  // ],
};
