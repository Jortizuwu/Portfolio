import Link from "next/link";
import Image from "next/image";

export const CardLink = ({
  id,
  title,
  descrition,
  img,
  dinamic = true,
  url,
}) => {
  if (!dinamic) {
    return (
      <a
        className="p-2 text-center"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <figure className="h-36 w-full rounded-lg overflow-hidden">
          <Image
            src={img}
            alt={`image for ${title}`}
            height={100}
            width={100}
            quality={100}
            sizes={[320, 520]}
            objectFit="cover"
            loading="lazy"
            objectPosition="center"
          />
        </figure>
        <div className="mt-2">
          <h2 className="text-base capitalize font-semibold">{title}</h2>
          <p className="text-sm text-center">{descrition}</p>
        </div>
      </a>
    );
  }

  return (
    <Link href={`/work/${id}`} key={id}>
      <a className="text-center flex flex-col">
        <figure className="h-36 w-full rounded-2xl overflow-hidden">
          <Image
            src={img}
            alt={`image for ${title}`}
            height={100}
            width={100}
            quality={100}
            sizes={[320, 520]}
            objectFit="cover"
            objectPosition="center"
          />
        </figure>
        <div className="mt-2">
          <h2 className="text-base capitalize font-semibold">{title}</h2>
          <p className="text-sm w-full text-center">{descrition}</p>
        </div>
      </a>
    </Link>
  );
};
