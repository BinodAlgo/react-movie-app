import {BrowserRouter as Router, Routes, Route} from 'react-dom-router';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={"Hello"}/>
      </Routes>
    </Router>
  )
}
export default App;
