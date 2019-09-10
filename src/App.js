// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './views/Homepage.js';
import Order from './views/Order.js';
import Report from './views/Report.js';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter key='1'>
                <Switch key='01'>

                    <Route key='002' exact path="/order/:id/" component={Order}/>
                    <Route key='003' exact path="/reports/" component={Report}/>

                    <Route key='004' component={Homepage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}


export default App;
