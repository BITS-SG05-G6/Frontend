import React from "react";
import Bill from "../components/svgs/Bill";
import Document from "../components/svgs/Document";
import Financial from "../components/svgs/Financial";
import IDCard from "../components/svgs/IDCard";
import Multiple from "../components/svgs/Multiple";
import Receipt from "../components/svgs/Receipt";
import Graph from "../components/svgs/Graph";
import NavBar from "../components/common/NavBar";
import Text from "../components/common/Text";
import Button from "../components/common/Button";
import Box from "../components/common/Box";
import Caroursel from "../components/common/Carousel";
import Footer from "../components/common/Footer";

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex">
          <img src={require("../assets/dashboard.png")} alt="dashboard"></img>
        </div>
        <div className="flex flex-col justify-center items-center">

          <Text
            className="w-2/3 text-center"
            weight="semibold"
            variant="text-3xl"
          >
            All your finance stuff in one place
          </Text>
          <Text
            className="py-[24px] w-2/3 text-center text-slate-400"
            variant="text-sm"
          >
            Get busy, don't waste time on financial matters. We will help you
            sort out all the paperwork.
            <Text
              variant="text-sm"
              weight="semibold"
              className="text-[#EF5DA8] bg-[#FCDDEC] pt-1.5 leading-10"
            >
              Never worry about your taxes again!
            </Text>
          </Text>

          <Button variant="cirTrans" size="lg">
            Get Started
          </Button>
        </div>
      </div>

      <div className="flex justify-center items-center px-20 gap-10 flex-col">

        <Box className="flex justify-around max-w-screen-xl">
          <div className="flex flex-col flex-1 gap-8 pl-10 py-16">
            <Financial color="#A2CBCB" bg="#CFE9E9" />
            <Text className="text-[#B6D3D3]" variant="text-xs">
              FINANCIAL CLEAN-UP
            </Text>

            <Text variant="text-2xl" weight="bold" className="w-3/5">
              Get organise all of your finances
            </Text>
            <Text variant="text-xs" className="text-[#24365E] w-2/3">
              Spending only what you have is not a sustainable way to get by.
              Put money aside for emergencies, building up your savings
              account and taking advantage of opportunities for rewards are
              all steps that
            </Text>
            <Text
              noLink={false}
              variant="text-sm"
              href="/signup"
              className="text-[#67C9CB]"
            >
              Get Started
            </Text>
          </div>

          <div className="flex-1">
            <img src={require("../assets/balance.png")} alt="pic1"></img>
          </div>
        </Box>

        <Box
          className="flex justify-around relative pt-6 px-6 pb-0 max-w-screen-xl"
          color="purple"
        >
          <div className="flex-1 flex justify-center bottom-[-10px]">
            <img src={require("../assets/phone.png")} alt="pic2"></img>
          </div>
          <div className="flex flex-col flex-1 gap-8 py-16 justify-center">
            <Graph color="#A6A5E1" bg="#D3D6F1" />

            <Text className="text-[#A6A5E1] text-left" variant="text-xs">
              ASSISTANCE
            </Text>

            <Text variant="text-2xl" weight="bold">
              Your digital financial assistance
            </Text>
            <Text variant="text-xs" className="text-[#24365E] w-2/3">
              Your digital accountant is always at hand, wherever you are.
              Just install the application on your phone to experience a new
              money management experience.
            </Text>

            <Text
              noLink={false}
              variant="text-sm"
              href="/signup"
              className="text-[#A6A5E1]"
            >
              Get Started
            </Text>
          </div>
        </Box>

        <Box
          className="flex justify-around p-6 items-center max-w-screen-xl"
          color="pink"
        >
          <div className="flex-1">
            <img src={require("../assets/invoice.png")} alt="pic3"></img>
          </div>
          <div className="flex flex-col flex-1 gap-8 py-16 justify-center">
            <Bill color="#EF5DA8" bg="#F178B6" />

            <Text className="text-[#D0C9B2] text-left" variant="text-xs">
              PERSONALIZE YOUR INVOICING
            </Text>

            <Text variant="text-2xl" weight="bold">
              Invoicing like you never had before
            </Text>
            <Text variant="text-xs" className="text-[#24365E] w-2/3">
              Up-to-the minute details about your invoices and your business
              processes are saved in its web interface. Plus, it has a contact
              us feature for customers and businesses.
            </Text>

            <Text
              noLink={false}
              variant="text-sm"
              href="/signup"
              className="text-[#EF5DA8]"
            >
              Get Started
            </Text>
          </div>
        </Box>
      </div>

      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center">
          <Text variant="text-xs" className="text-[#ACCCCC]">
            WHY SERVICE NAME
          </Text>
          <Text variant="text-2xl" weight="bold">
            Finance management solutions
          </Text>
        </div>

        <div className="flex gap-10 max-w-screen-xl">
          <div className="flex flex-col gap-4 p-6 w-60">
            <Multiple color="#69C6C6" bg="#D8F8F8" />
            <Text variant="text-md" weight="semibold">
              Multiple accounts
            </Text>
            <Text variant="text-xs">
              Add multiple bank accounts to track your finances
            </Text>
          </div>

          <div className="flex flex-col gap-4 p-6 w-60">
            <IDCard color="#C9C8AD" bg="#F7F2D9" />
            <Text variant="text-md" weight="semibold">
              Saved Invoice Details
            </Text>
            <Text variant="text-xs">
              Never enter the same details again! We’ll save them for you
            </Text>
          </div>

          <div className="flex flex-col gap-4 p-6 w-60">
            <Document color="#D8BFB5" bg="#FFEDE5" />
            <Text variant="text-md" weight="semibold">
              Monthly Reports
            </Text>
            <Text variant="text-xs">
              Get automatically reports at the end of each month
            </Text>
          </div>

          <div className="flex flex-col gap-4 p-6 w-60">
            <Receipt color="#B1B4D9" bg="#E4E6FF" />
            <Text variant="text-md" weight="semibold">
              Receipts
            </Text>
            <Text variant="text-xs">
              Recipets automatically saves to account. Never miss any!
            </Text>
          </div>
        </div>
      </div>

      <div className="flex flex-nowrap flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center">
          <Text variant="text-xs" className="text-[#ACCCCC]">
            TESTIMONIALS
          </Text>
          <Text variant="text-2xl" weight="bold">
            What world says about us
          </Text>
        </div>

        <div className="w-full m-auto">

          <Caroursel />
        </div>
      </div>
    </>
  );
}
