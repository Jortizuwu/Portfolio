import { Button, Icon, Typography } from '@/shared/components'
import usePersistedStore from '@/store'
import { TvIcon } from '@heroicons/react/20/solid'

const Items = () => {
  return (
    <Button className='p-2 flex flex-row items-center gap-2 hover:bg-white rounded-md'>
      <Icon icon={TvIcon} />
      <Typography variant='p'>Aparence</Typography>
    </Button>
  )
}

function Sidebar() {
  const { theme } = usePersistedStore()

  return (
    <div
      className='w-1/5 flex flex-col h-full p-2 space-y-2'
      style={{
        background: theme.background.secondary
      }}
    >
      <Items />
    </div>
  )
}

export default Sidebar
