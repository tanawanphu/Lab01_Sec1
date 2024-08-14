'use client'
import { sculptureList } from "./data";
import BookStatus from "./BookStatus";
import { Bars3Icon, BellIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Example() {
  return (
    

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">สินค้าทั้งหมด</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {sculptureList.map((sculpture) => (
            <div key={sculpture.Code} className="group relative border border-gray-300 rounded-lg bg-white p-4 shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={sculpture.Title}
                  src={sculpture.Cover}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={sculpture.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {sculpture.Title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{sculpture.Category}</p>
                  <BookStatus Bestseller={sculpture.Bestseller} Recommended={sculpture.Recommended} />
                </div>
                <p className="text-sm font-medium text-gray-900">{sculpture.Price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

  )
}