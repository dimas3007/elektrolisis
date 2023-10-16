import React, { useRef, useEffect, useState } from "react";
import iconAngket from "../assets/img/icon/angket.png";
import iconExcel from "../assets/img/icon/excel_electro.png";
import iconLatihan from "../assets/img/icon/latihan.png";
import iconMateri from "../assets/img/icon/materi.png";
import iconPetaKonsep from "../assets/img/icon/peta_konsep.png";
import iconPeriodik from "../assets/img/icon/tabel_periodik.png";
import iconTentang from "../assets/img/icon/tentang_kami.png";
import iconTutorial from "../assets/img/icon/tutorial.png";
import logo from "../assets/img/logo/logo.png";
import logoWhite from "../assets/img/logo/logo_putih.png";

// hero img
import tool from "../assets/img/hero/tool.png";
import people1 from "../assets/img/hero/people1.png";
import people2 from "../assets/img/hero/people2.png";
import people3 from "../assets/img/hero/people3.png";
import lamp from "../assets/img/hero/lamp.png";
import circle1 from "../assets/img/hero/circle1.png";
import circle2 from "../assets/img/hero/circle2.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    // Calculate the relative mouse position inside the container
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    // Set the mouse position state
    setMousePosition({ x, y });
  };

  useEffect(() => {
    const container = containerRef.current;

    // Add the event listener for mousemove
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Remove the event listener on component unmount
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <header className="header-top">
        <div className="brand">
          <img src={logo} alt="" />
        </div>
        <div className="action">
          <button className="btn-secondary">Login</button>
          <button className="btn-primary">Register Now</button>
        </div>
      </header>
      <div className="hero" ref={containerRef}>
        <h1 className="label yellow">APA SIH</h1>
        <h1 className="label red">ELEKTROLISIS</h1>
        <h1 className="label oranye">ITU?</h1>
        <p>
          Di sini, kami menyajikan konten yang kaya dan mendalam tentang
          fenomena elektrolisis yang menarik dan penting dalam dunia ilmu kimia.
          <br />
          Jelajahi halaman ini dengan lebih dalam dan tingkatkan pemahaman Anda
          tentang kimia elektrolisis.
        </p>
        <div className="cta">
          <a href="#content-wrap">
            <button className="btn-primary">Mulai Telusuri</button>
          </a>
          <button className="btn-white">Gabung</button>
        </div>

        {/* Asset IMG */}
        <img
          src={people1}
          alt="hero-img"
          className="people one"
          style={{
            transform: `translate(-${mousePosition.x * 20}px, -${
              mousePosition.y * 20
            }px)`,
          }}
        />
        <img
          src={people2}
          alt="hero-img"
          className="people two"
          style={{
            transform: `translate(-${mousePosition.x * 40}px, -${
              mousePosition.y * 40
            }px)`,
          }}
        />
        <img
          src={people3}
          alt="hero-img"
          className="people three"
          style={{
            transform: `translate(-${mousePosition.x * 50}px, -${
              mousePosition.y * 50
            }px)`,
          }}
        />

        <img src={tool} alt="hero-img" className="tool" />
        <img
          src={lamp}
          alt="hero-img"
          className="lamp"
          style={{
            transform: `translate(-${mousePosition.x * 40}px, -${
              mousePosition.y * 40
            }px)`,
          }}
        />
        <img
          src={circle1}
          alt="hero-img"
          className="circle1"
          style={{
            transform: `translate(-${mousePosition.x * 30}px, -${
              mousePosition.y * 30
            }px)`,
          }}
        />
        <img
          src={circle1}
          alt="hero-img"
          className="circle2"
          style={{
            transform: `translate(-${mousePosition.x * 20}px, -${
              mousePosition.y * 20
            }px)`,
          }}
        />

        <img
          src={circle2}
          alt="hero-img"
          className="circle c1"
          style={{
            transform: `translate(-${mousePosition.x * 20}px, -${
              mousePosition.y * 20
            }px)`,
          }}
        />
        <img
          src={circle2}
          alt="hero-img"
          className="circle c2"
          style={{
            transform: `translate(-${mousePosition.x * 10}px, -${
              mousePosition.y * 10
            }px)`,
          }}
        />
        <img
          src={circle2}
          alt="hero-img"
          className="circle c3"
          style={{
            transform: `translate(-${mousePosition.x * 30}px, -${
              mousePosition.y * 30
            }px)`,
          }}
        />
        <img
          src={circle2}
          alt="hero-img"
          className="circle c4"
          style={{
            transform: `translate(-${mousePosition.x * 40}px, -${
              mousePosition.y * 40
            }px)`,
          }}
        />
        <img
          src={circle2}
          alt="hero-img"
          className="circle c5"
          style={{
            transform: `translate(-${mousePosition.x * 50}px, -${
              mousePosition.y * 50
            }px)`,
          }}
        />
        <img
          src={circle2}
          alt="hero-img"
          className="circle c6"
          style={{
            transform: `translate(-${mousePosition.x * 30}px, -${
              mousePosition.y * 30
            }px)`,
          }}
        />
        <img
          src={circle2}
          alt="hero-img"
          className="circle c7"
          style={{
            transform: `translate(-${mousePosition.x * 20}px, -${
              mousePosition.y * 20
            }px)`,
          }}
        />
      </div>
      <div className="content-wrap" id="content-wrap">
        <div className="item">
          <div className="icon">
            <img src={iconPetaKonsep} alt="" />
          </div>
          <div className="content">
            <div className="header">
              <h1>01</h1>
            </div>
            <h1 className="title">
              <i>Mind Mapping</i>
            </h1>
            <p>
              Halaman ini berisi <i>Mind Mapping</i> dari materi elektrolisis
              yang akan dipelajari!
            </p>
          </div>
          <Link to={"/peta-konsep"}>
            <button className="btn-primary">Lihat selengkapnya...</button>
          </Link>
        </div>
        <div className="item">
          <div className="icon">
            <img src={iconPeriodik} alt="" />
          </div>
          <div className="content">
            <div className="header">
              <h1>02</h1>
            </div>
            <h1 className="title">Tabel Periodik</h1>
            <p>
              Halaman ini berisi peta konsep dari tabel periodik unsur kimia!
            </p>
          </div>
          <Link to={"/tabel-periodik"}>
            <button className="btn-primary">Lihat selengkapnya...</button>
          </Link>
        </div>
        <div className="item">
          <div className="icon">
            <img src={iconMateri} alt="" />
          </div>
          <div className="content">
            <div className="header">
              <h1>03</h1>
            </div>
            <h1 className="title">Materi Elektrolisis</h1>
            <p>
              Halaman ini berisi bahan dari materi elektrolisis yang akan
              dipelajari!
            </p>
          </div>
          <Link to={"/materi"}>
            <button className="btn-primary">Lihat selengkapnya...</button>
          </Link>
        </div>
        <div className="item">
          <div className="icon">
            <img src={iconTutorial} alt="" />
          </div>
          <div className="content">
            <div className="header">
              <h1>04</h1>
            </div>
            <h1 className="title">
              Video Tutorial <i>Excel</i> Elektrolisis
            </h1>
            <p>
              Halaman ini berisi video tutorial penggunaan <i>excel</i>{" "}
              elektrolisis.
            </p>
          </div>
          <Link to={"/video-tutorial"}>
            <button className="btn-primary">Lihat selengkapnya...</button>
          </Link>
        </div>

        <div className="item">
          <div className="icon">
            <img src={iconExcel} alt="" />
          </div>
          <div className="content">
            <div className="header">
              <h1>05</h1>
            </div>
            <h1 className="title">
              Video Materi <i>Excel</i> Elektrolisis
            </h1>
            <p>
              Halaman ini berisi video materi <i>excel</i> elektrolisis.{" "}
              <i>Excel</i>
              ini merupakan simulasi digital dari percobaan elektrolisis.
            </p>
          </div>
          <Link to={"/excel-download"}>
            <button className="btn-primary">Lihat selengkapnya...</button>
          </Link>
        </div>
        <div className="item">
          <div className="icon">
            <img src={iconLatihan} alt="" />
          </div>
          <div className="content">
            <div className="header">
              <h1>06</h1>
            </div>
            <h1 className="title">Latihan</h1>
            <p>
              Halaman ini berisi latihan dan <i>fun game</i> dari materi
              elektrolisis yang sudah dipelajari!
            </p>
          </div>
          <Link to={"/latihan"}>
            <button className="btn-primary">Lihat selengkapnya...</button>
          </Link>
        </div>
        <div className="item">
          <div className="icon">
            <img src={iconAngket} alt="" />
          </div>
          <div className="content">
            <div className="header">
              <h1>07</h1>
            </div>
            <h1 className="title">Angket Evaluasi</h1>
            <p>
              Halaman ini berisi angket evaluasi untuk menilai efektivitas dan
              kepuasan pengguna terhadap <i>website</i> ini
            </p>
          </div>
          <Link to={"/angket"}>
            <button className="btn-primary">Lihat selengkapnya...</button>
          </Link>
        </div>
        <div className="item">
          <div className="icon">
            <img src={iconTentang} alt="" />
          </div>
          <div className="content">
            <div className="header">
              <h1>08</h1>
            </div>
            <h1 className="title">Tentang Kami</h1>
            <p>
              Halaman ini berisi informasi mengenai tim yang ikut serta dalam
              pembuatan projek ini
            </p>
          </div>
          <Link to={"/tentang"}>
            <button className="btn-primary">Lihat selengkapnya...</button>
          </Link>
        </div>
      </div>
      <footer>
        <img src={logoWhite} alt="" />
        <p className="copyright">Copyright © 2023 ucode.id</p>
        <ul className="sitemap">
          <li>Privacy Policy</li>
          <li>Copyright</li>
          <li>About Us</li>
        </ul>
      </footer>
    </>
  );
};

export default LandingPage;
