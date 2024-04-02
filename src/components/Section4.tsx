import { CheckIcon } from "@/assets/icons";
import React from "react";

type Props = {};

const Section4 = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-10 p-10">
        <div>
          <p className="text-4xl font-bold mb-2">Our Pricing</p>
          <p>
            Our Pricing Unlock your path to NEET success with RH Sir's NEET Test
            Series at an unbeatable value. Take advantage of our affordable
            pricing and embark on a journey of learning and growth with us. Join
            today and experience the difference firsthand!
          </p>
        </div>
        <div>
          <div className="">
            <p className="bg-[#6B398D] text-center p-2 text-white rounded-lg mb-4">
              Pro Plan
            </p>

            <p className="text-4xl font-bold text-center">₹499</p>
          </div>
          <div className="">
            <p className="text-center">Available Features</p>
            <div className="flex">
                <div className="flex flex-col w-1/2 p-4 gap-4">
                    <div className="flex border rounded-lg p-2 gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <p className="">Access to 30 online/offline NEET test papers</p>
                    </div>
                    <div className="flex border rounded-lg p-2 gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <p className="">Access to 30 online/offline NEET test papers</p>
                    </div>
                    <div className="flex border rounded-lg p-2 gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <p className="">Access to 30 online/offline NEET test papers</p>
                    </div>
                    <div className="flex border rounded-lg p-2 gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <p className="">Access to 30 online/offline NEET test papers</p>
                    </div>
                    <div className="flex border rounded-lg p-2 gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <p className="">Access to 30 online/offline NEET test papers</p>
                    </div>
                    <div className="flex border rounded-lg p-2 gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <p className="">Access to 30 online/offline NEET test papers</p>
                    </div>
                    <div className="flex border rounded-lg p-2 gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <p className="">Access to 30 online/offline NEET test papers</p>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 p-4 gap-4">
                    <div className="flex border rounded-lg p-2 gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <p className="">Access to 30 online/offline NEET test papers</p>
                    </div>
                    <div className="flex border rounded-lg p-2 gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <p className="">Access to 30 online/offline NEET test papers</p>
                    </div>
                    <div className="flex border rounded-lg p-2 gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <p className="">Access to 30 online/offline NEET test papers</p>
                    </div>
                    <div className="flex border rounded-lg p-2 gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <p className="">Access to 30 online/offline NEET test papers</p>
                    </div>
                    <div className="flex border rounded-lg p-2 gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <p className="">Access to 30 online/offline NEET test papers</p>
                    </div>
                    <div className="flex border rounded-lg p-2 gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <p className="">Access to 30 online/offline NEET test papers</p>
                    </div>
                    <div className="flex border rounded-lg p-2 gap-4">
                        <CheckIcon className="h-6 w-6" />
                        <p className="">Access to 30 online/offline NEET test papers</p>
                    </div>
                </div>
                
            </div>
          </div>
          <p className="bg-[#6B398D] text-center p-2 text-white rounded-lg mb-4">
              Get Started
            </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
