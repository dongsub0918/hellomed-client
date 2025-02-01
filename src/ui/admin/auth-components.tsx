"use client";
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};
