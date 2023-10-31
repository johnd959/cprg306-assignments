"use client";

import { useUserAuth } from "./_utils/auth-context";

const { user, gitHubSignIn, firebaseSignOut} = useUserAuth();

async function handleOnLogIn() {
    try
    {
        await gitHubSignIn();
    }
    catch(error)
    {
        console.log(error); 
    }

  }

  async function handleOnLogOut() {
    try
    {
        await firebaseSignOut();
    }
    catch(error)
    {
        console.log(error); 
    }
  }

export default function Page() {


  if (!user) {
    return (
      <main>
        <h1>Welcome</h1>
        <button onClick={handleOnLogIn}>Log In</button>
      </main>
    );
  }
}
