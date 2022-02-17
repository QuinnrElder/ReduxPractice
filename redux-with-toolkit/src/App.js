import './App.css';

//COMPONENTS
import {Profile} from './Components/Profile'
import {Login} from './Components/Login'

//THIS>COMPONENT
function App() {
  return (
    <div className="App">
      <Profile/>
      <Login/>
    </div>
  );
}

export default App;
