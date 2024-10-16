import ReactDOM, { Root } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

const el: HTMLElement = document.getElementById("root")!;
const root: Root = ReactDOM.createRoot(el!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
