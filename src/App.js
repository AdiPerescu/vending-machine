import { Provider } from 'react-redux';
import VendingMachine from './components/VendingMachine';
import store from "./store/config/configureStore";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
		<Provider store={store}>
			<VendingMachine></VendingMachine>
		</Provider>
    </div>
  );
}

export default App;
