import React from "react";

const Title = ({ subTitle, title }) => {
  return (
    <div className="text-center text-primary2 text-sm font-semibold my-16">
      <p className="uppercase">{subTitle}</p>
      <h2 className="text-xl sm:text-2xl md:text-3xl text-primary1 mt-1">
        {title}
      </h2>
    </div>
  );
};

export default Title;
