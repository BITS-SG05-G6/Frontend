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
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex max-w-5xl overflow-hidden">
          <img
            className="h-auto w-full"
            src={require("../../assets/dashboard.webp")}
            alt="dashboard"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Text
            className="w-2/3 text-center"
            weight="semibold"
            variant="text-3xl"
          >
            All your finance stuff in one place
          </Text>
          <Text
            className="text-slate-400 w-2/3 py-4 text-center md:py-8"
            variant="text-sm"
          >
            Get busy, don't waste time on financial matters. We will help you
            sort out all the paperwork.
            <Text
              variant="text-sm"
              weight="semibold"
              className="bg-[#FCDDEC] pt-1.5 leading-10 text-[#EF5DA8]"
            >
              Never worry about your taxes again!
            </Text>
          </Text>

          <Button variant="cirTrans" size="lg">
            Get Started
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 px-4 md:px-20">
        <Box className="grid max-w-screen-xl grid-cols-1 px-4 py-16 md:grid-cols-2 md:px-24">
          <div className="flex flex-col items-start gap-8">
            <Financial color="#A2CBCB" bg="#CFE9E9" />
            <Text className="text-left text-[#B6D3D3]" variant="text-xs">
              FINANCIAL CLEAN-UP
            </Text>

            <Text variant="text-2xl" weight="bold" className="text-left">
              Get organize all of your finances
            </Text>
            <Text variant="text-xs" className="text-justify text-[#24365E]">
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

          <div className="h-full w-full">
            <img
              className="h-auto w-full"
              src={require("../../assets/balance.webp")}
              alt="pic1"
            />
          </div>
        </Box>

        <Box className="grid max-w-screen-xl grid-cols-1 bg-[#EDEEFC] px-4 py-16 md:grid-cols-2 md:px-24">
          <div className="mb-6 flex items-center justify-center">
            <img
              className="h-auto w-full"
              src={require("../../assets/phone.webp")}
              alt="pic2"
            />
          </div>
          <div className="flex flex-col items-start gap-8">
            <Graph color="#A6A5E1" bg="#D3D6F1" />

            <Text className="text-left text-[#A6A5E1]" variant="text-xs">
              ASSISTANCE
            </Text>

            <Text variant="text-2xl" weight="bold" className="text-left">
              Your digital financial assistance
            </Text>
            <Text variant="text-xs" className="text-justify text-[#24365E]">
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

        <Box className="grid max-w-screen-xl grid-cols-1 bg-[#FCDDEC] px-4 py-16 md:grid-cols-2 md:px-24">
          <div className="flex items-center justify-start">
            <img
              className="h-auto w-full"
              src={require("../../assets/invoice.webp")}
              alt="pic3"
            />
          </div>
          <div className="flex flex-col items-start gap-8">
            <Bill color="#EF5DA8" bg="#F178B6" />

            <Text className="text-left text-[#D0C9B2]" variant="text-xs">
              PERSONALIZE YOUR INVOICING
            </Text>

            <Text variant="text-2xl" weight="bold" className="text-left">
              Invoicing like you never had before
            </Text>
            <Text variant="text-xs" className="text-justify text-[#24365E]">
              Up-to-the-minute details about your invoices and your business
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

      <div className="flex flex-col items-center justify-center gap-10 px-4 md:px-20">
        <div className="flex flex-col items-center justify-center">
          <Text variant="text-xs" className="text-[#ACCCCC]">
            WHY SERVICE NAME
          </Text>
          <Text variant="text-2xl" weight="bold">
            Finance management solutions
          </Text>
        </div>

        <div className="flex max-w-screen-xl flex-wrap justify-center gap-10">
          <div className="flex w-full flex-col gap-4 p-6 md:w-60">
            <Multiple color="#69C6C6" bg="#D8F8F8" />
            <Text variant="text-md" weight="semibold" className="text-start">
              Multiple accounts
            </Text>
            <Text variant="text-xs" className="text-start">
              Add multiple bank accounts to track your finances
            </Text>
          </div>

          <div className="flex w-full flex-col gap-4 p-6 md:w-60">
            <IDCard color="#C9C8AD" bg="#F7F2D9" />
            <Text variant="text-md" weight="semibold" className="text-start">
              Saved Invoice Details
            </Text>
            <Text variant="text-xs" className="text-start">
              Never enter the same details again! We’ll save them for you
            </Text>
          </div>

          <div className="flex w-full flex-col gap-4 p-6 md:w-60">
            <Document color="#D8BFB5" bg="#FFEDE5" />
            <Text variant="text-md" weight="semibold" className="text-start">
              Monthly Reports
            </Text>
            <Text variant="text-xs" className="text-start">
              Get automatically reports at the end of each month
            </Text>
          </div>

          <div className="flex w-full flex-col gap-4 p-6 md:w-60">
            <Receipt color="#B1B4D9" bg="#E4E6FF" />
            <Text variant="text-md" weight="semibold" className="text-start">
              Receipts
            </Text>
            <Text variant="text-xs" className="text-start">
              Receipts automatically save to account. Never miss any!
            </Text>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-nowrap items-center justify-center gap-10 px-4 md:px-20">
        <div className="flex flex-col items-center justify-center">
          <Text variant="text-xs" className="text-[#ACCCCC]">
            TESTIMONIALS
          </Text>
          <Text variant="text-2xl" weight="bold">
            What the world says about us
          </Text>
        </div>

        <div className="m-auto w-full">
          <Caroursel />
        </div>
      </div>
    </>
  );
}
