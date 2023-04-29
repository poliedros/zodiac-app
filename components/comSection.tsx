export default function ComSection(props: {
  type: string;
  title: string;
  items: any;
}) {
  return (
    <>
      {props.type === "item" ? (
        <div className="mx-9 mt-9">
          <div className="flex justify-center flex-col items-center">
            <div className="border-b-4 border-[#AF3838] w-5/6" />
          </div>
          <h2
            style={{ fontFamily: "'DM Serif Display', serif" }}
            className="capitalize text-center text-6xl my-9"
          >
            {props.title}
          </h2>
          <div className="w-full">
            {props.items.map((item: any, i: number) => (
              <>
                <div key={i} className="text-3xl flex line">
                  <div className="flex w-4/6 name">
                    <div className="pr-3">{item.index}.</div>
                    <div className="">
                      <b>{item.name}</b>
                    </div>
                  </div>
                  <div className="w-2/6 text-right pl-3 price">
                    <b>
                      {item.price.split(",")[0].length !== 0
                        ? "R$" +
                          /* <span className="text-2xl"> */
                          item.price.split(",")[0] +
                          "," /* </span> */ +
                          item.price.split(",")[1]
                        : item.price}
                    </b>
                  </div>
                </div>
                <div key={i} className="text-2xl">
                  <div className="w-1/6"></div>
                  <div className="w-5/6 name">{item.description}</div>
                </div>
                <div className="pb-4"></div>
              </>
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-9 mt-9">
          <div className="flex justify-center flex-col items-center">
            <div className="border-b-4 border-[#AF3838] w-5/6" />
          </div>
          <h2
            style={{ fontFamily: "'DM Serif Display', serif" }}
            className="capitalize text-center text-6xl my-9"
          >
            {props.title}
          </h2>
          <div className="w-full text-3xl">
            {props.items.map((item: any, i: number) => (
              <>
                <div key={i} className="flex line">
                  <div className="flex w-3/6 name">
                    <div className="text-right pl-6">
                      <li></li>
                    </div>
                    <div className="">
                      <b>{item.name}</b>
                    </div>
                  </div>
                  <div className="w-3/6 text-right price">
                    <b>
                      {item.price.split(",")[0].length < 10
                        ? "R$" +
                          /* <span className="text-2xl"> */
                          item.price.split(",")[0] +
                          "," /* </span> */ +
                          item.price.split(",")[1]
                        : item.price}
                    </b>
                  </div>
                </div>
                <div className="pb-4"></div>
              </>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
