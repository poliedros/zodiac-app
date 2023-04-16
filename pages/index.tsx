import Head from "next/head";
import Script from "next/script";
import catalog from "../catalog.json";
const GA_TRACKING_ID = "G-KVQPS7V7HZ";

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
  return (
    <footer>
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Desenvolvido em São João del-Rei - 2023{" "}
        <a href="https://czar.dev/" className="hover:underline">
          pela CZAR+™
        </a>
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

      <div className="flex flex-col">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Cardápio Ramos
        </h1>

        <div>
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
        </div>

        <Footer />
      </div>
    </div>
  );
}
