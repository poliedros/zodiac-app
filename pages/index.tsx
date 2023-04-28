import Head from "next/head";
import Script from "next/script";
import catalog from "../catalog.json";
import ComSection from "@/components/comSection";
import { useState } from "react";
const GA_TRACKING_ID = "G-KVQPS7V7HZ";
import Image from "next/image";

function colorfulText(text: string) {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
      {text}
    </span>
  );
}

function Bullet(props: { name: string; price: string }) {
  const { name, price } = props;
  return (
    <li>
      <b>{name}</b> {price !== "" ? "R$" + price : ""}
    </li>
  );
}

function Item(props: {
  index: string;
  name: string;
  price: string;
  description: string;
}) {
  const { index, name, price, description } = props;
  return (
    <div>
      <p>
        {index}. <b>{name}</b> R${price}
      </p>
      <p>{description}</p>
    </div>
  );
}

function Footer() {
  const today = new Date();

  return (
    <footer>
      <span className="flex m-3 items-center justify-evenly text-lg text-gray-500 sm:text-center dark:text-gray-400">
        Desenvolvido por:{" "}
        <div className="flex">
          <div className="bg-[#282C35] rounded-full w-[85px] h-[85px] mx-3 flex items-center justify-center">
            <a
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
              href="https://czar.dev/"
              className="hover:underline"
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
        {/* <div className="flex">
          <div className="bg-[#AF3838] w-1/6 h-full bar"></div>
          <h1 className="mb-4 ml-9 w-full text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Cardápio Ramos
          </h1>
        </div> */}

        {page === undefined ? (
          <div className="flex justify-center flex-col items-center m-6">
            <Image
              src="/ramosLogo.png"
              width={566 / 4}
              height={836 / 4}
              alt="ramos logo"
              className="my-9"
            />
          </div>
        ) : (
          <></>
        )}

        <div className="flex">
          <div className="w-1/6 h-full bar"></div>
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

        {page !== "" ? (
          <div className="flex">
            <div className="bg-[#AF3838] w-1/6 h-full bar"></div>
            <div className="w-full">
              {page === "drinks" ? (
                <>
                  <div className="flex justify-center flex-col items-center">
                    <Image
                      src="/ramosLogo.png"
                      width={566 / 3}
                      height={836 / 3}
                      alt="ramos logo"
                      className="mt-9"
                    />
                  </div>
                  <ComSection type={"item"} title={"drinks"} items={drinks} />
                  <div>EM DIA DE MÚSICA AO VIVO COUVERT OBRIGATÓRIO</div>
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
                    <Image
                      src="/ramosLogo.png"
                      width={566 / 3}
                      height={836 / 3}
                      alt="ramos logo"
                      className="mt-9"
                    />
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
                    <Image
                      src="/ramosLogo.png"
                      width={566 / 3}
                      height={836 / 3}
                      alt="ramos logo"
                      className="mt-9"
                    />
                  </div>
                  <ComSection
                    type={"item"}
                    title={"porções"}
                    items={portions}
                  />
                  <div>*MEIA PORÇÃO SERÁ COBRADO O VALOR DE 70%*</div>
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
          <div className="text-2xl">Escolha uma categoria</div>
        )}

        {/* <div>
          <h2 className="text-4xl font-bold dark:text-white">
            {colorfulText("DRINKS")}
          </h2>
          <div className="space-y-3">
            {drinks.map((drink) => (
              <Item
                key={drink.index}
                index={drink.index}
                name={drink.name}
                price={drink.price}
                description={drink.description}
              />
            ))}
          </div>
        </div>

        <div>EM DIA DE MÚSICA AO VIVO COUVERT OBRIGATÓRIO</div>

        <br />

        <div>
          <h2 className="text-4xl font-bold dark:text-white">
            {colorfulText("DRINKS DO ZODÍACO")}
          </h2>
          <div className="space-y-3">
            {zodiac.map((drink) => (
              <Item
                key={drink.index}
                index={drink.index}
                name={drink.name}
                price={drink.price}
                description={drink.description}
              />
            ))}
          </div>
        </div>

        <br />

        <div>
          <h2 className="text-4xl font-bold dark:text-white">
            {colorfulText("CARDÁPIO PRIMAVERA & VERÃO")}
          </h2>
          <div className="space-y-3">
            {summer.map((drink) => (
              <Item
                key={drink.index}
                index={drink.index}
                name={drink.name}
                price={drink.price}
                description={drink.description}
              />
            ))}
          </div>
        </div>

        <br />

        <div>
          <h2 className="text-4xl font-bold dark:text-white">
            {colorfulText("SHOTS")}
          </h2>
          <div className="space-y-3">
            {drinkshots.map((drink) => (
              <Item
                key={drink.index}
                index={drink.index}
                name={drink.name}
                price={drink.price}
                description={drink.description}
              />
            ))}
          </div>
        </div>

        <br />

        <div>
          <h2 className="text-4xl font-bold dark:text-white">
            {colorfulText("DRINKS SEM ÁLCOOL")}
          </h2>
          <div className="space-y-3">
            {nonalcoholicdrinks.map((drink) => (
              <Item
                key={drink.index}
                index={drink.index}
                name={drink.name}
                price={drink.price}
                description={drink.description}
              />
            ))}
          </div>
        </div>

        <br />

        <div>
          <h2 className="text-4xl font-bold dark:text-white">
            {colorfulText("CERVEJAS")}
          </h2>
          <div className="space-y-3">
            <ul className="max-w-md space-y-1 list-disc list-inside">
              {beers.map((beer) => (
                <Bullet key={beer.name} name={beer.name} price={beer.price} />
              ))}
            </ul>
          </div>
        </div>

        <br />

        <div>
          <h2 className="text-4xl font-bold dark:text-white">
            {colorfulText("BEBIDAS SEM ÁLCOOL")}
          </h2>
          <div className="space-y-3">
            <ul className="max-w-md space-y-1 list-disc list-inside">
              {nonalcoholic.map((drink) => (
                <Bullet
                  key={drink.name}
                  name={drink.name}
                  price={drink.price}
                />
              ))}
            </ul>
          </div>
        </div>

        <br />

        <div>
          <h2 className="text-4xl font-bold dark:text-white">
            {colorfulText("SHOTS")}
          </h2>
          <div className="space-y-3">
            <ul className="max-w-md space-y-1 list-disc list-inside">
              {shots.map((shot) => (
                <Bullet key={shot.name} name={shot.name} price={shot.price} />
              ))}
            </ul>
          </div>
        </div>

        <br />

        <div>
          <h2 className="text-4xl font-bold dark:text-white">
            {colorfulText("APERITIVOS")}
          </h2>
          <div className="space-y-3">
            <ul className="max-w-md space-y-1 list-disc list-inside">
              {appetizer.map((shot) => (
                <Bullet key={shot.name} name={shot.name} price={shot.price} />
              ))}
            </ul>
          </div>
        </div>

        <br />

        <div>
          <h2 className="text-4xl font-bold dark:text-white">
            {colorfulText("PORÇÕES")}
          </h2>
          <div className="space-y-3">
            {portions.map((portion) => (
              <Item
                key={portion.index}
                index={portion.index}
                name={portion.name}
                price={portion.price}
                description={portion.description}
              />
            ))}
          </div>
        </div>

        <div>*MEIA PORÇÃO SERÁ COBRADO O VALOR DE 70%*</div>

        <br />

        <div>
          <h2 className="text-4xl font-bold dark:text-white">
            {colorfulText("PORÇÕES INDIVIDUAIS")}
          </h2>
          <div className="space-y-3">
            {individualportions.map((portion) => (
              <Item
                key={portion.index}
                index={portion.index}
                name={portion.name}
                price={portion.price}
                description={portion.description}
              />
            ))}
          </div>
        </div> */}
        <div className="my-6 flex justify-center">
          <div className="border-b-4 border-[#AF3838] w-5/6" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
