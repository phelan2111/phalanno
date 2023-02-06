import { accountRoutes, mainRoutes } from "configs/router/router.config";
import React from "react";
import { useRoutes } from "react-router-dom";

const Component: React.FC = () => {
  const routing = useRoutes([mainRoutes, accountRoutes]);
  return routing;
};

export default Component;
