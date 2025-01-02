import React from 'react'

function Button({
    type = 'button',
    text = 'click here',
    bgcolor = 'bg-blue-600',
    classname = '',
    textcolor = 'text-white',
    ...props
}) {
  return (
    <button type={type} className={`px-3 rounded-md ${classname} ${bgcolor} ${textcolor} `} {...props}>  {text}    </button>
  )
}

export default Button