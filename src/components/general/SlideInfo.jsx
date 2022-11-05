import React from 'react'

export const SlideInfo = ({pathImage, alt, title, info, width}) => {
    return (
        <div className="flex items-center w-3/4 mx-auto">

            <div className='text-white max-w-md mr-10'>
                <h2 className='font-bold mb-8 text-5xl'>{title}</h2>
                <p>{info}</p>
            </div>

            <div>
                <img src={pathImage} alt={alt} width={width}/>
            </div>
        </div>
    )
}
