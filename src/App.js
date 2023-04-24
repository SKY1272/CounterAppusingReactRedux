import "./styles.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./components/reducer";
import Counter from "./components/Counter";
const store = createStore(reducer);
export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}
