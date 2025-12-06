import React from 'react'

function button({
    children,
    type="button",
    bgColore ="bg-blue-600",
    textColor ="text-white",
    className="",
 ...props
}) {
  return (
   <button className={`px-4 py-2 rounded-lg ${className} ${bgColore} ${textColor}`} {...props}>
    {children}
   </button>
  )
}

export default button