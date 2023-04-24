import './App.css';
import { BookProvider } from './context/Bookcontext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import BookDetail from './pages/productDetail';

function App() {
  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/book/:id' exact element={<BookDetail />}/>
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;
