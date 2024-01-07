import React from "react";
import Down from "../svgs/Down";
import English from "../svgs/English";
import Button from "./Button";
import Text from "./Text";
import { Link } from "react-scroll";
const NavBar = () => {
  return (
    <div className="flex justify-between my-4 mx-6 items-center">
      <div className="flex-1">
        <Text
          className="absolute top-6 left-6 text-[#EF5DA8]"
          variant="text-xl"
          weight="bold"
          noLink={false}
          href="/"
        >
          Wise
          <Text className="text-black" variant="text-xl" weight="bold">
            Wallet
          </Text>
        </Text>
      </div>

      <div className="flex flex-1 justify-end items-center gap-4">
        <ul className="flex flex-row justify-between space-x-4">
          <li className="font-semibold">
            <Link
              to="/aboutus"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              About Us
            </Link>
          </li>
          <li className="font-semibold">
            <Link
              to="feature"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Feautures
            </Link>
          </li>
          <li className="font-semibold">
            <Link
              to="review"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Reviews
            </Link>
          </li>
        </ul>
        {/* <Text weight="semibold">Feautures</Text>
        <Text weight="semibold">Why Us</Text>
        <Text weight="semibold">Reviews</Text> */}
        <details className="dropdown border-transparent">
          <summary className="btn btn-ghost hover:bg-transparent p-0">
            <English />
            EN
            <Down color="#FCDDEC" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-24">
            <li>
              <Text>Item 1</Text>
            </li>
            <li>
              <Text>Item 2</Text>
            </li>
          </ul>
        </details>
        <Button href="/login">Log In</Button>
      </div>
    </div>
  );
};

export default NavBar;
