import React from 'react'
import Image from 'next/image'
import Card from './Card'
const FlippingCard = (props) => {
    const { children, header, media } = props

    return (
        <div className="group">
            <Card media={media} header={header} effects={"[transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"}>
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-6 py-6 text-center font-bold text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    {children}
                </div>
            </Card>
        </div>
    )
}


export default FlippingCard