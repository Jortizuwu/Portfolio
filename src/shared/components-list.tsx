import Home from '@/core/pages/home'
import Pdf from '@/core/pages/pdf'
import Settings from '@/core/pages/settings'
import { ReactNode } from 'react'

const randomNumber = () => {
  return Math.floor(Math.random() * 501)
}

export type ComponentsList = Record<
  string,
  {
    top: number
    left: number
    component: ReactNode
    id: string
  }
>

export const componentsList: ComponentsList = {
  Settings: {
    id: 'Settings',
    component: <Settings />,
    left: randomNumber(),
    top: randomNumber()
  },
  Home: {
    id: 'Home',
    component: <Home />,
    left: randomNumber(),
    top: randomNumber()
  },
  Pdf: {
    id: 'Pdf',
    component: <Pdf />,
    left: randomNumber(),
    top: randomNumber()
  }
}
