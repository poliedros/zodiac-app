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
            {/* <Image
              src="/ramosLogo.png"
              width={566 / 3}
              height={836 / 3}
              alt="ramos logo"
              className="mb-9"
            /> */}
            <div className="border-b-4 border-[#AF3838] w-5/6" />
          </div>
          <h2
            style={{ fontFamily: "'DM Serif Display', serif" }}
            className="capitalize text-center text-6xl my-9"
          >
            {props.title}
          </h2>
          {/* <table className="w-full">
            {props.items.map((item: any, i: number) => (
              <>
                <tr key={i} className="text-3xl">
                  <td className="w-1/6 pr-3">{item.index}.</td>
                  <td className="w-3/6">
                    <b>{item.name}</b>
                  </td>
                  <td className="w-2/6 text-right pl-3 sm:w-full">
                    <b>
                      R$
                      {/* <span className="text-2xl"> /}
                      {item.price.split(",")[0]},{/* </span> /}
                      {item.price.split(",")[1]}
                    </b>
                  </td>
                </tr>
                <tr key={i} className="text-2xl">
                  <td className="w-auto"></td>
                  <td>{item.description}</td>
                </tr>
                <div className="pb-4"></div>
              </>
            ))}
          </table> */}
          <div className="w-full">
            {props.items.map((item: any, i: number) => (
              <>
                <div key={i} className="text-3xl flex line">
                  <div className="flex w-4/6">
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
                  <div className="w-5/6">{item.description}</div>
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
          {/* <table className="w-full text-3xl">
            {props.items.map((item: any, i: number) => (
              <>
                <tr key={i}>
                  <td className="w-10 text-right pl-6">
                    <li></li>
                  </td>
                  <td>
                    <b>{item.name}</b>
                  </td>
                  <td className="w-20 text-right">
                    <b>
                      R$
                      {/* <span className="text-2xl"> /}
                      {item.price.split(",")[0]},{/* </span> /}
                      {item.price.split(",")[1]}
                    </b>
                  </td>
                </tr>
                <div className="pb-4"></div>
              </>
            ))}
          </table> */}
          <div className="w-full text-3xl">
            {props.items.map((item: any, i: number) => (
              <>
                <div key={i} className="flex line">
                  <div className="flex w-3/6">
                    <div className="text-right pl-6">
                      <li></li>
                    </div>
                    <div>
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
