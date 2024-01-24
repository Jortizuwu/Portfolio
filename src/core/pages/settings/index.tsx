import Appearance from './components/appearance'
import Sidebar from './components/sidebar'

function Settings() {
  return (
    <div className='h-full w-full flex flex-row'>
      <Sidebar />
      <Appearance />
    </div>
  )
}

export default Settings
