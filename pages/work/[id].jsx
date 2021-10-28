import { useRouter } from "next/router";
import Link from "next/link";
import { IoCaretForward, IoCreateOutline } from "react-icons/io5";
import Image from "next/image";

import { worksInfo } from "../../assets/myInfo";

const MoreInfo = () => {
  const { query } = useRouter();
  const data = worksInfo.find(({ id }) => id === query.id);

  if (!data) {
    return (
      <div>
        <h1>no existe</h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center">
        <Link href="/works">
          <a className="text-purple-500 hover:underline">Works</a>
        </Link>
        <div className="flex items-center ml-3">
          <IoCaretForward />
          <h1 className="ml-3 capitalize font-bold text-lg">
            {data.title}
            <span className="ml-2 text-xs bg-secondary px-1">{data.date}</span>
          </h1>
        </div>
      </div>
      <p className="mt-3">{data.descrition}</p>
      <div className="mt-3 ml-4 text-sm space-y-2">
        <div className="">
          <h4 className="uppercase inline-block text-xs p-0.5 bg-green-500 bg-opacity-60 text-green-300 font-bold">
            Website
          </h4>
          <a
            className="ml-3 hover:underline text-purple-500"
            href={data.webUrl}
            target="_blank"
            rel="noreferrer"
          >
            {data.webUrl}
            <IoCreateOutline className="inline-block ml-2 text-" />
          </a>
        </div>
        <div className="">
          <h4 className="uppercase inline-block text-xs p-0.5 bg-green-500 bg-opacity-60 text-green-300 font-bold">
            code
          </h4>
          <a
            className="ml-3 hover:underline text-purple-500"
            href={data.webUrl}
            target="_blank"
            rel="noreferrer"
          >
            {data.codeUrl}
            <IoCreateOutline className="inline-block ml-2 text-center" />
          </a>
        </div>
        {data.colaborardor && (
          <div className="">
            <h4 className="uppercase inline-block text-xs p-0.5 bg-green-500 bg-opacity-60 text-green-300 font-bold">
              collaborator
            </h4>
            <a
              className="ml-3 hover:underline text-pink-500"
              href={data.colaborardor.gitProfileUrl}
              target="_blank"
              rel="noreferrer"
            >
              {data.colaborardor.name}
              <IoCreateOutline className="inline-block ml-2 text-" />
            </a>
          </div>
        )}
        <div className="">
          <h4 className="uppercase inline-block text-xs p-0.5 bg-green-500 bg-opacity-60 text-green-300 font-bold">
            platafrom
          </h4>
          <p className="inline-block ml-3 capitalize">{data.platform}</p>
        </div>
        <div className="">
          <h4 className="uppercase inline-block text-xs p-0.5 bg-green-500 bg-opacity-60 text-green-300 font-bold">
            stack
          </h4>
          <p className="inline-block ml-3 capitalize">{data.stack}</p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-4">
        {data.moreImg.map((img, idx) => (
          <div key={idx} className="space-y-3 ">
            <Image
              src={img}
              alt={`image for `}
              height={100}
              width={100}
              quality={100}
              sizes={[320, 520]}
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};
//
export default MoreInfo;
