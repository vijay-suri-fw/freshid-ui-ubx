import logo from './logo.svg';
import './App.css';
import { useFetch } from './CustomHooks/useFetch';

function App() {
  const { loading, error, data } = useFetch('getSubscriptions');
  const data2 = useFetch('getBundleFeatureMatrix');
  const data3 = useFetch('getSubscriptionRenewalEstimate');
  const data4 = useFetch('getPlans');
  const data5 = useFetch('getAddonsByIds');
  console.log({ error, loading, data, data2, data3, data4, data5})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
