import React from "react";
import Button from "../../components/common/Button";
import Image from "../../assets/Error404.svg";
const Error = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex w-full max-w-lg flex-col items-center justify-center gap-6">
        {/* 404 Image */}
        <img src={Image} alt="404" width={350} height={350} />
        {/* Title */}
        <span className="text-3xl font-bold">Thunder 404</span>
        {/* Description */}
        <p className="text-justify text-xl font-normal text-gray-600">
          Whoops! Looks like you've hit a digital dead end. The elusive 404 Not
          Found page has claimed another victim. Fear not, brave adventurer!
          Simply click on the button below to return to the safety of the
          homepage and continue your digital quest. Happy trails!
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
};

export default Error;
