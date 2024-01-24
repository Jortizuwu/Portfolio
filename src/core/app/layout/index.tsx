// import Home from '@/core/pages/home'

import Navbar from './components/navbar'
import Draggable from '@/shared/components/draggable'
import usePersistedStore from '@/store'
import { useEffect } from 'react'
import Footer from './components/footer'

const Layout = () => {
  const { theme } = usePersistedStore()

  useEffect(() => {
    const openPublication = () => {
      document.body.style.overflow = 'hidden'
    }
    openPublication()
  }, [])

  // const { keyPress } = useKeyDown(true)

  return (
    <div
      className='w-full relative overflow-hidden'
      style={{
        background: theme.background.primary,
        color: theme.text.primary
      }}
    >
      <div className='h-screen overflow-y-scroll flex flex-col'>
        <Navbar />
        <Draggable />
        <Footer />
      </div>
    </div>
  )
}

export default Layout
