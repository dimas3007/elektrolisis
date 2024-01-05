import React from "react";
import HeadingContent from "../../layouts/components/HeadingContent";
import ucodeFoto from "../../assets/img/tentang/ucode.jpg";
import paibnuFoto from "../../assets/img/tentang/paibnu.jpg";
import bukanaFoto from "../../assets/img/tentang/bukana.jpg";

const Tentang = () => {
  return (
    <div>
      <HeadingContent title="Tentang" showAuthor={false} />

      <div className="main-content">
        <div className="tentang">
          <div className="tentang-item">
            <div className="foto">
              <div className="foto-img">
                <img src={ucodeFoto} alt="" />
              </div>
              <h2>Putri Rahmasari</h2>
            </div>
            <p>
              <b>Putri Rahmasari</b>, lahir di Banda Aceh pada tanggal 11
              November 2002. Sekolah dasar diselesaikan pada tahun 2014 di SD
              Negeri 11 Banda Aceh. Sekolah Menengah Pertama diselesaikan pada
              tahun 2017 di MTs Negeri Model Banda Aceh. Sekolah Menengah Atas
              diselesaikan di SMA Negeri 3 Banda Aceh pada tahun 2020. Tahun
              2020 menempuh bangku perkuliahan Jurusan Pendidikan Kimia FKIP
              Universitas Syiah Kuala hingga sekarang. <i>Website</i> ini
              merupakan salah satu media penelitian yang dikembangkan untuk
              melengkapi tugas-tugas dan memenuhi syarat-syarat guna memperoleh
              gelar Sarjana Pendidikan dengan judul skripsi yaitu Pengembangan
              Media Pembelajaran <i>Excel</i> Elektrolisis Interaktif Berbasis{" "}
              <i>Website</i>.
            </p>
            <p>
              Email:{" "}
              <a href="mailto:putri.rahmasri@gmail.com">
                putri.rahmasri@gmail.com
              </a>
            </p>
          </div>
          <div className="tentang-item">
            <div className="foto">
              <div className="foto-img">
                <img src={ucodeFoto} alt="" />
              </div>
              <h2>UCODE.ID</h2>
            </div>
            <p>
              <b>ucode.id</b> adalah tim yang dibuat oleh <b>Dimas Setiaji</b>,
              seorang praktisi berpengalaman dalam web development, software
              engineering, dan desain UI/UX, berbasis di Bandung, Indonesia.
              Dengan lebih dari empat tahun pengalaman, saya memiliki komitmen
              kuat terhadap profesionalisme dan kualitas dalam setiap aspek
              pekerjaan. Individu yang terampil dan berpengalaman menjadi
              landasan pendekatan saya, memastikan kolaborasi yang cermat untuk
              menghadirkan setiap proyek dengan presisi dan kecakapan tinggi.
              Selain layanan teknologi, saya juga menawarkan mentoring bagi
              individu yang ingin mengasah keterampilan mereka, karena mereka
              meyakini bahwa berbagi pengetahuan adalah bagian integral dari
              pertumbuhan industri. Dengan portofolio yang mengesankan, saya
              telah berhasil menyelesaikan beragam proyek, mencerminkan
              kompetensi dan dedikasi mereka dalam memberikan solusi sesuai
              kebutuhan klien.
            </p>
            <p>
              Email:{" "}
              <a href="mailto:dimassetiaji30@gmail.com">
                dimassetiaji30@gmail.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/dimas30/">Dimas Setiaji</a>
            </p>
          </div>
          <div className="tentang-item">
            <div className="foto">
              <div className="foto-img">
                <img src={paibnuFoto} alt="" />
              </div>
              <h2>Dr. Ibnu Khaldun, M.Si</h2>
            </div>
            <p>
              <b>Ibnu Khaldun</b>, lahir di Pulau Banyak, Tanjungpura, Langkat
              Sumatera Utara pada tanggal 10 Oktober 1966. Pada tahun 1990
              memperoleh gelar Sarjana Pendidikan pada Program Studi Pendidikan
              Kimia Fakultas Keguruan dan Ilmu Pendidikan Universitas Syiah
              Kuala. Pada tahun 1995, menyelesaikan pendidikan Magister di
              Program Studi Kimia FMIPA Institut Teknologi Bandung dalam bidang
              Kimia Analitik. Selanjutnya pada tahun 2009 meraih gelar Dr. pada
              Program Studi Kimia FMIPA Institut Teknologi Bandung dalam bidang
              Kimia Analitik (Pemisahan Kimia). Sejak tahun 1991 hingga sekarang
              sebagai dosen tetap di Program Studi Pendidikan Kimia Fakultas
              Keguruan dan Ilmu Pendidikan (FKIP) USK. Selain mengajar di Prodi
              Pendidikan Kimia FKIP pada mata kuliah Kimia Analitik, Kimia Dasar
              dan Pendidikan, saya juga mengajar di Program Studi Magister
              Pendidikan MIPA PPs Unsyiah sejak tahun 2011 hingga sekarang.
            </p>
            <p>
              Email: <a href="mailto:ibnukhdn@usk.ac.id">ibnukhdn@usk.ac.id</a>
            </p>
          </div>
          <div className="tentang-item">
            <div className="foto">
              <div className="foto-img">
                <img src={bukanaFoto} alt="" className="up" />
              </div>
              <h2>Kana Puspita, S.Pd., M.Si.P</h2>
            </div>
            <p>
              <b>Kana Puspita</b> merupakan dosen muda kimia di Fakultas
              Keguruan dan Ilmu Pendidikan, Universitas Syiah Kuala sejak Maret
              2019. Lahir di Lhokseumawe, Aceh, pada tahun 1993. Ia memperoleh
              gelar sarjana dari Universitas Syiah Kuala (USK) untuk S1 dan
              Institut Teknologi Bandung (ITB) untuk S2. Mengajar di Departemen
              Pendidikan Kimia terutama untuk mata kuliah kimia umum seperti
              stoikiometri, kimia untuk fisika, mineralogi, dan kimia analitik.
              Minat penelitiannya adalah adsorpsi untuk limbah anorganik dan
              organik. Dia telah menerbitkan beberapa artikel di bidang
              minatnya.
            </p>
            <p>
              Email:{" "}
              <a href="mailto:kanapuspita@usk.ac.id">kanapuspita@usk.ac.id</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
