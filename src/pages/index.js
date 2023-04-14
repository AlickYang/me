import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Head from "next/head"
import Timeline from '@/components/Timeline/Timeline'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const onDarkModeToggleHandler = () => {
    setDarkMode(prevState => !prevState)
  }
  return (
    <main className={`bg-slate-200 text-${darkMode ? "gray-800" : "black"} font-sans`}>
      <section className={`${darkMode ? "bg-zinc-800" : "bg-slate-200"} min-h-screen pb-20 pt-5 px-10`}>
        <header>
          <Head>
            <title> Alick Yang </title>
          </Head>
        </header>
        <Navbar darkMode={darkMode} darkModeToggle={onDarkModeToggleHandler} />
        <About />
        <Timeline />
        <div className="text-center pt-60">
          <a href="https://www.flaticon.com/free-icons/programming" title="programming icons">Icons by Freepik - Flaticon</a>
        </div>
      </section>

    </main>

  )
}
