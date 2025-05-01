import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col p-4 md:p-8 bg-dark pt-12 md:pt-24 mt-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col max-w-md">
              <div className="relative w-32 h-10 lg:w-40 lg:h-12">
                <Image
                  src={"/images/white-logo.png"}
                  alt="Luno logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white text-xs font-main font-extralight tracking-wider mt-4">
                Luno is a thoughtfully designed productivity app that helps
                individuals and small teams stay organized, manage daily tasks,
                and reach their goals with clarity. Built for simplicity and
                focus, Luno brings structure to your everyday workflow without
                the overwhelm.
              </p>
            </div>

            <div>
              <h2 className="font-main text-2xl text-white">Company</h2>
              <ul className="text-white text-sm font-main font-extralight flex flex-col gap-2 mt-4 text-white/60">
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-main text-2xl text-white">Help</h2>
              <ul className="text-white text-sm font-main font-extralight flex flex-col gap-2 mt-4 text-white/60">
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-white transition-colors"
                  >
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-main text-2xl text-white">Newsletter</h2>
              <div className="flex items-center justify-center gap-2 mt-4 lg:flex-col xl:flex-row">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="focus:outline-0 focus-visible:outline-0 px-4 py-3 rounded-full bg-white/10 text-white font-main font-light w-full"
                />
                <Button className="py-3 lg:w-full xl:w-auto">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-white/20 font-main text-xs font-extralight mt-10 pb-4">
          all rights reserved © {new Date().getFullYear()} Luno
        </p>
      </footer>
    </>
  );
};

export default Footer;
