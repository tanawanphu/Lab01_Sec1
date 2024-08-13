'use client'
import { sculptureList } from "./data";

import { Bars3Icon, BellIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';

import Num1 from "./num";

export default function Example() {
  return (
    
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">สินค้าทั้งหมด</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {sculptureList.map((sculptureList) => (
            <div key={sculptureList.Code} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={sculptureList.Title}
                  src={sculptureList.Cover}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={sculptureList.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {sculptureList.Title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{sculptureList.Category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{sculptureList.Price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Num1 /> */}
    </div>
  )
  
}
