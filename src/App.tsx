import { RouterProvider } from "react-router-dom"
import { mainRouter } from "./Router/mainRoutes"
import { Provider } from "react-redux"
import { store } from "./Global/store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const App = () => {
//   return (
//     <div>
        
//       <Provider store={store}>
//       </Provider>
//       <RouterProvider router={mainRouter}/>
//     </div>
//   )
// }

// export default App
const client = new QueryClient();
const App = () => {
  return (
    <div>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <RouterProvider router={mainRouter} />
        </Provider>
      </QueryClientProvider>
    </div>
  );
};

export default App;