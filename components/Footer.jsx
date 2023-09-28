"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaMailBulk,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const handleEmail = () => {
    window.location.href = "mailto:almaciejewska@gmail.com";
  };

  return (
    <footer id="contact" className="footer pt-12 xl:pt-[150px]">
      <div className="container mx-auto pb-12 xl:pb-[100px]">
        <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
          <div className="footer__item flex-1">
            <Link href="/">
              <h3 className="h3">Prof. dr hab. Alina Maciejewska</h3>
            </Link>
            <p className="mb-[20px] mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              suscipit vero tenetur in, voluptate quisquam cupiditate. Officia
              quos voluptates commodi.
            </p>

            <div className="flex flex-col gap-y-3 mb-10">
              <div className="flex items-center gap-x-[6px]">
                <FaMapMarkerAlt className="inline-block mr-2 text-[24px] text-accent" />
                <div>Plac Politechniki 1, 00-000, Warszawa, Polska </div>
              </div>
              <div
                onClick={handleEmail}
                className="flex items-center gap-x-[6px] cursor-pointer"
              >
                <FaMailBulk className="inline-block mr-2 text-[24px] text-accent" />
                <div>almaciejewska@gmail.com</div>
              </div>
              <div className="flex items-center gap-x-[6px]">
                <FaPhoneAlt className="inline-block mr-2 text-[24px] text-accent" />
                <div>+48 333 122 3232</div>
              </div>
            </div>
          </div>

          <div className="footer__item flex-1">
            <h4 className="h4 mb-5">Linki</h4>
            <div className="flex gap-x-5">
              <ul className="flex-1 flex flex-col gap-y-5">
                <li>
                  <Link href="/" className="hover:text-accent transition-all">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#aboutme"
                    className="hover:text-accent transition-all"
                  >
                    O mnie
                  </Link>
                </li>
                <li>
                  <Link
                    href="/publikacje"
                    className="hover:text-accent transition-all"
                  >
                    Publikacje
                  </Link>
                </li>
                <li>
                  <Link
                    href="/funkcje"
                    className="hover:text-accent transition-all"
                  >
                    Funkcje
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="footer__item flex-1">
            <h4 className="h4 mb-5">Opening Hours</h4>

            <div className="flex flex-col gap-5">
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>Monday - Thursday</div>
                  <div className="text-accent font-medium">
                    8:00 AM - 6:00 PM
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>Monday - Thursday</div>
                  <div className="text-accent font-medium">
                    8:00 AM - 6:00 PM
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div>Monday - Thursday</div>
                  <div className="text-accent font-medium">
                    8:00 AM - 6:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="py-[30px] border-t">
        <div className="container mx-auto text-center">
          <div className="font-light text-base">
            &copy; 2023 - All rights reserved.
          </div>
          <div className="mt-2 mb-2">
            <div className="">
              <h1>
                Developed with love by{" "}
                <Link href="/" className="font-bold text-red-500">
                  vabank.dev
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
