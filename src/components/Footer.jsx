import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className="footer items-center p-4 bg-yellow-300 text-black mt-10">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2023 - All right reserved | zainurrouf4@gmail.com</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.linkedin.com/in/zainur-rouf-2822a4263">
            <BsLinkedin className="text-xl hover:text-white cursor-pointer" />
          </a>
          <a href="https://github.com/znrrrf?tab=repositories">
            <BsGithub className="text-xl hover:text-white cursor-pointer" />
          </a>
          <a href="https://wa.me/6281546413467">
            <BsWhatsapp className="text-xl hover:text-white cursor-pointer" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
