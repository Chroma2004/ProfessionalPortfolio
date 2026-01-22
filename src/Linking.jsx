import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Works from './Works';

function Linking() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="works" element={<Works />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Linking;