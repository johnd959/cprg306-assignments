"use client";

import { redirect } from "next/navigation";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  async function handleOnLogIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  // if (user != null) {
  //   redirect("week10/shopping-list", 'push');
  // }

  return (
    <main>
      <h1>Welcome</h1>
      {user == null ? (
        <button onClick={handleOnLogIn}>Log In</button>
      ) : (
        <div>
          <p>Current User: {user?.displayName} </p>
          <Link href="week10/shopping-list">Shopping List</Link>
        </div>
      )}
    </main>
  );
}
