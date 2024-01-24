import { Button, Icon, Typography } from '@/shared/components/ui'
import usePersistedStore from '@/store'
import {
  Cog6ToothIcon,
  MoonIcon,
  PowerIcon,
  ViewfinderCircleIcon
} from '@heroicons/react/20/solid'
import React from 'react'

const navListMenuItems = [
  {
    title: 'Dark style',
    icon: MoonIcon
  }
]

interface ButtonComponentProps {
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
  onClick?: () => void
}

const ButtonComponent = ({ icon, onClick }: ButtonComponentProps) => {
  const { background, text } = usePersistedStore((state) => state.theme)

  return (
    <button
      onClick={onClick}
      className='p-2  rounded-full hover:cursor-pointer'
      style={{
        background: background.secondary
      }}
    >
      <Icon icon={icon} color={text.primary} />
    </button>
  )
}

function NavListMenu() {
  const { theme, addComponent } = usePersistedStore((state) => state)

  const renderItems = navListMenuItems.map(({ title, icon }) => (
    <Button
      key={title}
      className='p-2 rounded-full flex items-center space-x-2 min-w-36 '
      style={{
        background: theme.background.secondary,
        color: theme.text.secondary
      }}
    >
      <Icon icon={icon} />
      <Typography variant='h5'>{title}</Typography>
    </Button>
  ))

  return (
    <React.Fragment>
      <div
        className=' rounded-3xl p-5'
        style={{
          background: theme.background.primary
        }}
      >
        <div className='flex justify-between items-center mb-4'>
          <div className='space-x-2'>
            <ButtonComponent
              icon={Cog6ToothIcon}
              onClick={() => addComponent('Settings')}
            />
            <ButtonComponent icon={ViewfinderCircleIcon} />
          </div>
          <div className='space-x-2'>
            <ButtonComponent icon={Cog6ToothIcon} />
            <ButtonComponent icon={PowerIcon} />
          </div>
        </div>
        <ul className='grid grid-cols-2 w-full flex-col gap-2 '>
          {renderItems}
        </ul>
      </div>
    </React.Fragment>
  )
}

export function NavList() {
  return (
    <div
      className='absolute -right-2 top-8'
      style={{
        zIndex: 10
      }}
    >
      <ul className='mt-2 mb-4 flex flex-col gap-2'>
        <NavListMenu />
      </ul>
    </div>
  )
}
