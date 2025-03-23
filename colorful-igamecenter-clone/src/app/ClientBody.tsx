"use client";

import { useEffect, useState } from "react";

interface ClientBodyProps {
  children: React.ReactNode;
  inter: string;
  orbitron: string;
  montserrat: string;
}

export default function ClientBody({
  children,
  inter,
  orbitron,
  montserrat,
}: ClientBodyProps) {
  const [mounted, setMounted] = useState(false);

  // Wait until component is mounted before applying any client-side logic
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <body
      className={`${inter} ${orbitron} ${montserrat} font-sans bg-black text-white`}
      suppressHydrationWarning
    >
      {children}
    </body>
  );
}
