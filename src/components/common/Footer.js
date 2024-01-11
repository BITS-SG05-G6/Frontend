import Text from "./Text";

const Footer = () => {
  return (
    <div className=" bg-white m-4 class= lg:py-6 lg:m-0 mt-10 border-t ">
      <section className="container grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-8 lg:mx-auto">
        <p className="flex items-center mt-6 lg:mt-0 lg:col-span-6 text-16 leading-24 text-dark-brown">
          © 2023 WiseWallet Technology Co., Ltd. All rights reserved.
        </p>
        <div className="flex flex-col lg:flex-row justify-center gap-y-4 lg:col-span-5 lg:gap-x-4">
          <a class="flex items-center leading-24 text-16 font-medium text-dark-brown hover:underline">
            About Us
          </a>
          <a className="flex items-center leading-24 text-16 font-medium text-dark-brown hover:underline">
            Why Us?
          </a>
          <a className="flex items-center leading-24 text-16 font-medium text-dark-brown hover:underline">
            Term and Service
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
