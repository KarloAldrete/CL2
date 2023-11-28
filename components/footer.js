import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Footer() {
  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Company",
    "Blog",
  ];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.60954 16.0199L12.2684 11.361L8.46367 7.55627L0 16.0199L5.22018 21.2401C5.21575 21.3 5.21131 21.3599 5.21131 21.4198V24.1708C5.21131 25.6173 6.38269 26.7887 7.82917 26.7887H10.5801C10.64 26.7887 10.6999 26.7842 10.7598 26.7798L15.98 32L21.3067 26.6733L17.5019 22.8685L15.98 24.3904L7.60954 16.0199Z" fill="url(#paint0_linear_40_280)" />
                        <path d="M24.1731 5.21131H21.4221C21.3622 5.21131 21.3023 5.21575 21.2424 5.22019L16.0222 0L10.6956 5.32668L14.5003 9.13144L16.0222 7.60954L24.3927 15.98L19.7338 20.6389L23.5386 24.4437L32.0023 15.98L26.7821 10.7598C26.7865 10.6999 26.7909 10.64 26.7909 10.5801V7.82917C26.7909 6.38269 25.6196 5.21131 24.1731 5.21131Z" fill="url(#paint1_linear_40_280)" />
                        <defs>
                          <linearGradient id="paint0_linear_40_280" x1="17.8823" y1="26.5629" x2="2.39421" y2="11.0748" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00BFFF" />
                            <stop offset="0.458333" stop-color="#824AFB" />
                            <stop offset="0.911458" stop-color="#D600F9" />
                          </linearGradient>
                          <linearGradient id="paint1_linear_40_280" x1="28.5779" y1="19.0066" x2="13.0898" y2="3.51853" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#00BFFF" />
                            <stop offset="0.458333" stop-color="#824AFB" />
                            <stop offset="0.911458" stop-color="#D600F9" />
                          </linearGradient>
                        </defs>
                      </svg>
                  <span>CoderLabs</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              CoderLabs is a software development agency offering a variety of services, 
              including web, mobile, and custom application development. We focus on providing 
              high-quality software solutions that add value to your business.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">

            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}.{" "}
          <a
            target="_blank"
            rel="noopener">
            CoderLabs, Inc.
          </a>{" "}
        </div>
      </Container>
    </div>
  );
}
