import React, { useState } from 'react'
import Image from 'next/image'
import Card from './Card'
import { IoIosArrowDropdown } from 'react-icons/io'
const ExpandingCard = (props) => {
    const { children, header, media } = props
    const [isActive, setIsActive] = useState(false)
    const onActiveHandler = () => {
        setIsActive(!isActive)
    }
    return (
        <>
            <div className="group">
                <Card media={media} header={header} effects={""}>
                    <button onClick={onActiveHandler}>
                        {isActive ? <IoIosArrowDropdown className="mx-auto text-xl rotate-180" /> : <IoIosArrowDropdown className="animate-bounce mx-auto text-xl" />}
                    </button>
                    <div className={`overflow-hidden font-bold transition-[max-height] duration-300 ease-in ${isActive ? "max-h-40" : "max-h-0"}`}>
                        {children}
                    </div>
                </Card >

            </div >
        </>
    )
}


export default ExpandingCard