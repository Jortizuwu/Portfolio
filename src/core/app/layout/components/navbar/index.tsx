import { Button, Icon } from '@/shared/components/ui'
import { Cog6ToothIcon, MinusIcon } from '@heroicons/react/20/solid'
import { NavList } from './components/nav-list'
import Clock from '@/shared/components/clock'
import { useEffect, useState } from 'react'
import usePersistedStore from '@/store'

function Navbar() {
  const [showSetting, setShowSetting] = useState(false)
  const { setActivity, isActivityOpen, theme } = usePersistedStore()

  useEffect(() => {
    const acction = () => {
      if (isActivityOpen && showSetting) {
        setShowSetting(false)
      }
    }
    acction()
  }, [isActivityOpen, showSetting])

  return (
    <div
      className='mx-auto w-full  py-1 px-4'
      style={{
        background: theme.background.primary,
        color: theme.text.primary
      }}
    >
      <div className='relative mx-auto flex items-center justify-between text-blue-gray-900'>
        <Button className='rounded-full' onClick={setActivity}>
          <Icon icon={MinusIcon} />
        </Button>
        <Clock />
        <Button
          className='rounded-full transform hover:rotate-180'
          onClick={() => setShowSetting((state) => !state)}
          disabled={isActivityOpen}
        >
          <Icon icon={Cog6ToothIcon} className='h-1' />
        </Button>
        {showSetting && <NavList />}
      </div>
    </div>
  )
}

export default Navbar
