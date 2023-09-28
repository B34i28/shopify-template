import React, { FC } from 'react'

const Wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-7xl px-4 mx-auto md:px-10'>
        {children}
    </div>
  )
}

export default Wrapper