import { Provider } from "react-redux";
import { store } from "../config/store";

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
