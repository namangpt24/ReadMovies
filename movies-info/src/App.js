import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

function App() {
  return (
    <div className="App">
        <Router>
        <Header></Header>
          <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path="movie/:id" element={<MovieDetail></MovieDetail>}></Route>
            <Route path="movies/:type" element={<MovieList></MovieList>}></Route>
            <Route path="/*" element={<h1>Error Page</h1>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
