import LandingPage from "./pages/LandingPage";
import ExcelDownload from "./pages/main_pages/ExcelDownload";
import VideoTutorial from "./pages/main_pages/VideoTutorial";
import Latihan from "./pages/main_pages/Latihan/Latihan";
import Materi from "./pages/main_pages/Materi";
import PetaKonsep from "./pages/main_pages/PetaKonsep";
import Tentang from "./pages/main_pages/Tentang";
import TabelPeriodik from "./pages/main_pages/TabelPeriodik/TabelPeriodik";
import ContentLayout from "./layouts/ContentLayout";
import Angket from "./pages/main_pages/Angket/Angket";
import AngketContent from "./pages/main_pages/Angket/AngketContent";
import TekaTekiSilang from "./pages/main_pages/Latihan/TekaTekiSilang";
import Soal from "./pages/main_pages/Latihan/Soal";

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
        <Route path="/latihan/tts" element={<TekaTekiSilang />} />
        <Route path="/latihan/soal" element={<Soal />} />
        <Route path="/angket" element={<Angket />} />
        <Route path="/angket/content/:angket" element={<AngketContent />} />
        <Route path="/tentang" element={<Tentang />} />
      </Route>
    </Routes>
  );
}

export default App;
