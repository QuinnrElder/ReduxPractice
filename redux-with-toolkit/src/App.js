import './App.css';

//COMPONENTS
import {Profile} from './Components/Profile'
import {Login} from './Components/Login'
import {ChangeColor} from './Components/ChangeColor'

//THIS>COMPONENT
function App() {
  return (
    <div className="App">
      <Profile/>
      <Login/>
      <ChangeColor/>
    </div>
  );
}

export default App;
