import catalog from "../catalog.json";

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
      <b>{name}</b> R${price}
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
      </div>
    </div>
  );
}
