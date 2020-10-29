import React from "react";
import { authService } from "../fBase";

function Home({ userObj }) {
  return <div>User : {userObj.displayName}</div>;
}

export default Home;
