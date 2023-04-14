import React from 'react'
import Image from 'next/image'
const Card = (props) => {
    const { children, header, media, effects } = props

    return (
        <div className="group">
            <div className={`text-center shadow-2xl p-8 rounded-xl my-8 relative transition-all h-full w-full duration-500 ${effects}`}>
                {
                    media && (
                        <Image className="mx-auto" src={media} width={80} height={80} alt={""} />
                    )
                }
                <h1 className="text-lg font-medium pt-2 pb-2 font-latoBlack">
                    {header}
                </h1>
                {children}
            </div >
        </div >
    )
}


export default Card