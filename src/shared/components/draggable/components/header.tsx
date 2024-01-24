import { Button, Icon } from '@/shared/components'
import { useDraggingContext } from '@/shared/hooks/useDragging'
import usePersistedStore from '@/store'
import { XMarkIcon } from '@heroicons/react/20/solid'

function HeaderPage({ id }: { id: string }) {
  const { handleFullPage, fullPage, currentId } = useDraggingContext()
  const { theme, removeComponent } = usePersistedStore()

  return (
    <div
      onDoubleClick={handleFullPage}
      className={`flex flex-row-reverse w-full py-1
      cursor-n-resize
      ${!fullPage ? 'rounded-t-lg' : ''}
       `}
      style={{
        background: theme.background.secondary,
        zIndex: id === currentId ? 9999 : 10
      }}
    >
      <div className='flex items-center justify-end px-2 '>
        <Button
          className='rounded-full'
          style={{
            background: theme.background.primary,
            padding: 1
          }}
          onClick={(e) => {
            e.stopPropagation()
            removeComponent(id)
          }}
        >
          <Icon icon={XMarkIcon} color={theme.text.title} />
        </Button>
      </div>
    </div>
  )
}

export default HeaderPage
