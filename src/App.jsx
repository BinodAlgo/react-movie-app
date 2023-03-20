import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<div>Page Not Found</div>}/>
        <Route path='/starred' element={<Starred/>}/>
      </Routes>
    </Router>
  )
}
export default App;
