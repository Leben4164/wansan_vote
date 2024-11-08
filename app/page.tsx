"use client"

import { useState } from "react";
import Auth from "@/components/auth";
import Vote from "@/components/vote";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuth, setShowAuth] = useState(true);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    setShowAuth(false);
  };

  return (
    <div>
      {showAuth && <Auth onAuthenticate={handleAuthentication} />}
      {isAuthenticated && <Vote />}
    </div>
  );
}
