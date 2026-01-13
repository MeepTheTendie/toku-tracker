import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ConvexProvider } from "convex/react";
import { convex } from "./lib/convex";
import "./index.css";

import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#111",
        color: "#fff",
      }}
    >
      Loading...
    </div>
  );
}

function App() {
  if (!convex) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#111",
          color: "#fff",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h1>Toku Tracker</h1>
        <p style={{ color: "#888" }}>Loading...</p>
      </div>
    );
  }

  return (
    <ConvexProvider client={convex}>
      <RouterProvider router={router} />
    </ConvexProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
