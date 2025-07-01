import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <>
      <div className="bg-[#123c69] text-[#bab2b5] flex flex-wrap justify-around py-2 px-4">
        <div className="w-full md:w-1/2 mb-4">
          <h1 className="text-[#ac3b61] text-2xl font-bold mb-2">YumSecrets</h1>
          <p className="text-sm leading-relaxed">
            We're all about good recipes, and about quality home cooking that everyone can enjoy.
            Whether you're looking for some healthy inspiration or learning how to cook a decadent dessert,
            we've got trustworthy guidance for all your foodie needs.
          </p>
          <div className="flex items-center mt-4 flex-wrap">
            <h3 className="mr-4 font-semibold">Follow Us:</h3>
            <a href="/" className="mx-2 my-2 hover:text-white"><Facebook /></a>
            <a href="/" className="mx-2 my-2 hover:text-white"><Twitter /></a>
            <a href="/" className="mx-2 my-2 hover:text-white"><Instagram /></a>
            <a href="/" className="mx-2 my-2 hover:text-white"><Youtube /></a>
          </div>
        </div>

        <div className="hidden sm:block sm:w-auto contactus mb-4">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <div className="my-2">
            <a href="/" className="hover:underline">98765 43210</a>
          </div>
          <div className="my-2">
            <a href="/" className="hover:underline">033 428 0707</a>
          </div>
          <div className="my-2">
            <a href="/" className="hover:underline">yumsecrets@gmail.com</a>
          </div>
        </div>

        <div className="hidden md:block usefulLinks mb-4">
          <h3 className="font-semibold mb-2">Useful Links</h3>
          <div className="my-2">
            <a href="/" className="hover:underline">FAQ's</a>
          </div>
          <div className="my-2">
            <a href="/" className="hover:underline">About Us</a>
          </div>
          <div className="my-2">
            <a href="/" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div className="bg-[#232323] text-[#bab2b5] text-center min-h-[30px] flex items-center justify-center py-2 text-sm">
        <p>
          &copy; Created By <span className="text-[#ac3b61] font-semibold">Yum Secrets</span> | All Rights Reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
