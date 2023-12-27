import React from "react";
import Button from "../components/common/Button";
const Error = () => {
  return (
    <>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto">
          <div className="flex flex-col items-center justify-center h-[90vh]">
            <p className="text-[#EF5DA8] text-7xl mb-4 font-bold">404</p>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page.
            </p>
            <Button variant="cirFill" size="lg" href="#">
              Back to Homepage
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
