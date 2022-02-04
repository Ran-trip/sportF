import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Announce from './components/announce/Announce';
import Home from './components/home/Home';

import './App.css';
import PostAnnounce from './components/postAnnounce/Postannounce';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/announce" element={<Announce />} />
        <Route path="/postAnnounce" element={<PostAnnounce />} />
      </Routes>
    </Router>
  </>
);

export default App;
