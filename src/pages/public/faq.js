import React, { useState } from "react";

export function FAQ() {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);

  return (
    <div>
      <div className="relative flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-32">
        <div className="md:py-36 py-20 bg-[#EF5DA8] w-full mb-8">
          <span
            role="heading"
            className="xl:text-6xl md:text-5xl text-xl font-bold leading-10 text-white"
          >
            Frequently asked questions
          </span>
        </div>
        <div className="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
          <div
            className="bg-white shadow rounded p-8 cursor-pointer"
            onClick={() => setBox1(!box1)}
          >
            <div className="flex items-center justify-between ">
              <h2 className="text-base font-semibold leading-none text-gray-800">
                Why should I use your service?
              </h2>

              {box1 ? (
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5L5 1L9 5"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
            {box1 && (
              <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96 text-justify">
                If you want to choose Pro or Business plan the you can use all
                payments. You can pay from Paypal, Payoneer, Master Card, Debit
                Card.
              </p>
            )}
          </div>

          <div
            className="bg-white shadow rounded p-8 mt-8 cursor-pointer"
            onClick={() => setBox2(!box2)}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold leading-none text-gray-800">
                What payment method I can use?
              </h2>

              {box2 ? (
                <svg
                  role="button"
                  aria-label="close dropdown"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5L5 1L9 5"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="10"
                  role="button"
                  aria-label="open dropdown"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
            {box2 && (
              <ul>
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96 text-justify">
                    If you want to choose Pro or Business plan the you can use
                    all payments. You can pay from Paypal, Payoneer, Master
                    Card, Debit Card.
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div
            className="bg-white shadow rounded p-8 mt-8 cursor-pointer"
            onClick={() => setBox3(!box3)}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold leading-none text-gray-800">
                Is your service safe to use?
              </h2>

              {box3 ? (
                <svg
                  role="button"
                  aria-label="close dropdown"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5L5 1L9 5"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="10"
                  role="button"
                  aria-label="open dropdown"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
            {box3 && (
              <ul>
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96 text-justify">
                    If you want to choose Pro or Business plan the you can use
                    all payments. You can pay from Paypal, Payoneer, Master
                    Card, Debit Card.
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div
            className="bg-white shadow rounded p-8 mt-8 cursor-pointer"
            onClick={() => setBox4(!box4)}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold leading-none text-gray-800">
                How to recover password?
              </h2>

              {box4 ? (
                <svg
                  role="button"
                  aria-label="close dropdown"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5L5 1L9 5"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="10"
                  role="button"
                  aria-label="open dropdown"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#4B5563"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
            {box4 && (
              <ul>
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4 lg:w-96 text-justify">
                    If you want to choose Pro or Business plan the you can use
                    all payments. You can pay from Paypal, Payoneer, Master
                    Card, Debit Card.
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
