import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav"
import { HashRouter , Routes , Route } from 'react-router-dom';
import Home from "./components/index"
function App() {
  return (
    <div className="App">
    <HashRouter>
      <div>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' element={<div>404 Not Found</div>}></Route>
          {/* <Route path ="/create-task" element={<div><CreateTask/></div>}/>
          <Route path ="/completed" element={<div><CompletedList/></div>}/>
          <Route path ="/register" element={<div><Register/></div>}/>
          <Route path ="/login" element={<div><Login/></div>}/>
          <Route path='/edit-task/:id' element={<EditTask />} /> */}
        </Routes>
      </div>
    </HashRouter>
    
  </div>
  );
}

export default App;
