import HeadingContent from "../../../layouts/components/HeadingContent";

const TabelPeriodik = () => {
  return (
    <div>
      <HeadingContent title="Tabel Periodik" />
      <div className="periodic-table">
        <section className="group-period">
          <ul className="group__list">
            <li className="group__item flex-row-wrap group-1">
              <span>1</span>
            </li>
            <li className="group__item flex-row-wrap group-2">
              <span>2</span>
            </li>
            <li className="group__item flex-row-wrap group-3">
              <span>3</span>
            </li>
            <li className="group__item flex-row-wrap group-4">
              <span>4</span>
            </li>
            <li className="group__item flex-row-wrap group-5">
              <span>5</span>
            </li>
            <li className="group__item flex-row-wrap group-6">
              <span>6</span>
            </li>
            <li className="group__item flex-row-wrap group-7">
              <span>7</span>
            </li>
            <li className="group__item flex-row-wrap group-8">
              <span>8</span>
            </li>
            <li className="group__item flex-row-wrap group-9">
              <span>9</span>
            </li>
            <li className="group__item flex-row-wrap group-10">
              <span>10</span>
            </li>
            <li className="group__item flex-row-wrap group-11">
              <span>11</span>
            </li>
            <li className="group__item flex-row-wrap group-12">
              <span>12</span>
            </li>
            <li className="group__item flex-row-wrap group-13">
              <span>13</span>
            </li>
            <li className="group__item flex-row-wrap group-14">
              <span>14</span>
            </li>
            <li className="group__item flex-row-wrap group-15">
              <span>15</span>
              <span>Pnictogens</span>
            </li>
            <li className="group__item flex-row-wrap group-16">
              <span>16</span>
              <span>Chalcogens</span>
            </li>
            <li className="group__item flex-row-wrap group-17">
              <span>17</span>
              <span>Halogens</span>
            </li>
            <li className="group__item flex-row-wrap group-18">
              <span>18</span>
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
                    Other <br /> nonmetals
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
          <section className="temperature flex-row-nowrap">
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
          </section>
          <div
            className="element flex-row-wrap"
            data-element-type="other-nonmetal"
            data-element-state="gas"
            data-element-melting-point="13.99"
            data-element-boiling-point="20.271"
            data-element-period="1"
            data-element-group="1"
            data-element-name="Hydrogen"
          >
            <abbr className="element__abbr">H</abbr>
            <span className="element__name">Hydrogen</span>
            <span className="element__atomic-number">1</span>
            <span className="element__atomic-mass">1.008</span>
            <p className="tooltip right-tooltip">Hydrogen</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="alkali-metal"
            data-element-state="solid"
            data-element-melting-point="453.65"
            data-element-boiling-point="1603"
            data-element-period="2"
            data-element-group="1"
            data-element-name="Lithium"
          >
            <abbr className="element__abbr">Li</abbr>
            <span className="element__name">Lithium</span>
            <span className="element__atomic-number">3</span>
            <span className="element__atomic-mass">6.940</span>
            <p className="tooltip top-tooltip">Lithium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="alkali-metal"
            data-element-state="solid"
            data-element-melting-point="370.944"
            data-element-boiling-point="1156.090"
            data-element-period="3"
            data-element-group="1"
            data-element-name="Sodium"
          >
            <abbr className="element__abbr">Na</abbr>
            <span className="element__name">Sodium</span>
            <span className="element__atomic-number">11</span>
            <span className="element__atomic-mass">22.989</span>
            <p className="tooltip top-tooltip">Sodium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="alkali-metal"
            data-element-state="solid"
            data-element-melting-point="336.7"
            data-element-boiling-point="1032"
            data-element-period="4"
            data-element-group="1"
            data-element-name="Potassium"
          >
            <abbr className="element__abbr">K</abbr>
            <span className="element__name">Potassium</span>
            <span className="element__atomic-number">19</span>
            <span className="element__atomic-mass">39.098</span>
            <p className="tooltip top-tooltip">Potassium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="alkali-metal"
            data-element-state="solid"
            data-element-melting-point="312.45"
            data-element-boiling-point="961"
            data-element-period="5"
            data-element-group="1"
            data-element-name="Rubidium"
          >
            <abbr className="element__abbr">Rb</abbr>
            <span className="element__name">Rubidium</span>
            <span className="element__atomic-number">37</span>
            <span className="element__atomic-mass">85.468</span>
            <p className="tooltip top-tooltip">Rubidium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="alkali-metal"
            data-element-state="solid"
            data-element-melting-point="301.7"
            data-element-boiling-point="944"
            data-element-period="6"
            data-element-group="1"
            data-element-name="Caesium"
          >
            <abbr className="element__abbr">Cs</abbr>
            <span className="element__name">Caesium</span>
            <span className="element__atomic-number">55</span>
            <span className="element__atomic-mass">132.905</span>
            <p className="tooltip top-tooltip">Caesium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="alkali-metal"
            data-element-state="solid"
            data-element-melting-point="300"
            data-element-boiling-point="950"
            data-element-period="7"
            data-element-group="1"
            data-element-name="Francium"
          >
            <abbr className="element__abbr">Fr</abbr>
            <span className="element__name">Francium</span>
            <span className="element__atomic-number">87</span>
            <span className="element__atomic-mass">(223.000)</span>
            <p className="tooltip bottom-tooltip">Francium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="alkali-earth-metal"
            data-element-state="solid"
            data-element-melting-point="1560"
            data-element-boiling-point="2742"
            data-element-period="2"
            data-element-group="2"
            data-element-name="Berilyum"
          >
            <abbr className="element__abbr">Be</abbr>
            <span className="element__name">Berilyum</span>
            <span className="element__atomic-number">4</span>
            <span className="element__atomic-mass">9.012</span>
            <p className="tooltip right-tooltip">Berilyum</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="alkali-earth-metal"
            data-element-state="solid"
            data-element-melting-point="923"
            data-element-boiling-point="1363"
            data-element-period="3"
            data-element-group="2"
            data-element-name="Magnesium"
          >
            <abbr className="element__abbr">Mg</abbr>
            <span className="element__name">Magne-sium</span>
            <span className="element__atomic-number">12</span>
            <span className="element__atomic-mass">24.305</span>
            <p className="tooltip right-tooltip">Magnesium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="alkali-earth-metal"
            data-element-state="solid"
            data-element-melting-point="1115"
            data-element-boiling-point="1757"
            data-element-period="4"
            data-element-group="2"
            data-element-name="Calcium"
          >
            <abbr className="element__abbr">Ca</abbr>
            <span className="element__name">Calcium</span>
            <span className="element__atomic-number">20</span>
            <span className="element__atomic-mass">40.078</span>
            <p className="tooltip top-tooltip">Calcium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="alkali-earth-metal"
            data-element-state="solid"
            data-element-melting-point="1050"
            data-element-boiling-point="1650"
            data-element-period="5"
            data-element-group="2"
            data-element-name="Stronium"
          >
            <abbr className="element__abbr">Sr</abbr>
            <span className="element__name">Stronium</span>
            <span className="element__atomic-number">38</span>
            <span className="element__atomic-mass">87.620</span>
            <p className="tooltip top-tooltip">Stronium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="alkali-earth-metal"
            data-element-state="solid"
            data-element-melting-point="1000"
            data-element-boiling-point="2118"
            data-element-period="6"
            data-element-group="2"
            data-element-name="Barium"
          >
            <abbr className="element__abbr">Ba</abbr>
            <span className="element__name">Barium</span>
            <span className="element__atomic-number">56</span>
            <span className="element__atomic-mass">137.327</span>
            <p className="tooltip top-tooltip">Barium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="alkali-earth-metal"
            data-element-state="solid"
            data-element-melting-point="973"
            data-element-boiling-point="2010"
            data-element-period="7"
            data-element-group="2"
            data-element-name="Radium"
          >
            <abbr className="element__abbr">Ra</abbr>
            <span className="element__name">Radium</span>
            <span className="element__atomic-number">88</span>
            <span className="element__atomic-mass">(226.000)</span>
            <p className="tooltip bottom-tooltip">Radium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="1814"
            data-element-boiling-point="3109"
            data-element-period="4"
            data-element-group="3"
            data-element-name="Scandium"
          >
            <abbr className="element__abbr">Sc</abbr>
            <span className="element__name">Scandium</span>
            <span className="element__atomic-number">21</span>
            <span className="element__atomic-mass">44.956</span>
            <p className="tooltip top-tooltip">Scandium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="1799"
            data-element-boiling-point="3203"
            data-element-period="5"
            data-element-group="3"
            data-element-name="Yttrium"
          >
            <abbr className="element__abbr">Y</abbr>
            <span className="element__name">Yttrium</span>
            <span className="element__atomic-number">39</span>
            <span className="element__atomic-mass">88.906</span>
            <p className="tooltip top-tooltip">Yttrium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-name="Lanthanoids"
            data-element-melting-point="0"
            data-element-boiling-point="7001"
            data-element-name="Lanthanoids"
          >
            <span className="element__name">57-71</span>
            <span className="element__name">Lantha-noids</span>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-name="Actinoids"
            data-element-melting-point="0"
            data-element-boiling-point="7001"
          >
            <span className="element__name">89-103</span>
            <span className="element__name">Actinoids</span>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="1941"
            data-element-boiling-point="3560"
            data-element-period="4"
            data-element-group="4"
            data-element-name="Titanium"
          >
            <abbr className="element__abbr">Ti</abbr>
            <span className="element__name">Titanium</span>
            <span className="element__atomic-number">22</span>
            <span className="element__atomic-mass">47.867</span>
            <p className="tooltip top-tooltip">Titanium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="2128"
            data-element-boiling-point="4650"
            data-element-period="5"
            data-element-group="4"
            data-element-name="Zirconium"
          >
            <abbr className="element__abbr">Zr</abbr>
            <span className="element__name">Zirconium</span>
            <span className="element__atomic-number">40</span>
            <span className="element__atomic-mass">91.224</span>
            <p className="tooltip top-tooltip">Zirconium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="2506"
            data-element-boiling-point="4876"
            data-element-period="6"
            data-element-group="4"
            data-element-name="Hafnium"
          >
            <abbr className="element__abbr">Hf</abbr>
            <span className="element__name">Hafnium</span>
            <span className="element__atomic-number">72</span>
            <span className="element__atomic-mass">178.490</span>
            <p className="tooltip top-tooltip">Hafnium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="unknown"
            data-element-melting-point="unknown"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-group="4"
            data-element-name="Rutherfordium"
          >
            <abbr className="element__abbr">Rf</abbr>
            <span className="element__name">Ruther-fordium</span>
            <span className="element__atomic-number">104</span>
            <span className="element__atomic-mass">(267.000)</span>
            <p className="tooltip bottom-tooltip">Rutherfordium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="2183"
            data-element-boiling-point="3680"
            data-element-period="4"
            data-element-group="5"
            data-element-name="Vanadium"
          >
            <abbr className="element__abbr">V</abbr>
            <span className="element__name">Vanadium</span>
            <span className="element__atomic-number">23</span>
            <span className="element__atomic-mass">50.942</span>
            <p className="tooltip top-tooltip">Vanadium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="2750"
            data-element-boiling-point="5017"
            data-element-period="5"
            data-element-group="5"
            data-element-name="Niobium"
          >
            <abbr className="element__abbr">Nb</abbr>
            <span className="element__name">Niobium</span>
            <span className="element__atomic-number">41</span>
            <span className="element__atomic-mass">92.906</span>
            <p className="tooltip top-tooltip">Niobium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="3290"
            data-element-boiling-point="5731"
            data-element-period="6"
            data-element-group="5"
            data-element-name="Tantalum"
          >
            <abbr className="element__abbr">Ta</abbr>
            <span className="element__name">Tantalum</span>
            <span className="element__atomic-number">72</span>
            <span className="element__atomic-mass">180.947</span>
            <p className="tooltip top-tooltip">Tantalum</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="unknown"
            data-element-melting-point="unknown"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-group="5"
            data-element-name="Dubnium"
          >
            <abbr className="element__abbr">Db</abbr>
            <span className="element__name">Dubnium</span>
            <span className="element__atomic-number">105</span>
            <span className="element__atomic-mass">(268.000)</span>
            <p className="tooltip bottom-tooltip">Dubnium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="2180"
            data-element-boiling-point="2944"
            data-element-period="4"
            data-element-group="6"
            data-element-name="Chromium"
          >
            <abbr className="element__abbr">Cr</abbr>
            <span className="element__name">Chro-mium</span>
            <span className="element__atomic-number">24</span>
            <span className="element__atomic-mass">51.996</span>
            <p className="tooltip top-tooltip">Chromium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="2896"
            data-element-boiling-point="4912"
            data-element-period="5"
            data-element-group="6"
            data-element-name="Molybdenum"
          >
            <abbr className="element__abbr">Mo</abbr>
            <span className="element__name">Molyb-denum</span>
            <span className="element__atomic-number">42</span>
            <span className="element__atomic-mass">95.950</span>
            <p className="tooltip top-tooltip">Molyb-denum</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="3695"
            data-element-boiling-point="6203"
            data-element-period="6"
            data-element-group="6"
            data-element-name="Tungsten"
          >
            <abbr className="element__abbr">W</abbr>
            <span className="element__name">Tungsten</span>
            <span className="element__atomic-number">73</span>
            <span className="element__atomic-mass">183.840</span>
            <p className="tooltip top-tooltip">Tungsten</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="unknown"
            data-element-melting-point="unknown"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-group="6"
            data-element-name="Seaborgium"
          >
            <abbr className="element__abbr">Sg</abbr>
            <span className="element__name">Seabor-gium</span>
            <span className="element__atomic-number">106</span>
            <span className="element__atomic-mass">(268.000)</span>
            <p className="tooltip bottom-tooltip">Seaborgium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="1519"
            data-element-boiling-point="2334"
            data-element-period="4"
            data-element-group="7"
            data-element-name="Manganese"
          >
            <abbr className="element__abbr">Mn</abbr>
            <span className="element__name">Manga-nese</span>
            <span className="element__atomic-number">25</span>
            <span className="element__atomic-mass">54.938</span>
            <p className="tooltip top-tooltip">Manganese</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="2430"
            data-element-boiling-point="4538"
            data-element-period="5"
            data-element-group="7"
            data-element-name="Technetium"
          >
            <abbr className="element__abbr">Tc</abbr>
            <span className="element__name">Techne-tium</span>
            <span className="element__atomic-number">43</span>
            <span className="element__atomic-mass">(98.000)</span>
            <p className="tooltip top-tooltip">Techne-tium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="3459"
            data-element-boiling-point="5903"
            data-element-period="6"
            data-element-group="7"
            data-element-name="Rhenium"
          >
            <abbr className="element__abbr">Re</abbr>
            <span className="element__name">Rhenium</span>
            <span className="element__atomic-number">74</span>
            <span className="element__atomic-mass">186.207</span>
            <p className="tooltip top-tooltip">Rhenium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="unknown"
            data-element-melting-point="unknown"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-group="7"
            data-element-name="Bohrium"
          >
            <abbr className="element__abbr">Bh</abbr>
            <span className="element__name">Bohrium</span>
            <span className="element__atomic-number">107</span>
            <span className="element__atomic-mass">(270.000)</span>
            <p className="tooltip bottom-tooltip">Bohrium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="1811"
            data-element-boiling-point="3134"
            data-element-period="4"
            data-element-group="8"
            data-element-name="Iron"
          >
            <abbr className="element__abbr">Fe</abbr>
            <span className="element__name">Iron</span>
            <span className="element__atomic-number">26</span>
            <span className="element__atomic-mass">55.845</span>
            <p className="tooltip top-tooltip">Iron</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="2607"
            data-element-boiling-point="4423"
            data-element-period="5"
            data-element-group="8"
            data-element-name="Ruthenium"
          >
            <abbr className="element__abbr">Ru</abbr>
            <span className="element__name">Ruthe-nium</span>
            <span className="element__atomic-number">44</span>
            <span className="element__atomic-mass">101.070</span>
            <p className="tooltip top-tooltip">Ruthe-nium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="3306"
            data-element-boiling-point="5285"
            data-element-period="6"
            data-element-group="8"
            data-element-name="Osmium"
          >
            <abbr className="element__abbr">Os</abbr>
            <span className="element__name">Osmium</span>
            <span className="element__atomic-number">75</span>
            <span className="element__atomic-mass">190.230</span>
            <p className="tooltip top-tooltip">Osmium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="unknown"
            data-element-melting-point="unknown"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-group="8"
            data-element-name="Hassium"
          >
            <abbr className="element__abbr">Hs</abbr>
            <span className="element__name">Hassium</span>
            <span className="element__atomic-number">108</span>
            <span className="element__atomic-mass">(277.000)</span>
            <p className="tooltip bottom-tooltip">Hassium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="1768"
            data-element-boiling-point="3200"
            data-element-period="4"
            data-element-group="9"
            data-element-name="Cobalt"
          >
            <abbr className="element__abbr">Co</abbr>
            <span className="element__name">Cobalt</span>
            <span className="element__atomic-number">27</span>
            <span className="element__atomic-mass">58.993</span>
            <p className="tooltip top-tooltip">Cobalt</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="2237"
            data-element-boiling-point="3968"
            data-element-period="5"
            data-element-group="9"
            data-element-name="Rhodium"
          >
            <abbr className="element__abbr">Rh</abbr>
            <span className="element__name">Rhodium</span>
            <span className="element__atomic-number">45</span>
            <span className="element__atomic-mass">102.905</span>
            <p className="tooltip top-tooltip">Rhodium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="2719"
            data-element-boiling-point="4403"
            data-element-period="6"
            data-element-group="9"
            data-element-name="Iridium"
          >
            <abbr className="element__abbr">Ir</abbr>
            <span className="element__name">Iridium</span>
            <span className="element__atomic-number">76</span>
            <span className="element__atomic-mass">192.217</span>
            <p className="tooltip top-tooltip">Iridium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="unknown"
            data-element-state="unknown"
            data-element-melting-point="unknown"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-group="9"
            data-element-name="Meitnerium"
          >
            <abbr className="element__abbr">Mt</abbr>
            <span className="element__name">Meitne-rium</span>
            <span className="element__atomic-number">109</span>
            <span className="element__atomic-mass">(278.000)</span>
            <p className="tooltip bottom-tooltip">Meitnerium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="1728"
            data-element-boiling-point="3003"
            data-element-period="4"
            data-element-group="10"
            data-element-name="Nickel"
          >
            <abbr className="element__abbr">Ni</abbr>
            <span className="element__name">Nickel</span>
            <span className="element__atomic-number">28</span>
            <span className="element__atomic-mass">58.963</span>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="1828.05"
            data-element-boiling-point="3236"
            data-element-period="5"
            data-element-group="10"
            data-element-name="Palladium"
          >
            <abbr className="element__abbr">Pd</abbr>
            <span className="element__name">Palladium</span>
            <span className="element__atomic-number">46</span>
            <span className="element__atomic-mass">106.420</span>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="2041.4"
            data-element-boiling-point="4098"
            data-element-period="6"
            data-element-group="10"
            data-element-name="Platinum"
          >
            <abbr className="element__abbr">Pt</abbr>
            <span className="element__name">Platinum</span>
            <span className="element__atomic-number">77</span>
            <span className="element__atomic-mass">195.084</span>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="unknown"
            data-element-state="unknown"
            data-element-melting-point="unknown"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-group="10"
            data-element-name="Darmstadtium"
          >
            <abbr className="element__abbr">Ds</abbr>
            <span className="element__name">Darmstad-tium</span>
            <span className="element__atomic-number">110</span>
            <span className="element__atomic-mass">(281.000)</span>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="1357.77"
            data-element-boiling-point="2835"
            data-element-period="4"
            data-element-group="11"
            data-element-name="Copper"
          >
            <abbr className="element__abbr">Cu</abbr>
            <span className="element__name">Copper</span>
            <span className="element__atomic-number">29</span>
            <span className="element__atomic-mass">63.546</span>
            <p className="tooltip top-tooltip">Copper</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="1234.93"
            data-element-boiling-point="2435"
            data-element-period="5"
            data-element-group="11"
            data-element-name="Silver"
          >
            <abbr className="element__abbr">Ag</abbr>
            <span className="element__name">Silver</span>
            <span className="element__atomic-number">47</span>
            <span className="element__atomic-mass">107.868</span>
            <p className="tooltip top-tooltip">Silver</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="1337.33"
            data-element-boiling-point="3243"
            data-element-period="6"
            data-element-group="11"
            data-element-name="Gold"
          >
            <abbr className="element__abbr">Au</abbr>
            <span className="element__name">Gold</span>
            <span className="element__atomic-number">78</span>
            <span className="element__atomic-mass">107.868</span>
            <p className="tooltip top-tooltip">Gold</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="unknown"
            data-element-state="unknown"
            data-element-melting-point="unknown"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-group="11"
            data-element-name="Roentgenium"
          >
            <abbr className="element__abbr">Rg</abbr>
            <span className="element__name">Roentge-nium</span>
            <span className="element__atomic-number">111</span>
            <span className="element__atomic-mass">(282.000)</span>
            <p className="tooltip bottom-tooltip">Roentge-nium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="692.68"
            data-element-boiling-point="1180"
            data-element-period="4"
            data-element-group="12"
            data-element-name="Zinc"
          >
            <abbr className="element__abbr">Zn</abbr>
            <span className="element__name">Zinc</span>
            <span className="element__atomic-number">30</span>
            <span className="element__atomic-mass">65.380</span>
            <p className="tooltip top-tooltip">Zinc</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="solid"
            data-element-melting-point="594.22"
            data-element-boiling-point="1040"
            data-element-period="5"
            data-element-group="12"
            data-element-name="Cadmium"
          >
            <abbr className="element__abbr">Cd</abbr>
            <span className="element__name">Cadmium</span>
            <span className="element__atomic-number">48</span>
            <span className="element__atomic-mass">112.414</span>
            <p className="tooltip top-tooltip">Cadmium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="transition-metal"
            data-element-state="liquid"
            data-element-melting-point="234.3210"
            data-element-boiling-point="629.88"
            data-element-period="6"
            data-element-group="12"
            data-element-name="Mercury"
          >
            <abbr className="element__abbr">Hg</abbr>
            <span className="element__name">Mercury</span>
            <span className="element__atomic-number">79</span>
            <span className="element__atomic-mass">200.592</span>
            <p className="tooltip top-tooltip">Mercury</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="post-transition-metal"
            data-element-state="unknown"
            data-element-melting-point="unknown"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-group="12"
            data-element-name="Copernicium"
          >
            <abbr className="element__abbr">Cn</abbr>
            <span className="element__name">Coperni-cium</span>
            <span className="element__atomic-number">112</span>
            <span className="element__atomic-mass">(285.000)</span>
            <p className="tooltip bottom-tooltip">Copernicium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="metalloid"
            data-element-state="solid"
            data-element-melting-point="2349"
            data-element-boiling-point="4200"
            data-element-period="2"
            data-element-group="13"
            data-element-name="Boron"
          >
            <abbr className="element__abbr">B</abbr>
            <span className="element__name">Boron</span>
            <span className="element__atomic-number">5</span>
            <span className="element__atomic-mass">10.810</span>
            <p className="tooltip left-tooltip">Boron</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="post-transition-metal"
            data-element-state="solid"
            data-element-melting-point="933.47"
            data-element-boiling-point="2743"
            data-element-period="3"
            data-element-group="13"
            data-element-name="Aluminium"
          >
            <abbr className="element__abbr">Al</abbr>
            <span className="element__name">Alumi-nium</span>
            <span className="element__atomic-number">13</span>
            <span className="element__atomic-mass">26.982</span>
            <p className="tooltip left-tooltip">Aluminium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="post-transition-metal"
            data-element-state="solid"
            data-element-melting-point="302.9146"
            data-element-boiling-point="2673"
            data-element-period="4"
            data-element-group="13"
            data-element-name="Galium"
          >
            <abbr className="element__abbr">Ga</abbr>
            <span className="element__name">Galium</span>
            <span className="element__atomic-number">31</span>
            <span className="element__atomic-mass">69.723</span>
            <p className="tooltip top-tooltip">Galium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="post-transition-metal"
            data-element-state="solid"
            data-element-melting-point="429.7485"
            data-element-boiling-point="2345"
            data-element-period="5"
            data-element-group="13"
            data-element-name="Indium"
          >
            <abbr className="element__abbr">In</abbr>
            <span className="element__name">Indium</span>
            <span className="element__atomic-number">49</span>
            <span className="element__atomic-mass">114.818</span>
            <p className="tooltip top-tooltip">Indium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="post-transition-metal"
            data-element-state="solid"
            data-element-melting-point="577"
            data-element-boiling-point="1746"
            data-element-period="6"
            data-element-group="13"
            data-element-name="Thalium"
          >
            <abbr className="element__abbr">Th</abbr>
            <span className="element__name">Thalium</span>
            <span className="element__atomic-number">81</span>
            <span className="element__atomic-mass">204.380</span>
            <p className="tooltip top-tooltip">Thalium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="unknown"
            data-element-state="unknown"
            data-element-period="7"
            data-element-group="13"
            data-element-name="Nihonium"
            data-element-melting-point="unknown"
            data-element-boiling-point="unknown"
          >
            <abbr className="element__abbr">Nh</abbr>
            <span className="element__name">Nihonium</span>
            <span className="element__atomic-number">113</span>
            <span className="element__atomic-mass">(286.000)</span>
            <p className="tooltip bottom-tooltip">Nihonium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="other-nonmetal"
            data-element-state="solid"
            data-element-melting-point="3915"
            data-element-boiling-point="4600"
            data-element-period="2"
            data-element-group="14"
            data-element-name="Carbon"
          >
            <abbr className="element__abbr">C</abbr>
            <span className="element__name">Carbon</span>
            <span className="element__atomic-number">6</span>
            <span className="element__atomic-mass">12.001</span>
            <p className="tooltip top-tooltip">Carbon</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="metalloid"
            data-element-state="solid"
            data-element-melting-point="1687"
            data-element-boiling-point="3538"
            data-element-period="3"
            data-element-group="14"
            data-element-name="Silicon"
          >
            <abbr className="element__abbr">Si</abbr>
            <span className="element__name">Silicon</span>
            <span className="element__atomic-number">14</span>
            <span className="element__atomic-mass">28.085</span>
            <p className="tooltip top-tooltip">Silicon</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="metalloid"
            data-element-state="solid"
            data-element-melting-point="1211.40"
            data-element-boiling-point="3106"
            data-element-period="4"
            data-element-group="14"
            data-element-name="Germanium"
          >
            <abbr className="element__abbr">Ge</abbr>
            <span className="element__name">Germa-nium</span>
            <span className="element__atomic-number">32</span>
            <span className="element__atomic-mass">72.630</span>
            <p className="tooltip top-tooltip">Germa-nium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="post-transition-metal"
            data-element-state="solid"
            data-element-melting-point="505.08"
            data-element-boiling-point="2875"
            data-element-period="5"
            data-element-group="14"
            data-element-name="Tin"
          >
            <abbr className="element__abbr">Sn</abbr>
            <span className="element__name">Tin</span>
            <span className="element__atomic-number">50</span>
            <span className="element__atomic-mass">118.710</span>
            <p className="tooltip top-tooltip">Tin</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="post-transition-metal"
            data-element-state="solid"
            data-element-melting-point="600.61"
            data-element-boiling-point="2022"
            data-element-period="6"
            data-element-group="14"
            data-element-name="Lead"
          >
            <abbr className="element__abbr">Pb</abbr>
            <span className="element__name">Lead</span>
            <span className="element__atomic-number">82</span>
            <span className="element__atomic-mass">207.200</span>
            <p className="tooltip top-tooltip">Lead</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="post-transition-metal"
            data-element-state="unknown"
            data-element-melting-point="unknown"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-group="14"
            data-element-name="Flevorium"
          >
            <abbr className="element__abbr">Fl</abbr>
            <span className="element__name">Flevorium</span>
            <span className="element__atomic-number">114</span>
            <span className="element__atomic-mass">(289.000)</span>
            <p className="tooltip bottom-tooltip">Flevorium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="other-nonmetal"
            data-element-state="gas"
            data-element-melting-point="63.15"
            data-element-boiling-point="77.355"
            data-element-period="2"
            data-element-group="15"
            data-element-name="Nitrogen"
          >
            <abbr className="element__abbr">N</abbr>
            <span className="element__name">Nitrogen</span>
            <span className="element__atomic-number">7</span>
            <span className="element__atomic-mass">14.007</span>
            <p className="tooltip top-tooltip">Nitrogen</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="other-nonmetal"
            data-element-state="solid"
            data-element-melting-point="317.2"
            data-element-boiling-point="553"
            data-element-period="3"
            data-element-group="15"
            data-element-name="Phosphorus"
          >
            <abbr className="element__abbr">P</abbr>
            <span className="element__name">Phospho-rus</span>
            <span className="element__atomic-number">15</span>
            <span className="element__atomic-mass">30.974</span>
            <p className="tooltip top-tooltip">Phospho-rus</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="metalloid"
            data-element-state="solid"
            data-element-melting-point="887"
            data-element-boiling-point="887"
            data-element-period="4"
            data-element-group="15"
            data-element-name="Arsenic"
          >
            <abbr className="element__abbr">As</abbr>
            <span className="element__name">Arsenic</span>
            <span className="element__atomic-number">33</span>
            <span className="element__atomic-mass">74.922</span>
            <p className="tooltip top-tooltip">Arsenic</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="metalloid"
            data-element-state="solid"
            data-element-melting-point="903.78"
            data-element-boiling-point="1908"
            data-element-period="5"
            data-element-group="15"
            data-element-name="Antimony"
          >
            <abbr className="element__abbr">Sb</abbr>
            <span className="element__name">Antimony</span>
            <span className="element__atomic-number">51</span>
            <span className="element__atomic-mass">121.760</span>
            <p className="tooltip top-tooltip">Antimony</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="post-transition-metal"
            data-element-state="solid"
            data-element-melting-point="544.7"
            data-element-boiling-point="1837"
            data-element-period="6"
            data-element-group="15"
            data-element-name="Bismuth"
          >
            <abbr className="element__abbr">Bi</abbr>
            <span className="element__name">Bismuth</span>
            <span className="element__atomic-number">83</span>
            <span className="element__atomic-mass">208.980</span>
            <p className="tooltip top-tooltip">Bismuth</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="unknown"
            data-element-state="unknown"
            data-element-melting-point="unknown"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-group="15"
            data-element-name="Moscovium"
          >
            <abbr className="element__abbr">Mc</abbr>
            <span className="element__name">Mosco-vium</span>
            <span className="element__atomic-number">115</span>
            <span className="element__atomic-mass">(290.000)</span>
            <p className="tooltip bottom-tooltip">Moscovium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="other-nonmetal"
            data-element-state="gas"
            data-element-melting-point="54.36"
            data-element-boiling-point="90.188"
            data-element-period="2"
            data-element-group="16"
            data-element-name="Oxygen"
          >
            <abbr className="element__abbr">O</abbr>
            <span className="element__name">Oxygen</span>
            <span className="element__atomic-number">8</span>
            <span className="element__atomic-mass">15.999</span>
            <p className="tooltip top-tooltip">Oxygen</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="other-nonmetal"
            data-element-state="solid"
            data-element-melting-point="54.36"
            data-element-boiling-point="717.8"
            data-element-period="3"
            data-element-group="16"
            data-element-name="Sulfur"
          >
            <abbr className="element__abbr">S</abbr>
            <span className="element__name">Sulfur</span>
            <span className="element__atomic-number">16</span>
            <span className="element__atomic-mass">32.060</span>
            <p className="tooltip top-tooltip">Sulfur</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="other-nonmetal"
            data-element-state="solid"
            data-element-melting-point="494"
            data-element-boiling-point="958"
            data-element-period="4"
            data-element-group="16"
            data-element-name="Selenium"
          >
            <abbr className="element__abbr">Se</abbr>
            <span className="element__name">Selenium</span>
            <span className="element__atomic-number">34</span>
            <span className="element__atomic-mass">78.971</span>
            <p className="tooltip top-tooltip">Selenium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="metalloid"
            data-element-state="solid"
            data-element-melting-point="722.66"
            data-element-boiling-point="1261"
            data-element-period="5"
            data-element-group="16"
            data-element-name="Tellurium"
          >
            <abbr className="element__abbr">Te</abbr>
            <span className="element__name">Tellurium</span>
            <span className="element__atomic-number">52</span>
            <span className="element__atomic-mass">127.600</span>
            <p className="tooltip top-tooltip">Tellurium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="post-transition-metal"
            data-element-state="solid"
            data-element-melting-point="527"
            data-element-boiling-point="1235"
            data-element-period="6"
            data-element-group="16"
            data-element-name="Polonium"
          >
            <abbr className="element__abbr">Po</abbr>
            <span className="element__name">Polonium</span>
            <span className="element__atomic-number">84</span>
            <span className="element__atomic-mass">(209.000)</span>
            <p className="tooltip top-tooltip">Polonium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="unknown"
            data-element-state="unknown"
            data-element-melting-point="unknown"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-group="16"
            data-element-name="Livemorium"
          >
            <abbr className="element__abbr">Lv</abbr>
            <span className="element__name">Livemo-rium</span>
            <span className="element__atomic-number">116</span>
            <span className="element__atomic-mass">(293.000)</span>
            <p className="tooltip bottom-tooltip">Livemorium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="other-nonmetal"
            data-element-state="gas"
            data-element-melting-point="53.48"
            data-element-boiling-point="85.03"
            data-element-period="2"
            data-element-group="17"
            data-element-name="Fluorine"
          >
            <abbr className="element__abbr">F</abbr>
            <span className="element__name">Fluorine</span>
            <span className="element__atomic-number">9</span>
            <span className="element__atomic-mass">18.998</span>
            <p className="tooltip top-tooltip">Fluorine</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="other-nonmetal"
            data-element-state="gas"
            data-element-melting-point="171.6"
            data-element-boiling-point="239.11"
            data-element-period="3"
            data-element-group="17"
            data-element-name="Chlorine"
          >
            <abbr className="element__abbr">Cl</abbr>
            <span className="element__name">Chlorine</span>
            <span className="element__atomic-number">17</span>
            <span className="element__atomic-mass">35.450</span>
            <p className="tooltip top-tooltip">Chlorine</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="other-nonmetal"
            data-element-state="liquid"
            data-element-melting-point="265.8"
            data-element-boiling-point="332"
            data-element-period="4"
            data-element-group="17"
            data-element-name="Bromine"
          >
            <abbr className="element__abbr">Br</abbr>
            <span className="element__name">Bromine</span>
            <span className="element__atomic-number">35</span>
            <span className="element__atomic-mass">79.904</span>
            <p className="tooltip top-tooltip">Bromine</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="other-nonmetal"
            data-element-state="solid"
            data-element-melting-point="386.85"
            data-element-boiling-point="457.4"
            data-element-period="5"
            data-element-group="17"
            data-element-name="Iodine"
          >
            <abbr className="element__abbr">I</abbr>
            <span className="element__name">Iodine</span>
            <span className="element__atomic-number">53</span>
            <span className="element__atomic-mass">126.904</span>
            <p className="tooltip top-tooltip">Iodine</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="metalloid"
            data-element-state="solid"
            data-element-melting-point="575"
            data-element-boiling-point="610"
            data-element-period="7"
            data-element-group="17"
            data-element-name="Astatine"
          >
            <abbr className="element__abbr">At</abbr>
            <span className="element__name">Astatine</span>
            <span className="element__atomic-number">85</span>
            <span className="element__atomic-mass">(210.000)</span>
            <p className="tooltip top-tooltip">Astatine</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="unknown"
            data-element-state="unknown"
            data-element-melting-point="unknown"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-group="17"
            data-element-name="Tennessine"
          >
            <abbr className="element__abbr">Ts</abbr>
            <span className="element__name">Tennes-sine</span>
            <span className="element__atomic-number">117</span>
            <span className="element__atomic-mass">(294.000)</span>
            <p className="tooltip bottom-tooltip">Tennessine</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="noble-gas"
            data-element-state="gas"
            data-element-melting-point="0.95"
            data-element-boiling-point="4.222"
            data-element-period="1"
            data-element-group="18"
            data-element-name="Helium"
          >
            <abbr className="element__abbr">He</abbr>
            <span className="element__name">Helium</span>
            <span className="element__atomic-number">2</span>
            <span className="element__atomic-mass">4.002</span>
            <p className="tooltip left-tooltip">Helium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="noble-gas"
            data-element-state="gas"
            data-element-melting-point="24.56"
            data-element-boiling-point="27.104"
            data-element-period="2"
            data-element-group="18"
            data-element-name="Neon"
          >
            <abbr className="element__abbr">Ne</abbr>
            <span className="element__name">Neon</span>
            <span className="element__atomic-number">10</span>
            <span className="element__atomic-mass">20.180</span>
            <p className="tooltip top-tooltip">Neon</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="noble-gas"
            data-element-state="gas"
            data-element-melting-point="83.81"
            data-element-boiling-point="87.302"
            data-element-period="3"
            data-element-group="18"
            data-element-name="Argon"
          >
            <abbr className="element__abbr">Ar</abbr>
            <span className="element__name">Argon</span>
            <span className="element__atomic-number">18</span>
            <span className="element__atomic-mass">39.948</span>
            <p className="tooltip top-tooltip">Argon</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="noble-gas"
            data-element-state="gas"
            data-element-melting-point="115.78"
            data-element-boiling-point="119.93"
            data-element-period="4"
            data-element-group="18"
            data-element-name="Krypton"
          >
            <abbr className="element__abbr">Kr</abbr>
            <span className="element__name">Krypton</span>
            <span className="element__atomic-number">36</span>
            <span className="element__atomic-mass">83.798</span>
            <p className="tooltip top-tooltip">Krypton</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="noble-gas"
            data-element-state="gas"
            data-element-melting-point="161.40"
            data-element-boiling-point="165.051"
            data-element-period="5"
            data-element-group="18"
            data-element-name="Xenon"
          >
            <abbr className="element__abbr">Xe</abbr>
            <span className="element__name">Xenon</span>
            <span className="element__atomic-number">54</span>
            <span className="element__atomic-mass">131.293</span>
            <p className="tooltip top-tooltip">Xenon</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="noble-gas"
            data-element-state="gas"
            data-element-melting-point="202"
            data-element-boiling-point="211.5"
            data-element-period="6"
            data-element-group="18"
            data-element-name="Radon"
          >
            <abbr className="element__abbr">Rn</abbr>
            <span className="element__name">Radon</span>
            <span className="element__atomic-number">86</span>
            <span className="element__atomic-mass">(222.000)</span>
            <p className="tooltip top-tooltip">Radon</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="unknown"
            data-element-state="unknown"
            data-element-melting-point="unknown"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-group="18"
            data-element-symbol="Og"
            data-element-name="Oganesson"
          >
            <abbr className="element__abbr">Og</abbr>
            <span className="element__name">Oganes-son</span>
            <span className="element__atomic-number">118</span>
            <span className="element__atomic-mass">(294.000)</span>
            <p className="tooltip bottom-tooltip">Oganesson</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-state="solid"
            data-element-melting-point="1193"
            data-element-boiling-point="3737"
            data-element-period="6"
            data-element-name="Lanthanum"
          >
            <abbr className="element__abbr">La</abbr>
            <span className="element__name">Lantha-num</span>
            <span className="element__atomic-number">57</span>
            <span className="element__atomic-mass">138.905</span>
            <p className="tooltip top-tooltip">Lanthanum</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-state="solid"
            data-element-melting-point="1068"
            data-element-boiling-point="3716"
            data-element-period="6"
            data-element-name="Cerium"
          >
            <abbr className="element__abbr">Ce</abbr>
            <span className="element__name">Cerium</span>
            <span className="element__atomic-number">58</span>
            <span className="element__atomic-mass">140.116</span>
            <p className="tooltip top-tooltip">Cerium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-state="solid"
            data-element-melting-point="1208"
            data-element-boiling-point="3403"
            data-element-period="6"
            data-element-name="Praseodymium"
          >
            <abbr className="element__abbr">Pr</abbr>
            <span className="element__name">Praseod-ymium</span>
            <span className="element__atomic-number">59</span>
            <span className="element__atomic-mass">140.907</span>
            <p className="tooltip top-tooltip">Praseodymium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-state="solid"
            data-element-melting-point="1297"
            data-element-boiling-point="3347"
            data-element-period="6"
            data-element-name="Neodymium"
          >
            <abbr className="element__abbr">Nd</abbr>
            <span className="element__name">Neod-ymium</span>
            <span className="element__atomic-number">60</span>
            <span className="element__atomic-mass">144.242</span>
            <p className="tooltip top-tooltip">Neodymium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-state="solid"
            data-element-melting-point="1315"
            data-element-boiling-point="3273"
            data-element-period="6"
            data-element-name="Promethium"
          >
            <abbr className="element__abbr">Pm</abbr>
            <span className="element__name">Prome-thium</span>
            <span className="element__atomic-number">61</span>
            <span className="element__atomic-mass">(145,000)</span>
            <p className="tooltip top-tooltip">Promethium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-state="solid"
            data-element-melting-point="1345"
            data-element-boiling-point="2173"
            data-element-period="6"
            data-element-name="Samarium"
          >
            <abbr className="element__abbr">Sm</abbr>
            <span className="element__name">Samarium</span>
            <span className="element__atomic-number">62</span>
            <span className="element__atomic-mass">150.360</span>
            <p className="tooltip top-tooltip">Samarium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-state="solid"
            data-element-melting-point="1099"
            data-element-boiling-point="1802"
            data-element-period="6"
            data-element-name="Europium"
          >
            <abbr className="element__abbr">Eu</abbr>
            <span className="element__name">Europium</span>
            <span className="element__atomic-number">63</span>
            <span className="element__atomic-mass">151.964</span>
            <p className="tooltip top-tooltip">Europium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-state="solid"
            data-element-melting-point="1585"
            data-element-boiling-point="3273"
            data-element-period="6"
            data-element-name="Gadolinium"
          >
            <abbr className="element__abbr">Gd</abbr>
            <span className="element__name">Gadoli-nium</span>
            <span className="element__atomic-number">64</span>
            <span className="element__atomic-mass">157.250</span>
            <p className="tooltip top-tooltip">Gadolinium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-state="solid"
            data-element-melting-point="1629"
            data-element-boiling-point="3396"
            data-element-period="6"
            data-element-name="Terbium"
          >
            <abbr className="element__abbr">Tb</abbr>
            <span className="element__name">Terbium</span>
            <span className="element__atomic-number">65</span>
            <span className="element__atomic-mass">157.250</span>
            <p className="tooltip top-tooltip">Terbium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-state="solid"
            data-element-melting-point="1680"
            data-element-boiling-point="2840"
            data-element-period="6"
            data-element-name="Dysprosium"
          >
            <abbr className="element__abbr">Dy</abbr>
            <span className="element__name">Dyspro-sium</span>
            <span className="element__atomic-number">66</span>
            <span className="element__atomic-mass">162.500</span>
            <p className="tooltip top-tooltip">Dysprosium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-state="solid"
            data-element-melting-point="1734"
            data-element-boiling-point="2873"
            data-element-period="6"
            data-element-name="Holmium"
          >
            <abbr className="element__abbr">Ho</abbr>
            <span className="element__name">Holmium</span>
            <span className="element__atomic-number">67</span>
            <span className="element__atomic-mass">164.930</span>
            <p className="tooltip top-tooltip">Holmium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-state="solid"
            data-element-melting-point="1802"
            data-element-boiling-point="3141"
            data-element-period="6"
            data-element-name="Erbium"
          >
            <abbr className="element__abbr">Er</abbr>
            <span className="element__name">Erbium</span>
            <span className="element__atomic-number">68</span>
            <span className="element__atomic-mass">167.259</span>
            <p className="tooltip top-tooltip">Erbium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-state="solid"
            data-element-melting-point="1818"
            data-element-boiling-point="2223"
            data-element-period="6"
            data-element-name="Thulium"
          >
            <abbr className="element__abbr">Tm</abbr>
            <span className="element__name">Thulium</span>
            <span className="element__atomic-number">69</span>
            <span className="element__atomic-mass">168.934</span>
            <p className="tooltip top-tooltip">Thulium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-state="solid"
            data-element-melting-point="1097"
            data-element-boiling-point="1469"
            data-element-period="6"
            data-element-name="Ytterbium"
          >
            <abbr className="element__abbr">Yb</abbr>
            <span className="element__name">Ytterbium</span>
            <span className="element__atomic-number">70</span>
            <span className="element__atomic-mass">173.045</span>
            <p className="tooltip top-tooltip">Ytterbium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Lanthanoid"
            data-element-state="solid"
            data-element-melting-point="1925"
            data-element-boiling-point="3675"
            data-element-period="6"
            data-element-name="Lutetium"
          >
            <abbr className="element__abbr">Lu</abbr>
            <span className="element__name">Lutetium</span>
            <span className="element__atomic-number">71</span>
            <span className="element__atomic-mass">174.967</span>
            <p className="tooltip top-tooltip">Lutetium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-state="solid"
            data-element-melting-point="1500"
            data-element-boiling-point="3500"
            data-element-period="7"
            data-element-name="Actinium"
          >
            <abbr className="element__abbr">Ac</abbr>
            <span className="element__name">Actinium</span>
            <span className="element__atomic-number">89</span>
            <span className="element__atomic-mass">(227.000)</span>
            <p className="tooltip bottom-tooltip">Actinium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-state="solid"
            data-element-melting-point="2023"
            data-element-boiling-point="5061"
            data-element-period="7"
            data-element-name="Thorium"
          >
            <abbr className="element__abbr">Th</abbr>
            <span className="element__name">Thorium</span>
            <span className="element__atomic-number">90</span>
            <span className="element__atomic-mass">232.038</span>
            <p className="tooltip bottom-tooltip">Thorium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-state="solid"
            data-element-melting-point="1841"
            data-element-boiling-point="4300"
            data-element-period="7"
            data-element-name="Protactinium"
          >
            <abbr className="element__abbr">Pa</abbr>
            <span className="element__name">Protacti-nium</span>
            <span className="element__atomic-number">91</span>
            <span className="element__atomic-mass">231.035</span>
            <p className="tooltip bottom-tooltip">Protactinium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-state="solid"
            data-element-melting-point="1405.3"
            data-element-boiling-point="4404"
            data-element-period="7"
            data-element-name="Uranium"
          >
            <abbr className="element__abbr">U</abbr>
            <span className="element__name">Uranium</span>
            <span className="element__atomic-number">92</span>
            <span className="element__atomic-mass">238.028</span>
            <p className="tooltip bottom-tooltip">Uranium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-state="solid"
            data-element-melting-point="912"
            data-element-boiling-point="4447"
            data-element-period="7"
            data-element-name="Neptunium"
          >
            <abbr className="element__abbr">Np</abbr>
            <span className="element__name">Neptu-nium</span>
            <span className="element__atomic-number">93</span>
            <span className="element__atomic-mass">(237.000)</span>
            <p className="tooltip bottom-tooltip">Neptunium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-state="solid"
            data-element-melting-point="912.5"
            data-element-boiling-point="3505"
            data-element-period="7"
            data-element-name="Plutonium"
          >
            <abbr className="element__abbr">Pu</abbr>
            <span className="element__name">Pluto-nium</span>
            <span className="element__atomic-number">94</span>
            <span className="element__atomic-mass">(244.000)</span>
            <p className="tooltip bottom-tooltip">Plutonium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-state="solid"
            data-element-melting-point="1449"
            data-element-boiling-point="2880"
            data-element-period="7"
            data-element-name="Americium"
          >
            <abbr className="element__abbr">Am</abbr>
            <span className="element__name">Ameri-cium</span>
            <span className="element__atomic-number">95</span>
            <span className="element__atomic-mass">(243.000)</span>
            <p className="tooltip bottom-tooltip">Americium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-state="solid"
            data-element-melting-point="1613"
            data-element-boiling-point="3383"
            data-element-period="7"
            data-element-name="Curium"
          >
            <abbr className="element__abbr">Cm</abbr>
            <span className="element__name">Curium</span>
            <span className="element__atomic-number">96</span>
            <span className="element__atomic-mass">(247.000)</span>
            <p className="tooltip bottom-tooltip">Curium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-state="solid"
            data-element-melting-point="1259"
            data-element-boiling-point="2900"
            data-element-period="7"
            data-element-name="Berkelium"
          >
            <abbr className="element__abbr">Bk</abbr>
            <span className="element__name">Berkelium</span>
            <span className="element__atomic-number">97</span>
            <span className="element__atomic-mass">(247.000)</span>
            <p className="tooltip bottom-tooltip">Berkelium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-state="solid"
            data-element-melting-point="1173"
            data-element-boiling-point="1743"
            data-element-period="7"
            data-element-name="Californium"
          >
            <abbr className="element__abbr">Cf</abbr>
            <span className="element__name">Califor-nium</span>
            <span className="element__atomic-number">98</span>
            <span className="element__atomic-mass">(251.000)</span>
            <p className="tooltip bottom-tooltip">Californium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-state="solid"
            data-element-melting-point="1133"
            data-element-boiling-point="1269"
            data-element-period="7"
            data-element-name="Einsteinium"
          >
            <abbr className="element__abbr">Es</abbr>
            <span className="element__name">Einstei-nium</span>
            <span className="element__atomic-number">99</span>
            <span className="element__atomic-mass">(252.000)</span>
            <p className="tooltip bottom-tooltip">Einsteinium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-state="solid"
            data-element-melting-point="1133"
            data-element-boiling-point="1269"
            data-element-period="7"
            data-element-name="Fermium"
          >
            <abbr className="element__abbr">Fm</abbr>
            <span className="element__name">Fermium</span>
            <span className="element__atomic-number">100</span>
            <span className="element__atomic-mass">(257.000)</span>
            <p className="tooltip bottom-tooltip">Fermium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-state="solid"
            data-element-melting-point="1133"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-name="Mendelevium"
          >
            <abbr className="element__abbr">Md</abbr>
            <span className="element__name">Mendele-vium</span>
            <span className="element__atomic-number">101</span>
            <span className="element__atomic-mass">(258.000)</span>
            <p className="tooltip bottom-tooltip">Mendelevium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-state="solid"
            data-element-melting-point="1100"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-name="Nobelium"
          >
            <abbr className="element__abbr">No</abbr>
            <span className="element__name">Nobelium</span>
            <span className="element__atomic-number">102</span>
            <span className="element__atomic-mass">(259.000)</span>
            <p className="tooltip bottom-tooltip">Nobelium</p>
          </div>
          <div
            className="element flex-row-wrap"
            data-element-type="Actinoid"
            data-element-state="solid"
            data-element-melting-point="1900"
            data-element-boiling-point="unknown"
            data-element-period="7"
            data-element-name="Lawrencium"
          >
            <abbr className="element__abbr">Lr</abbr>
            <span className="element__name">Lawren-cium</span>
            <span className="element__atomic-number">103</span>
            <span className="element__atomic-mass">(266.000)</span>
            <p className="tooltip bottom-tooltip">Lawrencium</p>
          </div>
        </section>
        <section className="modal flex-row-wrap">
          <dialog className="modal__dialog" open>
            <article className="modal__content">
              <div className="modal__content__properties"></div>
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
          </dialog>
        </section>
      </div>
    </div>
  );
};

export default TabelPeriodik;
