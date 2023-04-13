import React from 'react'
import ToolTip from './ToolTip'

const Button = (props) => {
    const { toolTipMessage, children, onClick } = props
    return (
        <>
            <ToolTip message={toolTipMessage}>
                <button className=" text-white px-2 py-2 rounded-md ml-4" onClick={onClick} >
                    {children}
                </button >
            </ToolTip>
        </>
    )
}

export default Button