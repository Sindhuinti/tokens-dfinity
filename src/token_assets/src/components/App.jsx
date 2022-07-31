import React from "react";
import Header from "./Header";
import Faucet from "./Faucet";
import Balance from "./Balance";
import Transfer from "./Transfer";
import { isPropertySignature } from "../../../../node_modules/typescript/lib/typescript";

function App(props) {

  return (
    <div id="screen">
      <Header />
      <Faucet userPrincipal={props.loggedInPrincipal} />
      <Balance />
      <Transfer />
    </div>
  );
}

export default App;
