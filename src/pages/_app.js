import SplashScreen from '@/components/UI/SplashScreen'
import '@/styles/globals.css'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Router, useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const pathName = usePathname()
  const isHome = pathName === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) return
  }, [isLoading])


  return (
    <>
      {
        isLoading && isHome ? (
          <SplashScreen className="bg-slate-200" finishLoading={() => setIsLoading(false)} />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{ duration: 0.75 }}
              variants={{
                initialState: { opacity: 0.8 },
                animateState: { opacity: 1 },
                exitState: { opacity: 0 }
              }}
              className="base-page-size">
              <Component {...pageProps} />
            </motion.div>

          </AnimatePresence>

        )
      }
    </>
  )
}
