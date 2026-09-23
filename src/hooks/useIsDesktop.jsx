import React from "react";

export default function useIsDesktop(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > breakpoint);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isDesktop;
}