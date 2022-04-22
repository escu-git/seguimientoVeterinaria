import React from 'react'

function Button({children, style, fn}) {

    return (
    <div className={`py-2 px-10 ${style} rounded-md text-white font-bold`} onClick={(e)=>fn(e)}>{children}</div>
  )
}

export default Button