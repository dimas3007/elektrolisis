import LandingPage from "./pages/LandingPage";
import ExcelDownload from "./pages/main_pages/ExcelDownload";
import VideoTutorial from "./pages/main_pages/VideoTutorial";
import Angket from "./pages/main_pages/Angket";
import Latihan from "./pages/main_pages/Latihan";
import Materi from "./pages/main_pages/Materi";
import PetaKonsep from "./pages/main_pages/PetaKonsep";
import Tentang from "./pages/main_pages/Tentang";
import TabelPeriodik from "./pages/main_pages/TabelPeriodik";
import ContentLayout from "./layouts/ContentLayout";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<LandingPage />} />
      <Route element={<ContentLayout />}>
        <Route path="/peta-konsep" element={<PetaKonsep />} />
        <Route path="/tabel-periodik" element={<TabelPeriodik />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/excel-download" element={<ExcelDownload />} />
        <Route path="/video-tutorial" element={<VideoTutorial />} />
        <Route path="/latihan" element={<Latihan />} />
        <Route path="/angket" element={<Angket />} />
        <Route path="/tentang" element={<Tentang />} />
      </Route>
    </Routes>
  );
}

export default App;
