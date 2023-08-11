'use client'
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
// Icons
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FcAbout } from "@react-icons/all-files/fc/FcAbout"
import { FaHandHoldingHeart } from "@react-icons/all-files/fa/FaHandHoldingHeart"
import { ImDrawer } from "@react-icons/all-files/im/ImDrawer"
import { CgProfile } from "@react-icons/all-files/cg/CgProfile"
import DarkModeButton from "./DarkModeButton";

function MobileDropdown() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="block md:hidden">
      <div>
        <div className="flex gap-4">
          <DarkModeButton />
          <Menu as="div" className="relative inline-block text-left">
            {/* Toggle Button */}
            <div>
              <Menu.Button className="flex w-full gap-4 text-neutral-900">
                <GiHamburgerMenu
                  className="w-6 h-6 dark:text-white"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            {/* Transition */}
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >

              <Menu.Items className="absolute right-0 mt-2 origin-top-right bg-white divide-y rounded-md shadow-lg divide-stone-100 w-60 ring-1 ring-black ring-opacity-5 focus:outline-none">

                {/* Home */}
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }: { active: boolean }) => (
                      <Link href="/">
                        <button
                          className={`${active
                            ? "bg-amber-300 text-white"
                            : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <FaHome size={17} />
                          <span className="ml-2 font-medium font-OpenSans">Home</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>

                  {/* About */}
                  <Menu.Item>
                    {({ active }: { active: boolean }) => (
                      <Link href="/about">
                        <button
                          className={`${active
                            ? "bg-amber-300 text-white"
                            : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <FcAbout size={17} />
                          <span className="ml-2 font-medium font-OpenSans">About</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>

                {/* Section  */}

                {/* Services */}
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }: { active: boolean }) => (
                      <Link href="/services">
                        <button
                          className={`${active
                            ? "bg-amber-300 text-white"
                            : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <FaHandHoldingHeart size={17} />
                          <span className="ml-2 font-medium font-OpenSans">Services</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>

                  {/* Projects */}
                  <Menu.Item>
                    {({ active }: { active: boolean }) => (
                      <Link href="/projects">
                        <button
                          className={`${active
                            ? "bg-amber-300 text-white"
                            : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <ImDrawer size={17} />
                          <span className="ml-2 font-medium font-OpenSans">Projects</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>



                <div className="px-1 pb-2">
                  {/* Profile */}
                  <Menu.Item>
                    {({ active }: { active: boolean }) => (
                      <Link href="/profile">
                        <button
                          className={`${active
                            ? "bg-amber-300 text-white"
                            : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <CgProfile size={17} />
                          <span className="ml-2 font-medium font-OpenSans">Profile</span>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>

                {/* Contact */}
                <div className="flex justify-center py-1 pb-4 mx-auto">
                  <Menu.Item>
                    {({ active }: { active: boolean }) => (
                      <Link href="https://calendly.com/johncanero/likha-design-consultation">
                        <button className="px-2 py-2 text-sm font-semibold text-center w-44 rounded-xl text-amber-50 bg-stone-900 hover:bg-stone-800">
                          Schedule A Call
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default MobileDropdown
