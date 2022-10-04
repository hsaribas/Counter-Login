import Router from "./router/Router";
import { StoreProvider } from "./store";

const App = () => {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
};

export default App;
