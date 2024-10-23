import { BrowserRouter,Routes,Route } from "react-router-dom";
import Body from "./Body";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Login from "./Login";
import Footer from "./Footer";

function App() {
  return (
    <>
    <BrowserRouter basename="">
      <Routes>
        <Route  path="/" element={<Body />}>
        <Route  path="/login" element={<Login />}/>
        <Route  path="/profile" element={<Profile />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  <Navbar/>
    </>
  )
}
export default App
