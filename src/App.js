import {Routes, Route} from 'react-router-dom'
import Menu from "./components/Menu"
import ButtonLink from "./components/ButtonLink"
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import HomePage from './components/HomePage'
import Error from "./components/Error"

import "./index.css"

function App() {
  return (
    <>
      <Menu />
      <ButtonLink />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
export default App;
