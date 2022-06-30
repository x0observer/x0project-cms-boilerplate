import React from "react";

import { RouterContext, RouterView } from 'mobx-state-router';
import { initRouter } from "./routers/initRouter";
import { viewMap } from "./routers/viewMap";

export const App = () => {
  const _routerStore = initRouter();
  return (<RouterContext.Provider value={_routerStore}>
    <RouterView viewMap={viewMap}></RouterView>
  </RouterContext.Provider>);
};

