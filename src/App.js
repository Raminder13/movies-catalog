import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Catalog from "./component/Catalog";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Detail from "./component/Detail";
import NotFound from "./component/NotFound";
import AddMovieForm from "./component/New";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/:sort?" element={<Catalog />} />
          <Route path="/movies/:id" element={<Detail />} />
          <Route path="/movies/new" element={<AddMovieForm />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
