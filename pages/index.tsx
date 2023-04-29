import Head from "next/head";
import Script from "next/script";
import catalog from "../catalog.json";
import ComSection from "@/components/comSection";
import { useState } from "react";
const GA_TRACKING_ID = "G-KVQPS7V7HZ";
import Image from "next/image";

function Footer() {
  const today = new Date();

  return (
    <footer>
      <span className="flex m-3 items-center justify-evenly text-lg text-gray-500 sm:text-center">
        Desenvolvido por:{" "}
        <div className="flex">
          <div className="bg-[#282C35] rounded-full w-[85px] h-[85px] mx-3 flex items-center justify-center">
            <a
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              href="https://czar.dev/"
            >
              <Image
                src={"/czarLogo.png"}
                alt={"Czar+"}
                width={270 / 4}
                height={140 / 4}
              />
            </a>
          </div>
        </div>
        <div className="text-right">
          São João del-Rei - MG | {today.getFullYear()}
        </div>
      </span>
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
            <div className="bg-gray-600 rounded-3xl w-[250px] h-[250px] mx-3 flex items-center justify-center">
              <Image
                src="/ramosLogo.png"
                width={566 / 4}
                height={836 / 4}
                alt="ramos logo"
                className="my-9"
              />
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="flex">
          {page !== undefined ? (
            <div className="w-1/6 h-full bar"></div>
          ) : (
            <></>
          )}
          <div className="flex justify-evenly text-center my-3 w-full">
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
              className="bg-[#AF3838] p-2 text-white uppercase hover:bg-[black]"
              onClick={() => setPage("portions")}
            >
              porções
            </button>
          </div>
        </div>

        {page !== undefined ? (
          <div className="flex">
            <div className="bg-[#AF3838] w-1/6 h-full bar"></div>
            <div className="w-full">
              {page === "drinks" ? (
                <>
                  <div className="flex justify-center flex-col items-center mt-9">
                    <div className="bg-gray-600 rounded-3xl w-[325px] h-[325px] mx-3 flex items-center justify-center">
                      <Image
                        src="/ramosLogo.png"
                        width={566 / 3}
                        height={836 / 3}
                        alt="ramos logo"
                      />
                    </div>
                  </div>
                  <ComSection type={"item"} title={"drinks"} items={drinks} />
                  <div className="text-center">
                    <div className="w-1/6"></div>
                    <div className="mx-9 w-5/6 uppercase">
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
                  <div className="flex justify-center flex-col items-center mt-9">
                    <div className="bg-gray-600 rounded-3xl w-[325px] h-[325px] mx-3 flex items-center justify-center">
                      <Image
                        src="/ramosLogo.png"
                        width={566 / 3}
                        height={836 / 3}
                        alt="ramos logo"
                      />
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
                  <div className="flex justify-center flex-col items-center mt-9">
                    <div className="bg-gray-600 rounded-3xl w-[325px] h-[325px] mx-3 flex items-center justify-center">
                      <Image
                        src="/ramosLogo.png"
                        width={566 / 3}
                        height={836 / 3}
                        alt="ramos logo"
                      />
                    </div>
                  </div>
                  <ComSection
                    type={"item"}
                    title={"porções"}
                    items={portions}
                  />
                  <div className="text-center">
                    <div className="w-1/6"></div>
                    <div className="mx-9 w-5/6 uppercase">
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
          <div className="flex justify-center my-6 italic">
            <div
              style={{ fontFamily: "'DM Serif Display', serif" }}
              className="text-2xl"
            >
              Escolha uma categoria
            </div>
          </div>
        )}
        <div className="my-6 flex justify-center">
          <div className="border-b-4 border-[#AF3838] w-5/6" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
