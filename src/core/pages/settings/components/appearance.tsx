import { Typography } from '@/shared/components'
import usePersistedStore from '@/store'

const Uwu = () => {
  const { theme } = usePersistedStore()

  return (
    <section className='w-full h-full'>
      <div
        style={{
          backgroundImage: 'url(/img/wallpaper.webp)'
        }}
        className='ring-4 cursor-pointer ring-indigo-300 rounded-md relative bg-cover flex max-w-44 h-32 items-end justify-center p-4 mx-auto'
      >
        <div
          className='rounded-md w-20 h-20 absolute top-4 left-16 '
          style={{
            background: theme.background.secondary
          }}
        />
        <div
          className='rounded-md w-20 h-20 absolute right-16 bottom-4'
          style={{
            background: theme.background.primary
          }}
        />
      </div>
      <Typography variant='p' className='text-center mt-1'>
        default
      </Typography>
    </section>
  )
}

const StyleComponent = () => {
  const { theme } = usePersistedStore()

  return (
    <section className='w-full mt-10'>
      <Typography variant='h6' className='font-bold mb-2'>
        Style
      </Typography>
      <div
        className='py-5 w-full mx-auto shadow-md rounded-md '
        style={{
          background: theme.background.secondary
        }}
      >
        <div className='w-10/12 mx-auto flex flex-row items-center justify-between gap-4'>
          {[1, 2].map((_, index) => (
            <Uwu key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Appearance() {
  return (
    <div className='px-20 py-10 flex w-full'>
      <StyleComponent />
    </div>
  )
}

export default Appearance
