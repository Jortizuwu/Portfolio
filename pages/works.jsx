import React from "react";

import { worksInfo } from "../assets/myInfo";
import { CardLink } from "../components/CardLink";

const Works = () => {
  return (
    <>
      <h1 className="font-bold text-lg">Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-3">
        {worksInfo.map(({ descrition, img, title, id }) => (
          <CardLink
            key={id}
            descrition={descrition}
            img={img}
            title={title}
            id={id}
          />
        ))}
      </div>
    </>
  );
};

export default Works;
