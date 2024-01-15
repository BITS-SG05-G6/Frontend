import React, { useState } from "react";

export default function FAQ() {
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(false);
    const [box3, setBox3] = useState(false);
    const [box4, setBox4] = useState(false);

  return (
    <div>
      <div className="relative z-20 flex flex-col items-center justify-center px-6 pb-32 sm:px-0">
        <div className="mb-8 w-full bg-[#EF5DA8] py-20 md:py-36">
          <span
            className="text-xl font-bold leading-10 text-white md:text-5xl xl:text-6xl"
          >
            Frequently asked questions
          </span>
        </div>
        <div className="w-full sm:w-9/12 md:w-8/12 lg:w-1/2">
          <div
            className="cursor-pointer rounded bg-white p-8 shadow"
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
              <p className="mt-4 text-left text-base leading-normal  text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                quae quidem facilis corporis deserunt vero pariatur dolor
                nostrum laborum autem id quasi veritatis, perferendis,
                repudiandae, ullam eveniet molestias molestiae sed!
              </p>
            )}
          </div>

          <div
            className="mt-8 cursor-pointer rounded bg-white p-8 shadow"
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
                  <p className="mt-4 text-left text-base leading-normal  text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quisquam iusto quibusdam vitae. Soluta quis cupiditate, vero
                    quisquam molestiae quo beatae dignissimos incidunt corporis
                    repellat laboriosam pariatur sequi architecto placeat
                    reprehenderit?
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div
            className="mt-8 cursor-pointer rounded bg-white p-8 shadow"
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
                  <p className="mt-4 text-left text-base leading-normal  text-gray-600">
                    If you want to choose Pro or Business plan the you can use
                    all payments. You can pay from Paypal, Payoneer, Master
                    Card, Debit Card.
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div
            className="mt-8 cursor-pointer rounded bg-white p-8 shadow"
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
                                    <p className="text-base leading-normal text-gray-600 mt-4  text-left">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptatem, cupiditate voluptate animi repellat accusantium
                                        ullam quo vitae nihil voluptatum ad sapiente quibusdam iure
                                        vel! Temporibus adipisci libero incidunt officia eos!
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
