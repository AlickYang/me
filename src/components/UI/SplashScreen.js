"use client"
import React, { useEffect, useState } from 'react'
import anime from 'animejs'
import Image from 'next/image'
const SplashScreen = (props) => {
    const { finishLoading } = props
    const [isMounted, setIsMounted] = useState(false)

    const animate = () => {
        const loader = anime.timeline({
            autoplay: true,
            complete: () => finishLoading(),
        })

        loader.add({
            targets: "#moving-line",
            easing: "easeOutExpo",
        }).add({
            targets: "#moving-line",
            scaleY: [0, 1],
            transformOrigin: ['100% 0', '0 100%']

        }).add({
            targets: "#moving-line",
            scaleY: [1, 0],
            transformOrigin: ['0 100%', '100% 0']
        })
    }

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 100)
        animate()
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className="flex h-screen items-center justify-center bg-slate-200" isMounted={isMounted}>
            <div className="spinner-wrapper flex">
                <div id="moving-line" className="moving-line h-5 w-1 bg-neutral-700 m-1"></div>
                <div id="moving-line" className="moving-line h-5 w-1 bg-neutral-700 m-1"></div>
                <div id="moving-line" className="moving-line h-5 w-1 bg-neutral-700 m-1"></div>
            </div>
        </div>
    )
}

export default SplashScreen