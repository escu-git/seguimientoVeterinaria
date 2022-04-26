import React from 'react'

function Button({children, style, fn, paciente}) {

    return (
    <div className={`py-2 px-10 ${style} rounded-md text-white font-bold`} onClick={(e)=>fn(paciente)}>{children}</div>
  )
}

export default Button