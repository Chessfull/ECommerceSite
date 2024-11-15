import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";

function App() {
  return (
    <>
      <RouterProvider
        router={router} // -> Apply router provider coming from router.jsx
        future={{
          v7_startTransition: true,
        }}
      />
    </>
  );
}

export default App;
