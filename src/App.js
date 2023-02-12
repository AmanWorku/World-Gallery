import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path=":details" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
