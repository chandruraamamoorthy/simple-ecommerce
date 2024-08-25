import "./App.css";
import Router from "./routes/Router.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/Store.jsx";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

export default App;
