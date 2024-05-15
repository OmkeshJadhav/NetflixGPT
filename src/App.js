import { Provider } from "react-redux";
import Body from "./Components/Body";
import appStore from "./data/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />;
    </Provider>
  );
}

export default App;
