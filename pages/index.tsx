import Head from "next/head";
import Script from "next/script";
import catalog from "../catalog.json";
import ComSection from "@/components/comSection";
import { useState } from "react";
const GA_TRACKING_ID = "G-KVQPS7V7HZ";
import Image from "next/image";
import { Button, Col, Row } from "react-bootstrap";
import IconsByName from "./../components/iconsByName";

function Footer() {
  const today = new Date();

  return (
    <footer className="mb-6">
      <Row className="flex m-3 items-center justify-evenly text-lg text-gray-500 sm:text-center flex-col sm:flex-row">
        <Col sm={4}>Desenvolvido por: </Col>
        <Col sm={4} className="flex">
          <div className="bg-[#282C35] rounded-3xl p-3 mx-3 flex items-center justify-center">
            <a className="font-['Josefin_Sans']" href="https://czar.dev/">
              <Image
                src="/czarLogo1.png"
                alt={"Czar+"}
                width={270 / 4}
                height={140 / 4}
                //className="rounded-[5rem]"
              />
            </a>
          </div>
        </Col>
        <Col sm={4} className="text-center">
          São João del-Rei - MG | {today.getFullYear()}
        </Col>
      </Row>
    </footer>
  );
}

export default function Home() {
  const drinks = catalog["drinks"];
  const zodiac = catalog["zodiac"];
  const summer = catalog["summer"];
  const drinkshots = catalog["drinkshots"];
  const nonalcoholicdrinks = catalog["nonalcoholicdrinks"];
  const beers = catalog["beers"];
  const nonalcoholic = catalog["nonalcoholic"];
  const shots = catalog["shots"];
  const appetizer = catalog["appetizer"];
  const portions = catalog["portions"];
  const individualportions = catalog["individualportions"];

  const [page, setPage] = useState<string>();

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
        <title>Cardápio Ramos</title>
      </Head>

      <div className="flex flex-col w-screen">
        {page === undefined ? (
          <div className="flex justify-center flex-col items-center m-6">
            <div className="bg-gray-600 rounded-[5rem] mx-3 flex items-center justify-center scale-in-hor-center">
              <div className="w-[225px] h-[225px] md:w-[350px] md:h-[350px] sm:w-[300px] sm:h-[300px] flex justify-center items-center">
                <Image
                  src="/ramosLogo.png"
                  width={566 / 4}
                  height={836 / 4}
                  alt="ramos logo"
                  className="my-9 slit-in-horizontal"
                />
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
            // <div className="w-1/6 h-full bar"></div>
            <div className="flex  justify-center my-6 italic">
              <div
                style={{ fontFamily: "'DM Serif Display', serif" }}
                className="text-2xl"
              >
                Escolha uma categoria
              </div>
            </div>
          )}

          <div className="flex flex-col my-3 w-full">
            <div className="flex items-center text-center justify-evenly -mb-16 tabs z-[5] mx-12">
              <button
                className="bg-[#AF3838] p-2 text-white uppercase hover:bg-[black] rounded-t-lg"
                onClick={() => setPage("drinks")}
              >
                drinks
              </button>
              <button
                className="bg-[#AF3838] p-2 text-white uppercase hover:bg-[black] rounded-t-lg"
                onClick={() => setPage("drinks2")}
              >
                bebidas
              </button>
              <button
                className="bg-[#AF3838] p-2 text-white uppercase hover:bg-[black] rounded-t-lg mb-1"
                onClick={() => setPage("portions")}
              >
                porções
              </button>
            </div>
            <div
              className="flex items-center justify-evenly w-full h-[170px] bg-[url('/ramosBook.png')] bg-no-repeat bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 100%), url('./ramosBook.png')",
              }}
            ></div>
          </div>
        </div>

        {page !== undefined ? (
          <div className="flex">
            <div className="bg-[#AF3838] w-1/6 h-full bar text-center">
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
            </div>
            <div className="w-full">
              {page === "drinks" ? (
                <>
                  <div className="flex justify-center flex-col items-center">
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
                  </div>
                  <ComSection type={"item"} title={"drinks"} items={drinks} />
                  <div className="text-center">
                    <div className="w-1/6"></div>
                    <div className="mx-9 sm:w-5/6 uppercase">
                      em dia de música ao vivo couvert obrigatório
                    </div>
                  </div>
                  <ComSection
                    type={"item"}
                    title={"drinks do zodíaco"}
                    items={zodiac}
                  />
                  <ComSection
                    type={"item"}
                    title={"cardápio primavera & verão"}
                    items={summer}
                  />
                </>
              ) : (
                <></>
              )}
              {page === "drinks2" ? (
                <>
                  <div className="flex justify-center flex-col items-center">
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
                  </div>
                  <ComSection
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
                  />
                </>
              ) : (
                <></>
              )}
              {page === "portions" ? (
                <>
                  <div className="flex justify-center flex-col items-center">
                    <div className="bg-gray-600 rounded-[5rem] mx-3 flex items-center justify-center scale-in-hor-center">
                      {" "}
                      {/* w-[90vw] h-[90vw] */}
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
                  </div>
                  <ComSection
                    type={"item"}
                    title={"porções"}
                    items={portions}
                  />
                  <div className="text-center">
                    <div className="w-1/6"></div>
                    <div className="mx-9 sm:w-5/6 uppercase">
                      *meia porção será cobrado o valor de 70%*
                    </div>
                  </div>
                  <ComSection
                    type={"item"}
                    title={"porções individuais"}
                    items={individualportions}
                  />
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="my-6 flex justify-center">
          <div className="border-b-4 border-[#AF3838] w-5/6" />
        </div>
        <Footer />
        <Button
          className="fixed bottom-0 left-3 bg-black text-white rounded-t-lg py-1 px-2 font-['Josefin_Sans']"
          onClick={(event) => (window.location.href = "https://czar.dev/")}
        >
          {/* <link href={"https://czar.dev/"}> */}{" "}
          <span
            className="inline-block align-top scale-x-[-1]"
            style={{
              filter: "fliph",
            }}
          >
            C
          </span>
          +{/* </link> */}
        </Button>
      </div>
    </div>
  );
}
