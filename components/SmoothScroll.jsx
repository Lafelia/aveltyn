"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ duration: 1.7, syncTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
