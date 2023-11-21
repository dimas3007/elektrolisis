import React from "react";
import HeadingContent from "../../layouts/components/HeadingContent";

const Tentang = () => {
  return (
    <div>
      <HeadingContent title="Tentang" showAuthor={false} />

      <div className="main-content">
        <div className="tentang">
          <div className="tentang-item">
            <h2>Putri Rahmasari</h2>
            <p>
              <b>Putri Rahmasari</b>, lahir di Banda Aceh pada tanggal 11
              November 2002, anak ketiga dari pasangan Zainuddin dan Sarinande.
              Sekolah dasar diselesaikan pada tahun 2014 di SD Negeri 11 Banda
              Aceh. Sekolah Menengah Pertama diselesaikan pada tahun 2017 di MTs
              Negeri Model Banda Aceh. Sekolah Menengah Atas diselesaikan di SMA
              Negeri 3 Banda Aceh pada tahun 2020. Tahun 2020 menempuh bangku
              perkuliahan Jurusan Pendidikan Kimia FKIP Universitas Syiah Kuala
              hingga sekarang. <i>Website</i> ini merupakan salah satu media
              penelitian yang dikembangkan untuk melengkapi tugas-tugas dan
              memenuhi syarat-syarat guna memperoleh gelar Sarjana Pendidikan
              dengan judul skripsi yaitu Pengembangan Media Pembelajaran{" "}
              <i>Excel</i>
              Elektrolisis Interaktif Berbasis <i>Website</i>.
            </p>
          </div>
          <div className="tentang-item">
            <h2>UCODE.ID</h2>
            <p>
              <b>ucode.id</b>, merupakan sebuah tim untuk <i>web development</i>
              , <i>software engineering</i>, dan desain <i>UI/UX</i>. Dengan
              lebih dari empat tahun pengalaman dalam industri ini, kami adalah
              para praktisi berpengalaman yang siap membantu Anda mencapai
              tujuan teknologi Anda.
            </p>
            <p>
              Kami memiliki komitmen yang kuat terhadap profesionalisme dan
              kualitas dalam setiap aspek pekerjaan kami. Kolaborasi tim yang
              terampil dan berpengalaman adalah landasan dari pendekatan kami.
              Kami memastikan bahwa setiap proyek yang kami kerjakan adalah
              hasil dari kolaborasi yang cermat, yang menjamin bahwa setiap
              detail dihadirkan dengan presisi dan kecakapan yang tinggi.
            </p>
            <p>
              Selain itu, kami juga menawarkan layanan mentoring bagi individu
              yang ingin mengasah keterampilan mereka dalam bidang ini. Kami
              percaya bahwa berbagi pengetahuan adalah bagian integral dari
              pertumbuhan industri.
            </p>
            <p>
              Portofolio kami merupakan bukti konkrit dari kemampuan kami dalam
              mengeksekusi proyek profesional. Kami telah berhasil menyelesaikan
              beragam proyek, yang mencerminkan kompetensi dan dedikasi kami
              dalam memberikan solusi yang sesuai dengan kebutuhan klien.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
