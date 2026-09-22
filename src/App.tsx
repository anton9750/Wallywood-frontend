import { Routes, Route } from "react-router-dom";
import Navbar from "./partials/Navbar";
import Home from "./pages/home";
import Plakater from "./pages/plakater";
import PosterDetail from "./pages//posterDetailPage"
import OmOs from "./pages/om-os";
import KontaktOs from "./pages/kontakt";
import Login from "./pages/loginpage";
import Footeren from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/plakater">
          <Route index element={<Plakater />} />
          <Route path=":id" element={<PosterDetail />} />
        </Route>

        <Route path="/om-os" element={<OmOs />} />
        <Route path="/kontakt-os" element={<KontaktOs />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footeren />
    </>
  );
}

export default App;