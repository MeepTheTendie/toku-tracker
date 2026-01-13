import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { ConvexProviderWithClient } from 'convex/react'
import { convex } from './lib/convex'
import './index.css'

import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConvexProviderWithClient client={convex}>
      <RouterProvider router={router} />
    </ConvexProviderWithClient>
  </React.StrictMode>,
)
