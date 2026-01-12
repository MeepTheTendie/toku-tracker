import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools' // Optional

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen p-4">
        <Outlet />
      </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})
