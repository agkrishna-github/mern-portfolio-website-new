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
      className="bg-gradient-to-r from-[#0d1121] to-[#5b288a] md:w-screen min-h-screen  py-2  flex justify-center items-center"
      id="contact"
    >
      <div className="w-5/6 mx-auto  md:mx-0 py-5 text-white md:h-full">
        <div className="w-full">
          <h2 className="py-2 my-5 text-3xl text-[#FEE715FF]">Contact Me</h2>
        </div>
        <div className="flex w-5/6 mx-auto justify-around gap-10 md:flex-col md:gap-5">
          <div className="my-5 flex flex-col gap-5">
            <div className="p-5 w-full md:w-[70%] md:mx-auto flex flex-col gap-y-4  text-center border-radial contact-box rounded-lg">
              <div>
                <IoCallOutline className="text-2xl text-orange-400" />
              </div>
              <h4>Call</h4>
              <p>+91 8008262699</p>
              <div className="send-message">
                <a
                  href="tel:+91 8008262699"
                  target="_blank"
                  className="text-white hover:text-orange-400 no-underline"
                >
                  Contact On Call
                </a>
              </div>
            </div>
            <div className="p-5 w-full md:w-[70%] md:mx-auto flex flex-col gap-y-4  text-center border-radial contact-box rounded-lg">
              <div>
                <BsWhatsapp className="text-2xl text-orange-400" />
              </div>
              <h4>Whatsapp</h4>
              <p>+91 8008262699</p>
              <div className="send-message">
                <a
                  href="https://wa.me/+918008262699"
                  target="_blank"
                  className="text-white hover:text-orange-400"
                >
                  Send a Message
                </a>
              </div>
            </div>
            <div className="p-5 w-full md:w-[70%] md:mx-auto flex flex-col gap-y-4  text-center border-radial contact-box rounded-lg">
              <div>
                <MdOutlineEmail className="text-2xl text-orange-400" />
              </div>
              <h4>Email</h4>
              <p>gopalakrishna.ad@gmail.com</p>
              <div className="">
                <a
                  href="mailto:gopalakrishna.ad@gmail.com"
                  target="_blank"
                  className="text-white hover:text-orange-400"
                >
                  Send a Mail
                </a>
              </div>
            </div>
            {/*   <div>
              <ul className="ps-0">
                <li className="mb-3 d-flex gap-15 align-items-center">
                  <AiOutlineHome className="fs-5" />
                  <address className="mb-0">
                    Hno:100 Hyderabad, Telangana
                  </address>
                </li>
                <li className="mb-3 d-flex gap-15 align-items-center">
                  <BiPhoneCall className="fs-5" />
                  <a href="tel:+91 9999999999">+91 9999999999</a>
                </li>
                <li className="mb-3 d-flex gap-15 align-items-center">
                  <AiOutlineMail className="fs-5" />
                  <a href="mailto: gopalakrishna.ad@gmail.com">
                    gopalakrishna.ad@gmail.com
                  </a>
                </li>
                <li className="mb-3 d-flex gap-15 align-items-center">
                  <BiInfoCircle className="fs-5" />
                  <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="flex justify-center items-center">
            <form className="flex flex-col gap-5" onSubmit={submitHandler}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="p-4 w-full rounded-lg contact-input"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id="email"
                className="p-4 w-full rounded-lg contact-input"
                placeholder="Enater Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="mobile">Mobile</label>

              <input
                type="tel"
                id="mobile"
                className="p-4 w-full rounded-lg contact-input"
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                className="p-4 w-full rounded-lg  outline-orange-400 border-0 contact-input"
                cols="40"
                rows="5"
                placeholder="Message"
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

    /* 
  <div className="contact">
      
      <div className="contact-main">
        <div className="contact-div1">
          
          
          
        </div>
        <div className="contact-div2">
          <form action="">
            <input type="text" placeholder="Your Full Name" />
            <input type="email" placeholder="Your Email" />
            <textarea
              cols="30"
              rows="10"
              placeholder="Write a Message"
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div> */
  );
};

export default Contact;
