import LandingPage from "./pages/LandingPage";
import ExcelDownload from "./pages/main_pages/ExcelDownload";
import VideoTutorial from "./pages/main_pages/VideoTutorial";
import Latihan from "./pages/main_pages/Latihan/Latihan";
import Materi from "./pages/main_pages/Materi";
import PetaKonsep from "./pages/main_pages/PetaKonsep";
import Tentang from "./pages/main_pages/Tentang";
import TabelPeriodik from "./pages/main_pages/TabelPeriodik/TabelPeriodik";

import Angket from "./pages/main_pages/Angket/Angket";
import AngketContent from "./pages/main_pages/Angket/AngketContent";
import TekaTekiSilang from "./pages/main_pages/Latihan/TekaTekiSilang";
import Soal from "./pages/main_pages/Latihan/Soal";
import Login from "./pages/main_pages/Login";
import Register from "./pages/main_pages/Register";
import HasilLatihan from "./pages/main_pages/Admin/HasilLatihan";
import PrivacyPolicy from "./pages/main_pages/PrivacyPolicy";

import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import ContentLayout from "./layouts/ContentLayout";
import LandingLayout from "./layouts/LandingLayout";
import AdminLayout from "./layouts/AdminLayout";

import ManageUsers from "./pages/main_pages/Admin/ManageUsers";
import Dashboard from "./pages/main_pages/Admin/Dashboard";
import Pengantar from "./pages/main_pages/Latihan/Pengantar";

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
          <Route path="/latihan/pengantar-soal" element={<Pengantar />} />
          <Route path="/angket" element={<Angket />} />
          <Route path="/angket/content/:angket" element={<AngketContent />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/syarat-ketentuan" element={<PrivacyPolicy />} />
        </Route>
        <Route element={<AdminLayout openModal={openModal} />}>
          <Route path="/admin/hasil-latihan" element={<HasilLatihan />} />
          <Route path="/admin/manage-user" element={<ManageUsers />} />
          <Route path="/admin" element={<Dashboard />} />
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
              dahulu. Untuk membuat akun, Anda dapat mengklik tombol{" "}
              <b>Daftar</b> yang tersedia di halaman <i>website</i>.
            </li>
            <li>
              Jika Anda telah memiliki akun, Anda dapat mengklik tombol{" "}
              <b>Masuk</b> dengan memasukkan alamat <i> email </i> dan kata
              sandi yang sudah Anda daftarkan.
            </li>
            <li>
              Setelah masuk, Anda akan melihat halaman beranda <i> website </i>.
              Di halaman beranda, Anda dapat melihat berbagai topik yang
              tersedia. Untuk memilih topik yang ingin dibaca, Anda dapat
              mengklik tautan topik tersebut.
            </li>
            <li>
              Setelah mengklik tautan topik, Anda akan melihat halaman topik
              tersebut. Di halaman topik, Anda dapat membaca materi pembelajaran
              yang tersedia. Materi pembelajaran dapat berupa teks, gambar,
              video, dan audio.
            </li>
            <li>
              Jika Anda ingin mengunduh materi elektrolisis pada halaman{" "}
              <b>Materi</b>, Anda dapat mengklik tombol <b>Unduh Materi</b> yang
              berada di bagian bawah tampilan materi yang ingin diunduh.
            </li>
            <li>
              Jika Anda ingin mengunduh media <i> Excel </i> Elektrolisis
              Interaktif pada halaman <b>Tutorial</b> dan <b>Materi Excel</b>,
              Anda dapat mengklik tombol <b>Unduh Excel</b> yang berada di
              bagian bawah tampilan halaman tersebut. Spesifikasi{" "}
              <i>Microsoft Excel</i> minimal tahun 2010 untuk dapat berfungsi
              dengan baik.
            </li>
            <li>
              Jika Anda ingin mengunduh video pada halaman <b>Tutorial</b> dan{" "}
              <b>Materi Excel</b>, Anda dapat mengklik tombol <b>Unduh Video</b>{" "}
              yang berada di bagian bawah tampilan video tersebut.
            </li>
            <li>
              Setelah membaca materi pembelajaran, Anda dapat menyelesaikan tes
              atau latihan yang tersedia di halaman <b>Latihan</b>. Di dalam
              halaman tersebut, terdapat latihan pilihan ganda dan TTS
              (Teka-Teki Silang). Anda dapat memilih salah satu dari kedua
              latihan tersebut. Tes atau latihan ini dapat membantu Anda untuk
              mengukur pemahaman Anda terhadap materi pembelajaran.
            </li>
            <li>
              Jika Anda memiliki pertanyaan atau ingin berbagi pendapat, Anda
              dapat memberikan komentar pada halaman bawah dari halaman yang
              dibuka pada bagian <b>Beri Komentar</b>.
            </li>
            <li>
              Jika Anda ingin membagikan materi pembelajaran di media sosial,
              Anda dapat mengklik tombol <b>Bagikan</b> yang berada di bagian
              bawah halaman.
            </li>
            <li>
              Untuk menilai media pembelajaran yang tersedia, Anda dapat memilih
              halaman <b>Angket</b> dan mengisi angket berdasarkan pendapat Anda
              serta kritik dan saran terhadap media <i>website</i>.
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
