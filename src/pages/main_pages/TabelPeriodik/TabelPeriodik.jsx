import HeadingContent from "../../../layouts/components/HeadingContent";
import React, { useEffect, useState } from "react";
import tablePeriodikData from "../../../data/table-periodik.json";
import "../../../data/table-periodik-img.js";
import Comment from "../../../layouts/components/Comment";
const DELAY = 5;
const STP = 273;

const TabelPeriodik = () => {
  let elementList = document.querySelectorAll(".element");
  const [dataPeriodik, setDataPeriodik] = useState(
    tablePeriodikData.tablePeriodikData
  );

  useEffect(() => {
    let modalBox = document.querySelector(".modal");
    let modalProperties = document.querySelector(".modal__content__properties");
    let modalClose = document.querySelector(".modal__close");
    let isOpen = false;
    let modalContent = document.querySelector(".modal__content");

    let actinoidBox = document.querySelector(`[data-element-name='Actinoids']`);
    let lanthanoidBox = document.querySelector(
      `[data-element-name='Lanthanoids']`
    );
    let legendList = document.querySelectorAll(".legend-box");
    let periodList = document.querySelectorAll(".period__item");
    let groupList = document.querySelectorAll(".group__item");
    // let temperatureSlider = document.querySelector(
    //   ".temperature__inputs__slider"
    // );
    // let resetTemperatureButton = document.querySelector(".reset__temperature");
    let elementClicked;
    elementList = document.querySelectorAll(".element");

    const handleBoxMouseEnter = (event) => {
      let dataActinoids = event.target.getAttribute("data-element-type");
      let dataToSearch = "type";
      highlightElement(dataActinoids, dataToSearch);
    };

    const equalizeElement = () => {
      let index = 0;
      Array.from(elementList).forEach((elementItem) => {
        removeClass("--is-active", elementItem, index);
        index++;
      });
    };

    // const setNewTemperature = (currentValue) => {
    //   let kelvinOutput = document.querySelector(".temperature__inputs__result"),
    //     celsiusOutput = document.querySelector(".celsius"),
    //     farenheitOutput = document.querySelector(".farenheit");

    //   kelvinOutput.innerHTML = `${currentValue} K`;
    //   celsiusOutput.innerHTML = `${currentValue - 273}ºC`;
    //   farenheitOutput.innerHTML = `${
    //     Math.round(((currentValue * 9) / 5 - 460) * 100) / 100
    //   }ºF`;
    // };

    actinoidBox.addEventListener("mouseenter", handleBoxMouseEnter);
    actinoidBox.addEventListener("mouseleave", equalizeElement);

    lanthanoidBox.addEventListener("mouseenter", handleBoxMouseEnter);
    lanthanoidBox.addEventListener("mouseleave", equalizeElement);

    // temperatureSlider.addEventListener("input", (self) => {
    //   console.log(Number(self.target.value));
    //   let currentValue = Number(self.target.value),
    //     dataToSearch = ["melting-point", "boiling-point"];

    //   if (
    //     currentValue !== STP &&
    //     !resetTemperatureButton.classList.contains("--is-visible")
    //   ) {
    //     addClass("--is-visible", resetTemperatureButton, 0);
    //   } else if (currentValue === STP) {
    //     removeClass("--is-visible", resetTemperatureButton, 0);
    //   }

    //   setNewTemperature(currentValue);
    //   highlightElement(currentValue, dataToSearch);
    // });

    // resetTemperatureButton.addEventListener("click", () => {
    //   let dataToSearch = ["melting-point", "boiling-point"];

    //   temperatureSlider.value = STP;

    //   setNewTemperature(STP);
    //   highlightElement(STP, dataToSearch);
    //   removeClass("--is-visible", resetTemperatureButton, 0);
    // });

    Array.from(elementList).forEach((elementItem) => {
      elementItem.addEventListener("click", () => {
        if (isLanthanoidOrActinoid(elementItem)) {
          elementClicked = elementItem;
          const elementClickedName =
            elementClicked.getAttribute("data-element-id");

          modalAnimation(elementItem);
          createModalContent(elementClickedName);
        }
      });
    });

    Array.from(legendList).forEach((legendItem) => {
      legendItem.addEventListener("mouseenter", (self) => {
        let legendData, dataToSearch;

        if (legendItem.getAttribute("data-element-type")) {
          legendData = self.target.getAttribute("data-element-type");
          dataToSearch = "type";
        } else {
          legendData = self.target.getAttribute("data-element-state");
          dataToSearch = "state";
        }

        highlightElement(legendData, dataToSearch);
      });

      legendItem.addEventListener("mouseleave", () => {
        equalizeElement();
      });
    });

    Array.from(periodList).forEach((periodItem) => {
      periodItem.addEventListener("mouseenter", (self) => {
        let periodNumber = Number(self.target.firstChild.innerHTML),
          dataToSearch = "period";

        highlightElement(periodNumber, dataToSearch);
      });

      periodItem.addEventListener("mouseleave", () => {
        equalizeElement();
      });
    });

    Array.from(groupList).forEach((groupItem) => {
      groupItem.addEventListener("mouseenter", (self) => {
        let groupNumber = Number(self.target.firstChild.innerHTML),
          dataToSearch = "group";

        highlightElement(groupNumber, dataToSearch);
      });

      groupItem.addEventListener("mouseleave", () => {
        equalizeElement();
      });
    });

    const handleScroll = () => {
      const scrollY = window.scrollY > 0 ? true : false;
      const scrollX = window.scrollX > 0 ? true : false;
      const period = document.querySelector(".period__list");
      const group = document.querySelector(".group__list");

      if (scrollX) {
        addClass("--is-fixed", period, 0);
        period.style.left = `${window.scrollX}px`;
      } else {
        removeClass("--is-fixed", period, 0);
        period.style.left = "0";
      }

      if (scrollY) {
        addClass("--is-fixed", group, 0);
      } else {
        removeClass("--is-fixed", group, 0);
      }
    };

    modalClose.addEventListener("click", closeModal);
    modalBox.addEventListener("click", closeModal);
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 27 && isOpen) {
        closeModal(event);
      }
    });

    function modalAnimation(self) {
      let selfProperties = self.getBoundingClientRect();
      let modalProperties = modalContent.getBoundingClientRect();
      let tooltip = self.querySelector(".tooltip");
      let translateX;
      let translateY;
      let scale;
      let positionX = window.innerWidth / 2;
      let positionY = window.innerHeight / 2;

      addClass("--is-hidden", tooltip, 0);
      addClass("--is-triggered", self, 0);
      addClass("modal__background", modalBox, 0);

      scale = modalProperties.width / 100;
      translateX = Math.round(
        positionX - selfProperties.left - selfProperties.width / 2
      );
      translateY = Math.round(
        positionY - selfProperties.top - selfProperties.height / 2
      );
      self.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

      window.requestAnimationFrame(() => {
        openModal();
      });
    }

    function closeModal(event) {
      event.preventDefault();
      event.stopImmediatePropagation();

      let target = event.target,
        tooltip = elementClicked.querySelector(".tooltip");

      if (
        (isOpen && target.classList.contains("modal__background")) ||
        target.classList.contains("modal__close") ||
        event.keyCode === 27
      ) {
        removeClass("--is-visible", modalBox, 0);
        removeClass("--is-visible", modalContent, 0);

        elementClicked.removeAttribute("style");

        removeClass("--is-triggered", elementClicked, 0);
        removeClass("modal__background", modalBox, 0);
        removeClass("--is-hidden", tooltip, 0);

        // removeModalContent();

        elementClicked = "";
        isOpen = false;
      }
    }

    async function createModalContent(index) {
      let unsurData = dataPeriodik[index];

      // unsur description
      document.querySelector('[unsur="unsur-name"]').textContent =
        unsurData.elementName;
      document.querySelector('[unsur="unsur-symbol"]').textContent =
        unsurData.elementAbbr;
      document.querySelector('[unsur="unsur-description"]').textContent =
        unsurData.others.ringkasan;
      document.querySelector(
        '[unsur="unsur-discovered-by"]'
      ).textContent = `${unsurData.others.penemu} (${unsurData.others.tahun_ditemukan})`;
      document.querySelector('[unsur="unsur-fasa"]').textContent =
        unsurData.others.fasa;

      // unsur info
      // part 1
      document.querySelector('[unsur="unsur-golongan"]').textContent = "-";
      document.querySelector('[unsur="unsur-periode"]').textContent =
        unsurData.others.periode;
      document.querySelector('[unsur="unsur-kategori"]').textContent =
        unsurData.others.kategori;
      document.querySelector('[unsur="unsur-tampilan"]').textContent =
        unsurData.others.tampilan;
      document.querySelector('[unsur="unsur-no-atom"]').textContent =
        unsurData.others.nomor_atom;
      document.querySelector('[unsur="unsur-kulit"]').textContent =
        unsurData.others.kulit[0];
      document.querySelector('[unsur="unsur-masa-atom"]').textContent =
        unsurData.others.massa_atom;

      // part 2
      document.querySelector('[unsur="unsur-oksidasi"]').textContent =
        unsurData.others.bilangan_oksidasi;
      document.querySelector('[unsur="unsur-masa-jenis"]').textContent =
        objectString(unsurData.others.massa_jenis) || "-";
      document.querySelector('[unsur="unsur-affinitas-elektron"]').textContent =
        unsurData.others.affinitas_elektron;
      document.querySelector(
        '[unsur="unsur-konfigurasi-elektron"]'
      ).textContent = unsurData.others.konfigurasi_elektron;
      document.querySelector(
        '[unsur="unsur-konfigurasi-semantik"]'
      ).textContent = unsurData.others.elektron_konfigurasi_semantik;
      document.querySelector(
        '[unsur="unsur-keelektronegatifan-pauling"]'
      ).textContent = unsurData.others.keelektronegatifan_pauling;

      // part 3
      document.querySelector('[unsur="unsur-daya-konduksi"]').textContent =
        objectString(unsurData.others.daya_konduksi) || "-";
      document.querySelector('[unsur="unsur-energi-ionisasi"]').textContent =
        unsurData.others.energi_ionisasi[0];
      document.querySelector('[unsur="unsur-titik-didih"]').textContent =
        unsurData.others.titik_didih;
      document.querySelector('[unsur="unsur-titik-leleh"]').textContent =
        unsurData.others.titik_leleh;

      // kelimpahan
      document.querySelector('[unsur="unsur-semesta"]').textContent =
        unsurData.others.kelimpahan.semesta;
      document.querySelector('[unsur="unsur-tenaga-surya"]').textContent =
        unsurData.others.kelimpahan.tenaga_surya;
      document.querySelector('[unsur="unsur-laut"]').textContent =
        unsurData.others.kelimpahan.laut;
      document.querySelector('[unsur="unsur-manusia"]').textContent =
        unsurData.others.kelimpahan.manusia;

      // Panas
      document.querySelector('[unsur="unsur-spesifik"]').textContent =
        unsurData.others.panas.spesifik;
      document.querySelector('[unsur="unsur-penguapan"]').textContent =
        unsurData.others.panas.penguapan;

      if (elementImages[unsurData.elementAbbr]) {
        let src =
          "data:image/jpg;base64, " + elementImages[unsurData.elementAbbr];

        document.querySelector('[unsur="unsur-img"]').src = src;
      }
    }

    function loadImage(img, src) {
      return new Promise((res, rej) => {
        img.onload = res;
        img.src = src;
      });
    }

    function removeModalContent() {
      modalProperties.innerHTML = "";
    }

    const objectString = (obj) => {
      let result = "";
      const entries = Object.entries(obj);
      entries.forEach(([key, value], index) => {
        result += `${key} : ${value}`;
        if (index < entries.length - 1) {
          result += " | ";
        }
      });

      return result;
    };

    function openModal() {
      if (!isOpen) {
        let content = modalBox.querySelector(".modal__content");

        addClass("--is-visible", modalBox, 0);
        addClass("--is-visible", content, 75);

        content.addEventListener("transitionend", hideContent(content), false);

        isOpen = true;
      }
    }

    function hideContent(content) {
      content.removeEventListener("transitionend", hideContent, false);
    }

    window.addEventListener("scroll", handleScroll);
  }, []);
  // end modal

  function addClass(className, element, index) {
    setTimeout(() => {
      element.classList.add(className);
    }, index * DELAY);
  }

  function removeClass(className, element, index) {
    setTimeout(() => {
      element.classList.remove(className);
    }, index * DELAY);
  }

  const highlightElement = (dataElement, dataToSearch) => {
    let index = 0;

    Array.from(elementList).forEach((elementItem) => {
      let dataFromElement = elementItem.getAttribute(
        `data-element-${dataToSearch}`
      );

      if (dataToSearch === "group" || dataToSearch === "period") {
        dataFromElement = Number(dataFromElement);
      }

      if (dataToSearch.length === 2) {
        let meltingPoint = Number(
          elementItem.getAttribute(`data-element-${dataToSearch[0]}`)
        );
        let boilingPoint = Number(
          elementItem.getAttribute(`data-element-${dataToSearch[1]}`)
        );

        if (!isNaN(meltingPoint) && !isNaN(boilingPoint)) {
          if (dataElement < meltingPoint) {
            elementItem.setAttribute("data-element-state", "solid");
          } else if (dataElement < boilingPoint) {
            if (isLanthanoidOrActinoid(elementItem)) {
              elementItem.setAttribute("data-element-state", "liquid");
            }
          } else {
            elementItem.setAttribute("data-element-state", "gas");
          }
        } else if (isNaN(boilingPoint)) {
          let elementState = "unknown";
          if (dataElement < meltingPoint) {
            elementState = "solid";
          }
          elementItem.setAttribute("data-element-state", elementState);
        }
      }

      if (dataElement === dataFromElement) {
        addClass("--is-active", elementItem, index);
      }

      index++;
    });
  };

  const isLanthanoidOrActinoid = (elementItem) => {
    if (
      elementItem.getAttribute("data-element-name") !== "Lanthanoids" &&
      elementItem.getAttribute("data-element-name") !== "Actinoids"
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <HeadingContent title="Tabel Periodik" showAuthor={false} />

      <main>
        <section className="group-period">
          <ul className="group__list">
            <li className="group__item flex-row-wrap group-1">
              <span>IA</span>
            </li>
            <li className="group__item flex-row-wrap group-2">
              <span>IIA</span>
            </li>
            <li className="group__item flex-row-wrap group-3">
              <span>IIIB</span>
            </li>
            <li className="group__item flex-row-wrap group-4">
              <span>IVB</span>
            </li>
            <li className="group__item flex-row-wrap group-5">
              <span>VB</span>
            </li>
            <li className="group__item flex-row-wrap group-6">
              <span>VIB</span>
            </li>
            <li className="group__item flex-row-wrap group-7">
              <span>VIIB</span>
            </li>
            <li className="group__item flex-row-wrap group-8">
              <span>VIIIB</span>
            </li>
            <li className="group__item flex-row-wrap group-9">
              <span>VIIIB</span>
            </li>
            <li className="group__item flex-row-wrap group-10">
              <span>VIIIB</span>
            </li>
            <li className="group__item flex-row-wrap group-11">
              <span>IB</span>
            </li>
            <li className="group__item flex-row-wrap group-12">
              <span>IIB</span>
            </li>
            <li className="group__item flex-row-wrap group-13">
              <span>IIIA</span>
            </li>
            <li className="group__item flex-row-wrap group-14">
              <span>IVA</span>
            </li>
            <li className="group__item flex-row-wrap group-15">
              <span>VA</span>
              <span>Pnictogens</span>
            </li>
            <li className="group__item flex-row-wrap group-16">
              <span>VIA</span>
              <span>Chalcogens</span>
            </li>
            <li className="group__item flex-row-wrap group-17">
              <span>VIIA</span>
              <span>Halogens</span>
            </li>
            <li className="group__item flex-row-wrap group-18">
              <span>VIIIA</span>
            </li>
          </ul>
          <ul className="period__list">
            <li className="period__item flex-row-wrap period-1">
              <span>1</span>
            </li>
            <li className="period__item flex-row-wrap period-2">
              <span>2</span>
            </li>
            <li className="period__item flex-row-wrap period-3">
              <span>3</span>
            </li>
            <li className="period__item flex-row-wrap period-4">
              <span>4</span>
            </li>
            <li className="period__item flex-row-wrap period-5">
              <span>5</span>
            </li>
            <li className="period__item flex-row-wrap period-6">
              <span>6</span>
            </li>
            <li className="period__item flex-row-wrap period-7">
              <span>7</span>
            </li>
          </ul>
        </section>
        <section className="dynamic-periodic-table">
          <div className="key flex-row-wrap">
            <abbr className="key__abbr">Symbol</abbr>
            <span className="key__name">Name</span>
            <span className="key__atomic-number">Atomic number</span>
            <span className="key__atomic-mass">Atomic mass</span>
          </div>
          <section className="legend flex-row-nowrap">
            <article className="legend__element-type flex-row-wrap">
              <div className="legend__element-type__metals flex-row-nowrap">
                <div
                  className="legend__element-type__metals__alkali-metal legend-box flex-column-wrap"
                  data-element-type="alkali-metal"
                >
                  <span>Alkali metals</span>
                </div>
                <div
                  className="legend__element-type__metals__alkali-earth-metal legend-box flex-column-wrap"
                  data-element-type="alkali-earth-metal"
                >
                  <span>Alkali earth metals</span>
                </div>
                <div className="legend__element-type__metals__lanthanoid-actinoid flex-row-wrap">
                  <div
                    className="lanthanoid flex-row-wrap legend-box"
                    data-element-type="Lanthanoid"
                  >
                    <span>Lanthanoids</span>
                  </div>
                  <div
                    className="actinoid flex-row-wrap legend-box"
                    data-element-type="Actinoid"
                  >
                    <span>Actinoids</span>
                  </div>
                </div>
                <div
                  className="legend__element-type__metals__transition-metal legend-box flex-column-wrap"
                  data-element-type="transition-metal"
                >
                  <span>Transition metals</span>
                </div>
                <div
                  className="legend__element-type__metals__post-transition-metal legend-box flex-column-wrap"
                  data-element-type="post-transition-metal"
                >
                  <span>Post-transition metals</span>
                </div>
              </div>
              <div
                className="legend__element-type__metalloid legend-box"
                data-element-type="metalloid"
              >
                <span>Metalloids</span>
              </div>
              <div className="legend__element-type__nonmetals flex-row-wrap">
                <div
                  className="legend__element-type__nonmetals__other-nonmetal legend-box"
                  data-element-type="other-nonmetal"
                >
                  <span>
                    Other <br />
                    nonmetals
                  </span>
                </div>
                <div
                  className="legend__element-type__nonmetals__noble-gas legend-box"
                  data-element-type="noble-gas"
                >
                  <span>Noble gases</span>
                </div>
              </div>
              <div
                className="legend__element-type__unknown legend-box flex-row-wrap"
                data-element-type="unknown"
              >
                <span>Unknown</span>
              </div>
            </article>
            <article className="legend__element-state flex-row-wrap">
              <div
                className="legend__element-state__gas legend-box flex-row-wrap"
                data-element-state="gas"
              >
                <span>Gas</span>
              </div>
              <div
                className="legend__element-state__liquid legend-box flex-row-wrap"
                data-element-state="liquid"
              >
                <span>Liquid</span>
              </div>
              <div
                className="legend__element-state__solid legend-box flex-row-wrap"
                data-element-state="solid"
              >
                <span>Solid</span>
              </div>
              <div
                className="legend__element-state__unknown legend-box flex-row-wrap"
                data-element-state="unknown"
              >
                <span>Un-known</span>
              </div>
            </article>
          </section>
          {/* <section className="temperature flex-row-nowrap">
            <div className="temperature__inputs flex-row-nowrap">
              <input
                className="temperature__inputs__slider"
                name="temperature__inputs__slider"
                type="range"
                min="0"
                max="7000"
                value="273"
              />
              <p className="temperature__inputs__result flex-row-wrap">273 K</p>
            </div>
            <div className="temperature__unit-conversion flex-row-wrap">
              <p className="celsius">0ºC</p>
              <p className="farenheit">31.4ºF</p>
            </div>
            <button className="reset__temperature flex-row-wrap">
              <span>Back to STP</span>
            </button>
          </section> */}

          {dataPeriodik.map((unsur, key) => (
            <div
              className={unsur.className}
              data-element-type={unsur.elementType}
              data-element-state={unsur.elementState}
              data-element-melting-point={unsur.elementMeltingPoint}
              data-element-boiling-point={unsur.elementBoilingPoint}
              data-element-period={unsur.elementPeriod}
              data-element-group={unsur.elementGroup}
              data-element-name={unsur.elementName}
              data-element-id={key}
              key={key}
            >
              <abbr className="element__abbr">{unsur.elementAbbr}</abbr>
              <span className="element__name">{unsur.elementName}</span>
              <span className="element__atomic-number">
                {unsur.elementAtomicNumber}
              </span>
              <span className="element__atomic-mass">
                {unsur.elementAtomicMass}
              </span>
              <p className="tooltip right-tooltip">{unsur.elementName}</p>
            </div>
          ))}
        </section>

        <section className="modal flex-row-wrap">
          <div className="modal__dialog" open>
            <article className="modal__content">
              <div className="modal__content__properties">
                <div className="modal-unsur-top">
                  <div className="modal-unsur-desc">
                    <div className="modal-unsur-label">
                      <h1 unsur="unsur-name">Hydrogen</h1>
                      <h5 unsur="unsur-symbol">H</h5>
                    </div>
                    <p unsur="unsur-description">
                      Hidrogen adalah unsur kimia dengan simbol kimia H dan
                      nomor atom 1. Dengan berat atom 1,00794 u, hidrogen adalah
                      unsur paling ringan dalam tabel periodik. Bentuk
                      monatomiknya (H) adalah zat kimia yang paling melimpah di
                      alam semesta, membentuk sekitar 75% dari semua massa
                      barionik.
                    </p>
                    <div className="modal-unsur-footer">
                      <h3 unsur="unsur-discovered-by">
                        Henry Cavendish (1766)
                      </h3>
                      <h5 unsur="unsur-fasa">Gas</h5>
                    </div>
                  </div>
                  <div className="modal-unsur-img">
                    <img src="#" alt="image" unsur="unsur-img" />
                  </div>
                </div>
                <div className="modal-unsur-info">
                  <div className="modal-unsur-info-label">
                    <h1>Info</h1>
                  </div>
                  <div className="modal-unsur-info-wrap">
                    <ul className="modal-unsur-info-item">
                      <li>
                        Golongan : <span unsur="unsur-golongan"></span>
                      </li>
                      <li>
                        Periode : <span unsur="unsur-periode"></span>
                      </li>
                      <li>
                        Kategori : <span unsur="unsur-kategori"></span>
                      </li>
                      <li>
                        Tampilan : <span unsur="unsur-tampilan"></span>
                      </li>
                      <li>
                        Nomor Atom : <span unsur="unsur-no-atom"></span>
                      </li>
                      <li>
                        Kulit : <span unsur="unsur-kulit"></span>
                      </li>
                      <li>
                        Masa Atom : <span unsur="unsur-masa-atom"></span>
                      </li>
                    </ul>
                    <ul className="modal-unsur-info-item">
                      <li>
                        Bilangan Oksidasi : <span unsur="unsur-oksidasi"></span>
                      </li>
                      <li>
                        Masa Jenis : <span unsur="unsur-masa-jenis"></span>
                      </li>
                      <li>
                        Affinitas Elektron :{" "}
                        <span unsur="unsur-affinitas-elektron"></span>
                      </li>
                      <li>
                        Konfigurasi Elektron :{" "}
                        <span unsur="unsur-konfigurasi-elektron"></span>
                      </li>
                      <li>
                        Elektron Konfigurasi Semantik :{" "}
                        <span unsur="unsur-konfigurasi-semantik"></span>
                      </li>
                      <li>
                        Keelektronegatifan Pauling :{" "}
                        <span unsur="unsur-keelektronegatifan-pauling"></span>
                      </li>
                    </ul>
                    <ul className="modal-unsur-info-item">
                      <li>
                        Daya Konduksi :{" "}
                        <span unsur="unsur-daya-konduksi"></span>
                      </li>
                      <li>
                        Energi Ionisasi :{" "}
                        <span unsur="unsur-energi-ionisasi"></span>
                      </li>
                      <li>
                        Titik Didih : <span unsur="unsur-titik-didih"></span>
                      </li>
                      <li>
                        Titik Leleh : <span unsur="unsur-titik-leleh"></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="modal-unsur-other">
                  <div className="modal-unsur-kelimpahan">
                    <div className="modal-unsur-info-label">
                      <h1>Kelimpahan</h1>
                    </div>
                    <ul className="modal-unsur-info-item">
                      <li>
                        Semesta : <span unsur="unsur-semesta"></span>
                      </li>
                      <li>
                        Tenaga Surya : <span unsur="unsur-tenaga-surya"></span>
                      </li>
                      <li>
                        Laut : <span unsur="unsur-laut"></span>
                      </li>
                      <li>
                        Manusia : <span unsur="unsur-manusia"></span>
                      </li>
                    </ul>
                  </div>
                  <div className="modal-unsur-panas">
                    <div className="modal-unsur-info-label">
                      <h1>Panas</h1>
                    </div>
                    <ul className="modal-unsur-info-item">
                      <li>
                        Spesifik : <span unsur="unsur-spesifik"></span>
                      </li>
                      <li>
                        Penguapan : <span unsur="unsur-penguapan"></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="atom">
                <div className="atom__core"></div>
              </div>
            </article>
            <a className="modal__close">
              <svg viewBox="0 0 24 24">
                <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z" />
                <path d="M0 0h24v24h-24z" fill="none" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Comment page="tabel-periodik" />
    </div>
  );
};

export default TabelPeriodik;
