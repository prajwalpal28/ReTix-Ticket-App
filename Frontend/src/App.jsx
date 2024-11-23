import { NavBar } from "./Components/NavBar";
import { Add_ticket } from "./Pages/Add_ticket";
import { Home_page } from "./Pages/Home_page";
import { Login_page } from "./Pages/Login_page";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home_page />} />
            <Route path="/addTicket" element={<Add_ticket />} />
            <Route path="/loginPage" element={<Login_page />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
