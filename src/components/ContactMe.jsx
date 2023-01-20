import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineMaximize } from "react-icons/md";
import { about, contactMe } from "../data";

const ContactMe = () => {
  const { title, formName, formEmail, formPhone, formMessage, buttonText } =
    contactMe;
  return (
    <section className="py-10">
      <div className="container mx-auto text-primary">
        <h1 className="text-4xl lg:text-8xl font-bold  mb-10 text-center">
          {title}
        </h1>
        {/* {Second Image} */}
        <div className="flex flex-row  justify-center ">
          <MdOutlineMaximize size={125} color="rgb(44, 62, 80)" />
          <AiFillStar size={50} color="rgb(44, 62, 80)" />
          <MdOutlineMaximize size={125} color="rgb(44, 62, 80)" />
        </div>
      </div>
      {/* {form} */}
      <div class="w-full mx-auto px-10">
        <div class=" space-y-10 text-gray-700 sm:text-lg sm:leading-7">
          <div class="relative">
            <input
              autocomplete="off"
              id="text"
              name="text"
              type="text"
              class="peer placeholder-transparent h-[70px] w-full border-b-[1px] border-gray-300 text-gray-900 focus:outline-none focus:border-blue-300 text-xl font-medium"
              placeholder="Full name"
            />
            <label
              for="Full name"
              class="absolute left-0 -top-3.5 text-gray-600 text-xl  font-medium  peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Full Name
            </label>
          </div>
          <div class="relative">
            <input
              autocomplete="off"
              id="email"
              name="email"
              type="text"
              class="peer placeholder-transparent h-[70px] w-full border-b-[1px] border-gray-300 text-gray-900 focus:outline-none focus:border-blue-300 text-xl font-medium"
              placeholder="Email address"
            />
            <label
              for="email"
              class="absolute left-0 -top-3.5 text-gray-600 text-xl  font-medium peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Email Address
            </label>
          </div>

          <div class="relative">
            <input
              autocomplete="off"
              id="number"
              name="number"
              type="number"
              class="peer placeholder-transparent h-[70px] w-full border-b-[1px] border-gray-300 text-gray-900 focus:outline-none focus:border-blue-300 text-xl font-medium"
              placeholder="Phone number"
            />
            <label
              for="Phone number"
              class="absolute left-0 -top-3.5 text-gray-600 text-xl  font-medium peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Phone number
            </label>
          </div>

          <div class="relative">
            <textarea
              autocomplete="off"
              id="message"
              name="message"
              type="textarea"
              class="peer placeholder-transparent h-[80px] w-full border-b-[1px] border-gray-300 text-gray-900 focus:outline-none focus:border-blue-300 text-xl font-medium"
              placeholder="Message"
            />
            <label
              for="Message"
              class="absolute left-0 -top-3.5 text-gray-600 text-xl  font-medium peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Message
            </label>
          </div>
        </div>
        <div class="relative">
          <button class="bg-blue-400 text-white rounded-md px-7 py-5 mt-2">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
