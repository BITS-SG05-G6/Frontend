import React from "react";
import Bill from "../../components/svgs/Bill";
import Document from "../../components/svgs/Document";
import Financial from "../../components/svgs/Financial";
import IDCard from "../../components/svgs/IDCard";
import Multiple from "../../components/svgs/Multiple";
import Receipt from "../../components/svgs/Receipt";
import Graph from "../../components/svgs/Graph";
import Text from "../../components/common/Text";
import Button from "../../components/common/Button";
import Box from "../../components/common/Box";
import Caroursel from "../../components/common/Carousel";

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex max-w-5xl">
          <img src={require("../../assets/Dashboard.png")} alt="dashboard" />
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
        <Box className="grid grid-cols-2 max-w-screen-xl px-24 py-16">
          <div className="flex flex-col gap-8 items-start">
            <Financial color="#A2CBCB" bg="#CFE9E9" />
            <Text className="text-[#B6D3D3] text-left" variant="text-xs">
              FINANCIAL CLEAN-UP
            </Text>

            <Text variant="text-2xl" weight="bold" className="w-2/3 text-left">
              Get organise all of your finances
            </Text>
            <Text
              variant="text-xs"
              className="text-[#24365E] w-2/3 text-justify"
            >
              Spending only what you have is not a sustainable way to get by.
              Put money aside for emergencies, building up your savings account
              and taking advantage of opportunities for rewards are all steps
              that
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

          <div className="w-full h-full">
            <img src={require("../../assets/balance.png")} alt="pic1"></img>
          </div>
        </Box>

        <Box
          className="grid grid-cols-2 px-24 py-16 max-w-screen-xl"
          color="purple"
        >
          <div className="flex justify-center items-center">
            <img src={require("../../assets/phone.png")} alt="pic2"></img>
          </div>
          <div className="flex flex-col gap-8 items-start">
            <Graph color="#A6A5E1" bg="#D3D6F1" />

            <Text className="text-[#A6A5E1] text-left" variant="text-xs">
              ASSISTANCE
            </Text>

            <Text variant="text-2xl" weight="bold" className="text-left w-2/3">
              Your digital financial assistance
            </Text>
            <Text
              variant="text-xs"
              className="text-[#24365E] w-2/3 text-justify"
            >
              Your digital accountant is always at hand, wherever you are. Just
              install the application on your phone to experience a new money
              management experience.
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
          className="grid grid-cols-2 px-24 py-16 max-w-screen-xl"
          color="pink"
        >
          <div className="flex items-center justify-start">
            <img src={require("../../assets/invoice.png")} alt="pic3"></img>
          </div>
          <div className="flex flex-col gap-8 items-start">
            <Bill color="#EF5DA8" bg="#F178B6" />

            <Text className="text-[#D0C9B2] text-left" variant="text-xs">
              PERSONALIZE YOUR INVOICING
            </Text>

            <Text variant="text-2xl" weight="bold" className="text-left w-2/3">
              Invoicing like you never had before
            </Text>
            <Text
              variant="text-xs"
              className="text-[#24365E] w-2/3 text-justify"
            >
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
            <Text variant="text-md" weight="semibold" className="text-start">
              Multiple accounts
            </Text>
            <Text variant="text-xs" className="text-start">
              Add multiple bank accounts to track your finances
            </Text>
          </div>

          <div className="flex flex-col gap-4 p-6 w-60">
            <IDCard color="#C9C8AD" bg="#F7F2D9" />
            <Text variant="text-md" weight="semibold" className="text-start">
              Saved Invoice Details
            </Text>
            <Text variant="text-xs" className="text-start">
              Never enter the same details again! We’ll save them for you
            </Text>
          </div>

          <div className="flex flex-col gap-4 p-6 w-60">
            <Document color="#D8BFB5" bg="#FFEDE5" />
            <Text variant="text-md" weight="semibold" className="text-start">
              Monthly Reports
            </Text>
            <Text variant="text-xs" className="text-start">
              Get automatically reports at the end of each month
            </Text>
          </div>

          <div className="flex flex-col gap-4 p-6 w-60">
            <Receipt color="#B1B4D9" bg="#E4E6FF" />
            <Text variant="text-md" weight="semibold" className="text-start">
              Receipts
            </Text>
            <Text variant="text-xs" className="text-start">
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
