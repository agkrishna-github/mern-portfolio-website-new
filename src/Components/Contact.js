import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { createEnquiry } from "../features/enquirySlice";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createEnquiry({
        name,
        email,
        mobile,
        comment,
      })
    );
  };

  return (
    <section
      className="bg-gradient-to-r from-[#0d1121] to-[#5b288a]  min-h-screen  py-2  flex justify-center items-center md:w-full"
      id="contact"
    >
      {/* <section
      className="bg-gradient-to-r from-[#0d1121] to-[#5b288a] md:w-screen min-h-screen  py-2  flex justify-center items-center"
      id="contact"
    > */}
      <div className="w-5/6 mx-auto  md:mx-0 py-5 text-white md:h-full">
        <div className="w-full">
          <h2 className="py-2 my-5 text-3xl text-[#FEE715FF]">Contact Me</h2>
        </div>
        <div className="flex w-5/6 md:w-full mx-auto justify-around gap-10 md:flex-col md:gap-5">
          <div className="my-5 flex flex-col gap-5">
            <div className="p-5 w-full md:w-full md:mx-auto flex flex-col gap-y-4  text-center border-radial contact-box rounded-lg">
              <div>
                <IoCallOutline className="text-2xl text-orange-400" />
              </div>
              <h4>Call</h4>
              <p>+91 7780294561</p>
              <div className="send-message">
                <a
                  href="tel:+91 7780294561"
                  target="_blank"
                  className="text-white hover:text-orange-400 no-underline"
                >
                  Contact On Call
                </a>
              </div>
            </div>
            <div className="p-5 w-full md:w-full md:mx-auto flex flex-col gap-y-4  text-center border-radial contact-box rounded-lg">
              <div>
                <BsWhatsapp className="text-2xl text-orange-400" />
              </div>
              <h4>Whatsapp</h4>
              <p>+91 7780294561</p>
              <div className="send-message">
                <a
                  href="https://wa.me/+917780294561"
                  target="_blank"
                  className="text-white hover:text-orange-400"
                >
                  Send a Message
                </a>
              </div>
            </div>
            <div className="p-5 w-full md:w-full md:mx-auto flex flex-col gap-y-4  text-center border-radial contact-box rounded-lg">
              <div>
                <MdOutlineEmail className="text-2xl text-orange-400" />
              </div>
              <h4>Email</h4>
              <p>gkgsgkgs4005@gmail.com</p>
              <div className="">
                <a
                  href="mailto:gkgsgkgs4005@gmail.com"
                  target="_blank"
                  className="text-white hover:text-orange-400"
                >
                  Send an e-mail
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <form className="flex flex-col gap-5" onSubmit={submitHandler}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="p-4 w-full rounded-lg contact-input"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                className="p-4 w-full rounded-lg contact-input"
                placeholder="Enater Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="mobile">Mobile</label>

              <input
                type="tel"
                id="mobile"
                className="p-4 w-full rounded-lg contact-input"
                placeholder="Enter Your Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                className="p-4 w-full rounded-lg  outline-orange-400 border-0 contact-input"
                cols="40"
                rows="5"
                placeholder="Enter Message"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              <button
                type="submit"
                className="p-3 w-[100px] bg-transparent border-yellow-400 text-white rounded-lg cursor-pointer hover:shadow-md hover:shadow-white hover:transition-shadow md:mb-[100px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
