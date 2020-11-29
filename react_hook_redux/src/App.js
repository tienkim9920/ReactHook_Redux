import logo from './logo.svg';
import './App.css';
import Hobby from './router/Hobby'

function App() {
  return (
    <div className="container">
    <div className="row">
      <div className="col s12 m4 l2"></div>
      <div className="col  s12 m4 l8">
      <h1>List Hobby</h1>
      <Hobby />
      </div>
      <div className="col  s12 m4 l2"></div>
    </div>
  </div>
  );
}

export default App;
