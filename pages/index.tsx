import Head from "next/head";
import Script from "next/script";
import catalog from "../catalog.json";
import ComSection from "@/components/comSection";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";
import IconsByName from "./../components/iconsByName";

// This is the ID you get from Google Analytics
const GA_TRACKING_ID = "G-61S8NYRDYW";

function Footer() {
  const today = new Date();

  return (
    <footer className="flex">
      <div className="w-1/12 flex items-end justify-end">
        <div id="box-bottom">
          <div id="bottom-right"></div>
        </div>
      </div>
      <div className="w-10/12 py-3 rounded-t-3xl bg-white mt-6">
        <Row className="flex m-3 items-center justify-evenly text-lg text-gray-500 sm:text-center flex-col sm:flex-row font-['Oswald'] font-thin">
          <Col sm={4}>Desenvolvido por: </Col>
          <Col sm={4} className="flex">
            <div className="bg-[#282C35] rounded-3xl p-3 mx-3 flex items-center justify-center">
              <a className="font-['Josefin_Sans']" href="https://czar.dev/">
                <Image
                  src="/czarLogo1.png"
                  alt={"Czar+"}
                  width={270 / 4}
                  height={140 / 4}
                />
              </a>
            </div>
          </Col>
          <Col sm={4} className="text-center">
            São João del-Rei - MG | {today.getFullYear()}
          </Col>
          {/* <div className="wrap">
          <div className="quart">Anderson</div>
          <div className="quart"></div>
          <div className="quart"></div>
          <div className="quart"></div>
          <div className="center">Click My non-existent Corners!</div>
        </div> */}
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="50%"
          height="50%"
          viewBox="0 -10 120 120"
        >
          <circle
            cx="55"
            cy="55"
            r="50"
            style={{ fill: "none", stroke: "#92D050", strokeWidth: "10" }}
          />

          <circle
            cx="55"
            cy="55"
            r="50"
            stroke="#C0504D"
            stroke-width="10"
            stroke-dasharray="78.5 235.5"
            stroke-dashoffset="117.75"
            fill="none"
          />
          <path
            id="top-sector"
            d="M 9,50 A 46,46.5 0 0 1 100.5,50"
            style={{
              fill: "none",
              stroke: "none",
            }}
          />
          <text text-anchor="middle">
            <textPath
              xlinkHref="#top-sector"
              startOffset="50%"
              style={{ fontSize: "10px", fontWeight: "700" }}
            >
              Anderson
            </textPath>
          </text>
        </svg> */}
        </Row>
      </div>
      <div className="w-1/12 flex items-end">
        <div id="box-bottom">
          <div id="bottom-left"></div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const drinks = catalog["drinks"];
  // const zodiac = catalog["zodiac"];
  // const summer = catalog["summer"];
  // const drinkshots = catalog["drinkshots"];
  // const nonalcoholicdrinks = catalog["nonalcoholicdrinks"];
  const beers = catalog["beers"];
  const various = catalog["various"];
  const shots = catalog["shots"];
  // const appetizer = catalog["appetizer"];
  const portions = catalog["portions"];
  const combos = catalog["combos"];
  // const individualportions = catalog["individualportions"];

  const [page, setPage] = useState<string>();

  useEffect(() => {
    // let el: HTMLElement = document.getElementsByClassName(
    //   "quart"
    // )[0] as HTMLElement;
    // el.click();
    // if (el) console.log(el);
    // console.log("Anderson");
    // console.log(el);
    document.addEventListener("DOMContentLoaded", function (event) {
      // let el = document.getElementsByClassName("quart");
      // console.log(el);
      // for (var i = 0; i < el.length; i++) {
      // console.log(el[i]);
      // .click (function() {
      //   let ind = el.item.index();
      //   switch (ind) {
      //     case 0:
      //       let tex = "div 1";
      //       break;
      //     case 1:
      //       let tex = "div 2";
      //       break;
      //     case 2:
      //       let tex = "div 3";
      //       break;
      //     case 3:
      //       let tex = "div 4";
      //       break;
      //   }
      //   document.getElementByClassName("center").innerText = tex;
      // });
      // }
    });
  }, []);

  const getIsMobile = () => window.innerWidth <= 768;

  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(getIsMobile());

    useEffect(() => {
      const onResize = () => {
        setIsMobile(getIsMobile());
      };

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    }, []);

    return isMobile;
  }

  return (
    <div className="flex justify-center">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}');
          `}
      </Script>
      <Head>
        <title>Zodiac House Club Menu</title>
      </Head>
      <div className="min-h-screen bg-fixed flex flex-col justify-between w-screen bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1502807628114-b545fd1cd6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')]">
        {" "}
        {/* [url('https://images.unsplash.com/photo-1492446190781-58ac4285911d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=805&q=80')] */}
        {page === undefined ? (
          <div
            className="flex flex-col justify-center items-center m-6" //flex-col flex-col -mb-48
          >
            <div
              className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] sm:w-[350px] sm:h-[350px] flex flex-col justify-center items-center relative" //relative
            >
              <Image
                src="/logo01.png"
                width={980 / 1.5}
                height={368 / 1.5}
                alt="zodiac logo"
                className="my-9 slit-in-horizontal"
              />
            </div>
            <div
              className="relative left-[0%] bottom-[50%]" //relative left-[0%] bottom-[50%] overflow-hidden w-full flex justify-center items-center
            >
              {/* <svg
                width={"440"}
                height={"440"}
                className="z-50" //absolute block bottom-[0%] left-[calc(50%-220px)]
              >
                <path
                  fill="none"
                  d="M0, 220a220, 220 0 1, 0 440, 0a220, 220 0 1, 0 -440, 0"
                />
                <path
                  fill="none"
                  id="innerCircle"
                  d="M10, 220a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0"
                />
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr unselectable"
                    fill="white"
                    startOffset="11%"
                    onClick={() => setPage("drinks")}
                  >
                    Drinks
                  </textPath>
                </text>
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr unselectable"
                    fill="white"
                    startOffset="22.5%"
                    onClick={() => setPage("drinks2")}
                  >
                    Bebidas
                  </textPath>
                </text>
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr unselectable"
                    fill="white"
                    startOffset="34%"
                    onClick={() => setPage("portions")}
                  >
                    Porções
                  </textPath>
                </text>
              </svg> */}
              {/* <svg
                width="330"
                height="330"
                className="z-50" //absolute block bottom-[0%] left-[calc(50%-220px)]
              >
                <path
                  fill="none"
                  d="M0, 165a165, 165 0 1, 0 330, 0a165, 165 0 1, 0 -330, 0"
                />
                <path
                  fill="none"
                  id="innerCircle"
                  d="M10, 165a150, 150 0 1, 0 300, 0a150, 150 0 1, 0 -300, 0"
                />
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr unselectable"
                    fill="white"
                    startOffset="11%"
                    onClick={() => setPage("drinks")}
                  >
                    Drinks
                  </textPath>
                </text>
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr unselectable"
                    fill="white"
                    startOffset="22.5%"
                    onClick={() => setPage("drinks2")}
                  >
                    Bebidas
                  </textPath>
                </text>
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr unselectable"
                    fill="white"
                    startOffset="34%"
                    onClick={() => setPage("portions")}
                  >
                    Porções
                  </textPath>
                </text>
              </svg> */}
              <svg
                width="220"
                height="220"
                className="z-50 mt-48 " //absolute block bottom-[0%] left-[calc(50%-220px)] -mb-48
              >
                <path
                  fill="none"
                  d="M0, 110a110, 110 0 1, 0 220, 0a110, 110 0 1, 0 -220, 0"
                />
                <path
                  fill="none"
                  id="innerCircle"
                  d="M10, 110a100, 100 0 1, 0 200, 0a100, 100 0 1, 0 -200, 0"
                />
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr unselectable"
                    fill="white"
                    // stroke="green"
                    // strokeWidth={"1rem"}
                    startOffset="6%"
                    onClick={() => setPage("drinks2")}
                  >
                    Bebidas
                  </textPath>
                </text>
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr unselectable"
                    fill="white"
                    startOffset="19%"
                  >
                    |
                  </textPath>
                </text>
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr unselectable"
                    fill="white"
                    startOffset="21%"
                    onClick={() => setPage("portions")}
                  >
                    Porções
                  </textPath>
                </text>
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr unselectable"
                    fill="white"
                    startOffset="34.5%"
                  >
                    |
                  </textPath>
                </text>
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr unselectable"
                    fill="white"
                    startOffset="36.5%"
                    onClick={() => setPage("drinks")}
                  >
                    Drinks
                  </textPath>
                </text>
              </svg>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/arrow-57.svg"
                  width={980 / 20}
                  height={368 / 20}
                  alt="zodiac logo"
                  className="mt-4 -mb-10 ml-24 invert -rotate-[30deg]"
                />
                <h1 className="text-center text-white mt-10 font-[Kristi] text-3xl">
                  Escolha uma categoria
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="flex flex-col">
          {page !== undefined ? (
            <></>
          ) : (
            <></>
            // <div className="flex justify-center my-6 italic">
            //   <div className="text-2xl font-['DM_Serif_Display'] text-white">
            //     Escolha uma categoria
            //   </div>
            // </div>
          )}

          {/* <div className="flex flex-col my-3 w-full">
            <div className="flex items-center text-center justify-evenly -mb-16 tabs z-[5] mx-12">
              <button
                className="bg-[#AF3838] p-2 text-white uppercase hover:bg-[black]"
                onClick={() => setPage("drinks")}
              >
                drinks
              </button>
              <button
                className="bg-[#AF3838] p-2 text-white uppercase hover:bg-[black]"
                onClick={() => setPage("drinks2")}
              >
                bebidas
              </button>
              <button
                className="bg-[#AF3838] p-2 text-white uppercase hover:bg-[black] mb-1"
                onClick={() => setPage("portions")}
              >
                porções
              </button>
            </div>
          </div> */}
        </div>
        {page !== undefined ? (
          <div className="flex">
            {/* <div className="bg-[#AF3838] w-1/6 h-full bar text-center">
              {page === "drinks" ? (
                <div className="flex flex-col items-center justify-center text-white uppercase text-lg m-3 font-['DM_Serif_Display']">
                  drinks
                  <div className="h-[20vh] flex justiy-center mt-6">
                    {IconsByName("gi", "GiWineGlass", "48px")}
                  </div>
                  <div className="h-[20vh] flex justiy-center">
                    {IconsByName("gi", "GiGlassCelebration", "48px")}
                  </div>
                  <div className="h-[20vh] flex justiy-center">
                    {IconsByName("gi", "GiWineBottle", "48px")}
                  </div>
                </div>
              ) : page === "drinks2" ? (
                <div className="flex flex-col items-center justify-center text-white uppercase text-lg m-3 font-['DM_Serif_Display']">
                  bebidas
                  <div className="h-[20vh] flex justiy-center mt-6">
                    {IconsByName("gi", "GiGlassShot", "48px")}
                  </div>
                  <div className="h-[20vh] flex justiy-center">
                    {IconsByName("io5", "IoBeerOutline", "48px")}
                  </div>
                  <div className="h-[20vh] flex justiy-center">
                    {IconsByName("gi", "GiBeerBottle", "48px")}
                  </div>
                </div>
              ) : page === "portions" ? (
                <div className="flex flex-col items-center justify-center text-white uppercase text-lg m-3 font-['DM_Serif_Display']">
                  porções
                  <div className="h-[20vh] flex justiy-center mt-6">
                    {IconsByName("gi", "GiHotMeal", "48px")}
                  </div>
                  <div className="h-[20vh] flex justiy-center">
                    {IconsByName("ci", "CiFries", "48px")}
                  </div>
                  <div className="h-[20vh] flex justiy-center">
                    {IconsByName("io", "IoIosRestaurant", "48px")}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div> */}
            <div className="w-full flex flex-col items-center">
              {/* <div className="w-full bg-white p-9"></div>
              <Row className="flex justify-center">
                <Col className="min-w-max h-full bg-white p-2"></Col>
                <Col className="w-auto">
                  <div className="flex justify-center flex-col items-center">
                    <div className="bg-transparent border-2 rounded-[5rem] flex items-center justify-center scale-in-hor-center">
                      <div className="w-[225px] h-[225px] md:w-[350px] md:h-[350px] sm:w-[300px] sm:h-[300px] flex justify-center items-center">
                        <Image
                          src="/logo03.png"
                          width={927 / 1.5}
                          height={927 / 1.5}
                          alt="ramos logo"
                          className="slit-in-horizontal p-12"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="min-w-fit bg-white"></Col>
              </Row>
              <div className="w-full bg-white p-9"></div> */}
              <div className="box">
                <div className="flex justify-center flex-col items-center">
                  <div className="bg-transparent border-2 rounded-[5rem] flex items-center justify-center scale-in-hor-center">
                    <div className="w-[225px] h-[225px] md:w-[350px] md:h-[350px] sm:w-[300px] sm:h-[300px] flex justify-center items-center relative left-1/2">
                      <Image
                        src="/zodiac-2.svg"
                        width={927 / 1.5}
                        height={927 / 1.5}
                        alt="zodiac logo"
                        className="p-12"
                      />
                      <Image
                        src="/zodiac-1.svg"
                        width={927 / 1.5}
                        height={927 / 1.5}
                        alt="zodiac logo"
                        className="rotate-center p-12 relative -left-[100%] top-0 "
                      />
                    </div>
                  </div>
                </div>
              </div>
              <svg
                width="220"
                height="220"
                className="z-50 absolute top-[200px]" //absolute block bottom-[0%] left-[calc(50%-220px)]
              >
                <path
                  fill="none"
                  d="M0, 110a110, 110 0 1, 0 220, 0a110, 110 0 1, 0 -220, 0"
                />
                <path
                  fill="none"
                  id="innerCircle"
                  d="M10, 110a100, 100 0 1, 0 200, 0a100, 100 0 1, 0 -200, 0"
                />
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr2 unselectable"
                    fill="black"
                    startOffset="4%"
                    onClick={() => setPage("drinks2")}
                  >
                    Bebidas
                  </textPath>
                </text>
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr2 unselectable"
                    fill="black"
                    startOffset="18%"
                  >
                    |
                  </textPath>
                </text>
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr2 unselectable"
                    fill="black"
                    startOffset="20%"
                    onClick={() => setPage("portions")}
                  >
                    Porções
                  </textPath>
                </text>
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr2 unselectable"
                    fill="black"
                    startOffset="34.5%"
                  >
                    |
                  </textPath>
                </text>
                <text>
                  <textPath
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="#innerCircle"
                    className="qr2 unselectable"
                    fill="black"
                    startOffset="36.5%"
                    onClick={() => setPage("drinks")}
                  >
                    Drinks
                  </textPath>
                </text>
              </svg>
              <div className="w-full flex">
                <div className="w-1/12 flex justify-end">
                  <div id="box">
                    <div id="bottom"></div>
                  </div>
                </div>
                <div className="w-10/12 bg-white py-9 rounded-b-3xl border-4 border-white"></div>
                <div className="w-1/12">
                  <div id="box">
                    <div id="left"></div>
                  </div>
                </div>
              </div>

              {page === "drinks" ? (
                <>
                  {/* <div className="flex justify-center flex-col items-center">
                    <div className="bg-gray-600 rounded-[5rem] mx-3 flex items-center justify-center scale-in-hor-center">
                      <div className="w-[225px] h-[225px] md:w-[350px] md:h-[350px] sm:w-[300px] sm:h-[300px] flex justify-center items-center">
                        <Image
                          src="/logo03.png"
                          width={927 / 1.5}
                          height={927 / 1.5}
                          alt="ramos logo"
                          className="slit-in-horizontal p-12"
                        />
                      </div>
                    </div>
                  </div> */}
                  <ComSection type={"item"} title={"drinks"} items={drinks} />
                  {/* <div className="text-center">
                    <div className="w-1/6"></div>
                    <div className="mx-9 sm:w-5/6 uppercase">
                      em dia de música ao vivo couvert obrigatório
                    </div>
                  </div> */}
                  {/* <ComSection
                    type={"item"}
                    title={"drinks do zodíaco"}
                    items={zodiac}
                  />
                  <ComSection
                    type={"item"}
                    title={"cardápio primavera & verão"}
                    items={summer}
                  /> */}
                </>
              ) : (
                <></>
              )}
              {page === "drinks2" ? (
                <>
                  {/* <div className="flex justify-center flex-col items-center">
                    <div className="bg-gray-600 rounded-[5rem] mx-3 flex items-center justify-center scale-in-hor-center">
                      <div className="w-[225px] h-[225px] md:w-[350px] md:h-[350px] sm:w-[300px] sm:h-[300px] flex justify-center items-center">
                        <Image
                          src="/ramosLogo.png"
                          width={566 / 4}
                          height={836 / 4}
                          alt="ramos logo"
                          className="slit-in-horizontal"
                        />
                      </div>
                    </div>
                  </div> */}
                  <ComSection type={"item"} title={"cervejas"} items={beers} />
                  <ComSection type={"item"} title={"doses"} items={shots} />
                  <ComSection
                    type={"item"}
                    title={"diversos"}
                    items={various}
                  />
                  <ComSection type={"item"} title={"combos"} items={combos} />
                  {/* <ComSection
                    type={"item"}
                    title={"shots"}
                    items={drinkshots}
                  />
                  <ComSection
                    type={"item"}
                    title={"drinks sem álcool"}
                    items={nonalcoholicdrinks}
                  />
                  <ComSection
                    type={"bullet"}
                    title={"cervejas"}
                    items={beers}
                  />
                  <ComSection
                    type={"bullet"}
                    title={"bebidas sem álcool"}
                    items={nonalcoholic}
                  />
                  <ComSection type={"bullet"} title={"doses"} items={shots} />
                  <ComSection
                    type={"bullet"}
                    title={"aperitivos"}
                    items={appetizer}
                  /> */}
                </>
              ) : (
                <></>
              )}
              {page === "portions" ? (
                <>
                  {/* <div className="flex justify-center flex-col items-center">
                    <div className="bg-gray-600 rounded-[5rem] mx-3 flex items-center justify-center scale-in-hor-center">
                      <div className="w-[225px] h-[225px] md:w-[350px] md:h-[350px] sm:w-[300px] sm:h-[300px] flex justify-center items-center">
                        <Image
                          src="/ramosLogo.png"
                          width={566 / 4}
                          height={836 / 4}
                          alt="ramos logo"
                          className="slit-in-horizontal"
                        />
                      </div>
                    </div>
                  </div> */}
                  <ComSection
                    type={"item"}
                    title={"porções"}
                    items={portions}
                  />
                  {/* <ComSection
                    type={"item"}
                    title={"porções"}
                    items={portions}
                  />
                  <div className="text-center">
                    <div className="w-1/6"></div>
                    <div className="mx-9 sm:w-5/6 uppercase">
                      *meia porção será cobrado o valor de 70%*
                    </div>
                  </div> */}
                  {/* <ComSection
                    type={"item"}
                    title={"porções individuais"}
                    items={individualportions}
                  /> */}
                </>
              ) : (
                <></>
              )}
            </div>
            <div></div>
          </div>
        ) : (
          <></>
        )}
        <Footer />
        <Button
          className="fixed bottom-0 left-3 border-2 border-white -mb-1 bg-slate-700 text-white rounded-t-lg py-1 px-2 font-['Josefin_Sans'] text-xs"
          onClick={(event) => (window.location.href = "https://czar.dev/")}
        >
          <span
            className="inline-block align-top scale-x-[-1]"
            style={{
              filter: "fliph",
            }}
          >
            C
          </span>
          ZAR+{/* </link> */}
        </Button>
      </div>
    </div>
  );
}
