import logo from './logo.svg';
import './App.css';
import Task from './component/Task';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Product from '../src/component/Products';
import Specification from '../src/component/Specification';
import Contactus from '../src/component/ContactUs';


function App() {
  return (
    <div className="App">
      {/* <p className="text">hello</p> */}
     {/* <Task/> */}
     {/* < Product /> */}
     {/* <Specification/> */}
     <Contactus/>
    </div>
  );
}

export default App;
