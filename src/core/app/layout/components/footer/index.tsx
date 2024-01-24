import usePersistedStore from '@/store'

const Icon = ({ img }: { img: string }) => {
  return (
    <div className='h-14 w-20 rounded-lg flex items-center justify-center flex-col'>
      <figure>
        <img
          src={img}
          className='h-14 w-14 object-cover rounded-xl cursor-pointer transform hover:-translate-y-2 transition-transform'
        />
      </figure>
    </div>
  )
}

function Footer() {
  const { theme, isActivityOpen } = usePersistedStore()

  return (
    <div
      className='w-1/2 mx-auto p-2 rounded-3xl absolute z-10 inset-x-0 bottom-4'
      style={{
        background: theme.background.secondary,
        display: isActivityOpen ? 'block' : 'none'
      }}
    >
      <div className='flex w-full justify-between items-center'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, key) => (
          <Icon key={key + 1} img='/img/wallpaper.webp' />
        ))}
      </div>
    </div>
  )
}

export default Footer
