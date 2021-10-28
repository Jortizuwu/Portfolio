import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropright, IoIosFlame } from "react-icons/io";

import { bio, postInfo, skills, social } from "../assets/myInfo";
import { CardLink } from "../components/CardLink";

const Home = () => {
  return (
    <>
      <div className="px-5 sm:px-0 bg-secondary py-3 text-center rounded-xl font-semibold text-white">
        <p>Hello, i am a frontend developer based in Colombia!</p>
      </div>
      <div className="flex flex-col justify-between lg:flex-row mt-6">
        <div className="w-full lg:w-3/4">
          <h2 className="text-3xl font-bold">Jose Ortiz</h2>
          <p>Frontend developer ( React / Postgresql / Docker )</p>
        </div>
        <figure className="mx-auto mt-3 w-24 h-24 rounded-full border-2 border-white overflow-hidden">
          <Image
            src="/images/jojo.jpeg"
            alt="alt"
            objectFit="cover"
            height={100}
            width={100}
          />
        </figure>
      </div>

      <div className="mt-4">
        <div className="w-20">
          <h3 className="font-bold text-lg text_underline mb-2">Work 👩‍💻</h3>
        </div>
        <p>
          <span className="ml-3">Hola</span> Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Totam debitis facere laudantium laborum
          nulla recusandae obcaecati, illum autem nemo voluptate dolor amet
          ipsum possimus consectetur itaque nam dolores alias eligendi!
        </p>
        <div className="flex justify-center items-center mt-3">
          <Link href="/works">
            <a className="btn hover:bg-purple-600 bg-purple-500 flex items-center ring-purple-400 ring-offset-purple-200 space-x-2">
              My portfolio
              <IoMdArrowDropright />
            </a>
          </Link>
        </div>
      </div>

      <div className="mt-4 w-full">
        <div className="w-16">
          <h3 className="font-bold text-lg text_underline mb-2">Bio 🧏</h3>
        </div>
        <ul className="mt-2">
          {bio.map(({ age, descrition }, i) => (
            <li key={i} className="flex w-full space-x-5 ">
              <span className="font-bold">{age}</span>
              <p>{descrition}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 w-full">
        <div className="w-16">
          <h3 className="font-bold text-lg text_underline mb-2">Skills 🧏</h3>
        </div>
        <ul className="mt-2">
          {skills.map(({ ico, name }, i) => (
            <li key={i} className="flex space-y-5 flex-row items-center w-28">
              {name}
              {ico ? ico : <IoIosFlame className="ml-2" />}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <div className="w-9">
          <div className="font-bold text-lg text_underline">I ❤️</div>
        </div>
        <p className="mt-2">
          <span className="ml-3">Anime</span>, Video games, Music, Piano,
          Violin, Art, Study
        </p>
      </div>

      <div className="mt-4 w-auto">
        <div className="w-40">
          <div className="font-bold text-lg text_underline">
            Social network 📖
          </div>
        </div>
        <ul className="w-auto mt-1">
          {social.map(({ ico, name, url }) => (
            <li
              key={url}
              className="text-purple-500 font-bold list-b hover:bg-purple-400 p-2 w-auto"
            >
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 ml-3"
              >
                {ico} <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 w-full text-center ">
        {postInfo.map(({ descrition, id, img, title, url }) => (
          <CardLink
            key={id}
            descrition={descrition}
            img={img}
            url={url}
            title={title}
            dinamic={false}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
