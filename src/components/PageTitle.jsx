import React from 'react'

export default function PageTitle({children}) {
  return (
    <div className="flex items-center">
        <h1 className="text-xl font-semibold md:text-2xl text-primary">
            {children}
        </h1>
    </div>
  )
}
