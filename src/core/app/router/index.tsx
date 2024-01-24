import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Layout = lazy(() => import('../layout'))

import PageNotFound from '@/core/pages/404'

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<span>Loading ...</span>}>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
