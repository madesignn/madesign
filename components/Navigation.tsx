"use client";
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { HiOutlineBars3BottomRight, HiXMark } from 'react-icons/hi2'
import { navItems } from '@/data/index'
import { cn } from '@/utils/cn';
import Link from 'next/link';
import ToggleMode from './ui/ToggleMode';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="h-18 w-40 items-center pl-5"
                src="whitelogo.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
          <ToggleMode />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HiOutlineBars3BottomRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
          {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-sm font-semibold leading-6 items-center flex dark:hover:text-purple"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className=" text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
        </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end pr-4'>
            <ToggleMode />
          </div>
      
        </nav>

        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-10 w-auto"
                  src="Emblemlogo.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <HiXMark className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-purple"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>




    </div>
  )
}
