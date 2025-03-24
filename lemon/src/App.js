// App.js
import { Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import BookingPage from "./BookingPage";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
