import React from 'react'
import Image from 'next/image'
const Card = (props) => {
    const { children, header, media } = props

    return (
        <div className="group h-48">
            <div className="text-center shadow-2xl p-8 rounded-xl my-8 relative transition-all h-full w-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {
                    media && (
                        <Image className="mx-auto" src={media} width={80} height={80} />
                    )
                }
                <h1 className="text-lg font-medium pt-2 pb-2 font-latoBlack">
                    {header}
                </h1>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-6 py-6 text-center font-bold text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    {children}
                </div>

            </div >
        </div>
    )
}


export default Card