import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1600px] mx-auto bg-white">
      <div className="text-center mt-[100px] mb-10">
        <h1 className="text-3xl font-bold mb-5">Gadget Haven</h1>
        <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <footer className="footer sm:footer-horizontal text-black p-10 flex justify-around ">
        <nav className="flex flex-col items-center">
          <h6 className="text-2xl font-bold text-black">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="text-xl font-bold text-black">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="text-xl font-bold text-black">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
