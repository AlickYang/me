import React from 'react'
import Skills from './Skills'
const Body = (props) => {
    return (
        <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2">
                Hi ✋
            </h2>
            <p className="text-lg py-5 leading-8 text md:text-md max-w-xl mx-auto">
                I&apos;m Alick, a Software Engineer based in Sydney, Australia. I&apos;ve been working within the industry since 2020 specialising in Cloud Technologies, DevOps, and Cloud Native Development.
            </p>
            <p className="text-lg py-5 leading-8 text md:text-md max-w-xl mx-auto">
                Outside of work, you can find me taking various classes at the gym 🏋️‍♂️ 🧘, 🏊 or playing casual games of volleyball 🏐.
            </p>
            <Skills />

        </div>
    )
}

export default Body