
import React, {Component} from 'react'
import './App.css';

//Components
import Racing from './Racing';
import Basketball from './Basketball';
import Soccer from './Soccer';
import Badminton from './Badminton';
import Football from './Football';
import Cover from './Cover';
import Login from './Login';
import Cards from './Cards';
import Showcase from './Showcase';
import Landing from './Landing';

//function component -> made out of a function
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>

//     </div>
//   );
// }








//class component -> is made out of a class
class App extends Component {
  render(){
    return (
          <div className="App">
            {/* <Racing />
            <Basketball/>
            <Soccer/>
            <Badminton/>
            <Football/> */}
            {/* <Cover/> */}
            {/* <Login/> */}
            {/* <Cards/> */}
            <Showcase/>
            {/* <Landing/> */}

          </div>
    )
  }
}

export default App;


