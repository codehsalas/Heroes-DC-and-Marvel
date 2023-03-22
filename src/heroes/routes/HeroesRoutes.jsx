import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui"
import { DcPages, HeroPage, MarvelPage, SearchPage } from "../pages";
import { Welcome } from "../../auth/pages/Welcome";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPages />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Welcome />} />
          {/* <Route path="/" element={<Navigate to="/marvel" />} /> */}
        </Routes>
      </div>
    </>
  );
}
