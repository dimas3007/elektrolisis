import LandingPage from "./pages/LandingPage";
import ExcelDownload from "./pages/main_pages/ExcelDownload";
import VideoTutorial from "./pages/main_pages/VideoTutorial";
import Latihan from "./pages/main_pages/Latihan/Latihan";
import Materi from "./pages/main_pages/Materi";
import PetaKonsep from "./pages/main_pages/PetaKonsep";
import Tentang from "./pages/main_pages/Tentang";
import TabelPeriodik from "./pages/main_pages/TabelPeriodik/TabelPeriodik";
import ContentLayout from "./layouts/ContentLayout";
import LandingLayout from "./layouts/LandingLayout";
import Angket from "./pages/main_pages/Angket/Angket";
import AngketContent from "./pages/main_pages/Angket/AngketContent";
import TekaTekiSilang from "./pages/main_pages/Latihan/TekaTekiSilang";
import Soal from "./pages/main_pages/Latihan/Soal";
import Login from "./pages/main_pages/Login";
import Register from "./pages/main_pages/Register";

import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [modalIsOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Routes>
        <Route element={<LandingLayout openModal={openModal} />}>
          <Route
            index
            path="/"
            element={<LandingPage openModal={openModal} />}
          />
          <Route path="/masuk" element={<Login />} />
          <Route path="/daftar" element={<Register />} />
        </Route>
        <Route element={<ContentLayout openModal={openModal} />}>
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
      <Modal isOpen={modalIsOpen}>
        <div className="modal-header">
          <h4>Petunjuk penggunaan website</h4>
          <FaTimes onClick={closeModal} className="modal-close" />
        </div>
        <div className="modal-content">
          <ul>
            <li>
              Setelah tampilan website terlihat, maka anda diharuskan masuk
              untuk mengakses fitur-fitur tertentu seperti mengunduh bahan
              materi, berkomentar, dll.
            </li>
            <li>
              Jika Anda belum memiliki akun, Anda dapat membuat akun terlebih
              dahulu. Untuk membuat akun, Anda dapat mengklik tombol “Daftar”
              yang tersedia di halaman website.
            </li>
            <li>
              Jika Anda telah memiliki akun, Anda dapat mengklik tombol “Masuk”
              dengan memasukkan alamat email dan kata sandi yang sudah Anda
              daftarkan.
            </li>
            <li>
              Setelah masuk, Anda akan melihat halaman beranda website. Di
              halaman beranda, Anda dapat melihat berbagai topik yang tersedia.
              Untuk memilih topik yang ingin dibaca, Anda dapat mengklik tautan
              topik tersebut.
            </li>
            <li>
              Setelah mengklik tautan topik, Anda akan melihat halaman topik
              tersebut. Di halaman topik, Anda dapat membaca materi pembelajaran
              yang tersedia. Materi pembelajaran dapat berupa teks, gambar,
              video, dan audio.
            </li>
            <li>
              Jika Anda ingin mengunduh materi elektrolisis pada halaman
              “Materi”, Anda dapat mengklik tombol “Unduh Materi” yang berada di
              bagian bawah tampilan materi yang ingin diunduh.
            </li>
            <li>
              Jika Anda ingin mengunduh media Excel Elektrolisis Interaktif pada
              halaman “Tutorial” dan “Materi Excel”, Anda dapat mengklik tombol
              “Unduh Excel” yang berada di bagian bawah tampilan halaman
              tersebut. Spesifikasi Microsoft Excel minimal tahun 2010 untuk
              dapat berfungsi dengan baik.
            </li>
            <li>
              Jika Anda ingin mengunduh video pada halaman “Tutorial” dan
              “Materi Excel”, Anda dapat mengklik tombol “Unduh Video” yang
              berada di bagian bawah tampilan video tersebut.
            </li>
            <li>
              Setelah membaca materi pembelajaran, Anda dapat menyelesaikan tes
              atau latihan yang tersedia di halaman “Latihan”. Di dalam halaman
              tersebut, terdapat latihan pilihan ganda dan TTS (Teka-Teki
              Silang). Anda dapat memilih salah satu dari kedua latihan
              tersebut. Tes atau latihan ini dapat membantu Anda untuk mengukur
              pemahaman Anda terhadap materi pembelajaran.
            </li>
            <li>
              Jika Anda memiliki pertanyaan atau ingin berbagi pendapat, Anda
              dapat memberikan komentar pada halaman bawah dari halaman yang
              dibuka pada bagian “Beri Komentar”.
            </li>
            <li>
              Jika Anda ingin membagikan materi pembelajaran di media sosial,
              Anda dapat mengklik tombol “Bagikan” yang berada di bagian bawah
              halaman.
            </li>
            <li>
              Untuk menilai media pembelajaran yang tersedia, Anda dapat memilih
              halaman “Angket” dan mengisi angket berdasarkan pendapat Anda
              serta kritik dan saran terhadap media website.
            </li>
          </ul>
        </div>
        <div className="modal-footer">
          <button className="btn-green" onClick={closeModal}>
            Mengerti
          </button>
        </div>
      </Modal>
    </>
  );
}

export default App;
