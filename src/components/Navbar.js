import React from 'react'
import Button from './UI/Button'
import { AiFillLinkedin } from 'react-icons/ai'
import { MdDarkMode, MdOutlineLightMode, MdOutlineEmail } from 'react-icons/md'


const Navbar = (props) => {

    const { darkMode, darkModeToggle } = props
    const lightButton = (
        <Button onClick={darkModeToggle} toolTipMessage="Click for 🌙"> <MdOutlineLightMode id="tooltip-light" className="text-black " /> </Button>)
    const darkButton = (
        <Button onClick={darkModeToggle} toolTipMessage="Click for 🔆">
            <MdDarkMode className="text-white" />
        </Button>
    )
    return (

        <nav className="flex flex-wrap mb-9 items-center justify-between max-w-5xl mx-auto gap-6">
            <h1 className="text-2xl font-latoBlack py-2">Alick</h1>
            <ul className="flex items-center">
                <li className="cursor-pointer text-2xl py-2">
                    {!darkMode ? lightButton : darkButton}
                </li>
                <a href="mailto:alick.yang96@gmail.com" className="box-border text-4xl p-1">
                    <MdOutlineEmail />
                </a>
                <a href="https://www.linkedin.com/in/alick-yang" className="box-border text-4xl p-1" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin />
                </a>
            </ul>
        </nav>

    )
}

export default Navbar