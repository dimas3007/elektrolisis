import iconTentang from "../../assets/img/icon/tentang_kami.png";
import {
  BsFillCalendarWeekFill,
  BsFillPlayFill,
  BsCollectionPlay,
} from "react-icons/bs";
import { AiFillEye, AiFillHeart, AiFillPlayCircle } from "react-icons/ai";
import { BiSolidCloudDownload } from "react-icons/bi";
import HeadingContent from "../../layouts/components/HeadingContent";
import Comment from "../../layouts/components/Comment";

const ExcelDownload = () => {
  const handleDownload = () => {
    const fileName = "/src/assets/doc/elektrolisis.xlsx"; // Ganti 'nama_file.xlsx' dengan nama file Excel Anda

    fetch(fileName)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = "Elektrolisis.xlsx";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };

  return (
    <div className="content-wrapper">
      <HeadingContent
        icon={iconTentang}
        title={
          <>
            <i>Excel</i> Elektrolisis
          </>
        }
      />

      <div className="overview stack">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Nc3ZhSlGU_s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowfullscreen
        ></iframe>
      </div>

      <div className="main-content">
        <div className="content-info">
          <div className="info">
            <div className="icon-img">
              <BsFillCalendarWeekFill />
            </div>
            <p>Minggu, 13 Agustus 2023</p>
          </div>
          <div className="right">
            <div className="info">
              <div className="icon-img green">
                <AiFillEye />
              </div>
              <p>100 Dilihat</p>
            </div>
            <div className="info">
              <div className="icon-img red">
                <AiFillHeart />
              </div>
              <p>100 Suka</p>
            </div>
          </div>
        </div>
        <div className="content-description">
          <h2>
            Apa <i>Excel</i> Elektrolisis Interaktif itu?
          </h2>
          <p>
            Excel adalah perangkat lunak spreadsheet yang dikembangkan oleh
            Microsoft. Perangkat ini dapat dimanfaatkan penggunaanya dalam
            bidang pendidikan terutama untuk pengembangan media pembelajaran
            sehingga diciptakan media pembelajaran interaktif{" "}
            <b>“EXCEL ELEKTROLISIS”</b>. Excel elektrolisis berisi penggambaran
            dari proses sel elektrolisis yaitu larutan elektrolit (zat yang
            dapat menghantarkan listrik dalam bentuk larutan) ditempatkan di
            antara dua elektroda, yaitu sebuah katoda (elektroda negatif) dan
            sebuah anoda (elektroda positif). Ketika arus listrik dialirkan
            melalui larutan elektrolit, reaksi redoks terjadi di permukaan
            elektroda. Gambaran reaksi sel elektrolisis menggunakan excel ini
            akan sangat meningkatkan pemahaman kalian terhadap materi sel
            elektrolisis.
          </p>
        </div>
        <div className="content-part">
          <div className="part-header">
            <h2>Konten Video</h2>
            <BsCollectionPlay />
          </div>
          <p>
            klik pada salah satu konten video dibawah ini untuk melihat video
            materi terkait.
          </p>
          <div className="part-wrapper">
            <div className="part-item">
              <BsFillPlayFill />
              <h4>Materi xxxxx1</h4>
            </div>
            <div className="part-item">
              <BsFillPlayFill />
              <h4>Materi xxxxx2</h4>
            </div>
            <div className="part-item">
              <BsFillPlayFill />
              <h4>Materi xxxxx3</h4>
            </div>
            <div className="part-item">
              <BsFillPlayFill />
              <h4>Materi xxxxx4</h4>
            </div>
            <div className="part-item">
              <BsFillPlayFill />
              <h4>Materi xxxxx5</h4>
            </div>
            <div className="part-item">
              <BsFillPlayFill />
              <h4>Materi xxxxx6</h4>
            </div>
            <div className="part-item">
              <BsFillPlayFill />
              <h4>Materi xxxxx7</h4>
            </div>
            <div className="part-item">
              <BsFillPlayFill />
              <h4>Materi xxxxx8</h4>
            </div>
          </div>
        </div>
        <div className="content-footer">
          <div className="cta">
            <button className="btn-yellow" onClick={handleDownload}>
              <BiSolidCloudDownload />
              Unduh file excel
            </button>
            <button className="btn-primary">
              <AiFillPlayCircle />
              Lihat video tutorial
            </button>
          </div>
        </div>

        <Comment />
      </div>
    </div>
  );
};

export default ExcelDownload;
