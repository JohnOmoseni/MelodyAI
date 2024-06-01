import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  ArrowPathIcon,
  Bars3Icon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  // Squares2X2Icon,
  InformationCircleIcon,
  PencilSquareIcon,
  // DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";

const Logo = "/images/melody.ai.png";

const solutions = [
  {
    name: "Personalized AI",
    href: "/solutions/personalized",
    icon: ChartBarIcon,
  },
  {
    name: "Predictive modeling",
    href: "/solutions/modeling",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Marketing and sales",
    href: "/solutions/marketing",
    icon: ShieldCheckIcon,
  },

  {
    name: "Fraud and security",
    href: "/solutions/fraud",
    icon: ArrowPathIcon,
  },
  {
    name: "Cost Optimization",
    href: "/solutions/cost",
    icon: ArrowPathIcon,
  },
  {
    name: "Churn Prediction",
    href: "/solutions/churn",
    icon: ArrowPathIcon,
  },
];

const company = [
  {
    name: "About Us",
    href: "/about",
    icon: InformationCircleIcon,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: DevicePhoneMobileIcon,
  },
];

const resources = [
  {
    name: "Blog",
    href: "/resources/blogs",
    icon: PencilSquareIcon,
  },
  {
    name: "Events",
    href: "/resources/events",
    icon: CalendarDaysIcon,
  },
  {
    name: "Resource Library",
    href: "/resources/library",
    icon: BuildingLibraryIcon,
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(true);
  };

  // eslint-disable-next-line no-unused-vars
  const renderMenuItems = (items, setOpen) => (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute z-10 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="relative bg-stone-900 p-4 grid gap-4">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white text-base font-medium hover:text-indigo-500"
                onClick={() => setOpen(false)} // Update this line
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {openMenu && (
        <AnimatePresence>
          <Menu setOpenMenu={setOpenMenu} />
        </AnimatePresence>
      )}
      <Popover className="relative bg-zinc-800">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mx-6 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="sr-only">Melody AI</span>

                <img className="w-[100px]" src={Logo} alt="Melody AI logo" />
              </Link>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button
                onClick={handleClick}
                className="inline-flex items-center justify-center rounded-md bg-zinc-800 p-2 text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset"
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-white" : "text-white",
                        "group inline-flex items-center rounded-md bg-zinc-800 text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2"
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-white" : "text-white",
                          "ml-2 h-5 w-5 hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-zinc-800 px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-600"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-white"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-300">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="space-y-6 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"></div>
                      </div>
                    </Popover.Panel>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-white" : "text-white",
                        "group inline-flex items-center rounded-md bg-zinc-800 text-base font-medium hover:text-gray-500 focus:outline-none focus:ring-2"
                      )}
                    >
                      <span>Resources</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-white" : "text-white",
                          "ml-2 h-5 w-5 hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-zinc-800 px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-600"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-white"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-300">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="space-y-6 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8"></div>
                      </div>
                    </Popover.Panel>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-white" : "text-white",
                        "group inline-flex items-center rounded-md bg-zinc-800 text-base font-medium hover:text-gray-500 "
                      )}
                    >
                      <span>Company</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-white" : "text-white",
                          "ml-2 h-5 w-5 hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-zinc-800 px-5 py-6 sm:gap-8 sm:p-8">
                          {company.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-600"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-white"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-white">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-white">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-fit">
              {/* <a href="https://melody-ai-data-analytics.vercel.app/"
               className="pl-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border-transparent hover:scale-105 duration-200 bg-gradient-to-r from-pink-500 to-indigo-500 px-4 py-2 text-base font-medium text-white"
             >
            Demo analytics
             </a>  */}

              <a
                href="http://bit.ly/M-AIwaitlist"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border-transparent hover:scale-105 duration-200 bg-gradient-to-r from-pink-500 to-indigo-500 px-4 py-2 text-base font-medium text-white"
              >
                WaitList
              </a>
              <a
                href="http://bit.ly/AnalyticsSMEs"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border-transparent hover:scale-105 duration-200 bg-gradient-to-r from-pink-500 to-indigo-500 px-4 py-2 text-base font-medium text-white"
              >
                Register for Webinar
              </a>

              <Link
                to="/auth/sign-in"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border-transparent hover:scale-105 duration-200 bg-gradient-to-r from-pink-500 to-indigo-500 px-4 py-2 text-base font-medium text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </Popover>
    </>
  );
}
