import React from "react";
import "./App.css";
import UseEffectComponents from "./UseEffectComponents";
import UseStateComponent from "./UseStateComponent";
import UseContextComponent, { useUserContext } from "./UseContextComponent";
import UseReducerComponent from "./UseReducerComponent";
import UseRefComponent from "./UseRefComponent";
import CustomHookComponent from "./CustomHookComponent";

function App() {
  const user = useUserContext();
  return (
    <div>
      <h1>UseState</h1>
      <UseStateComponent></UseStateComponent>
      <h1>UseEffect</h1>
      <UseEffectComponents></UseEffectComponents>
      <h1>UseContext</h1>
      <UseContextComponent></UseContextComponent>
      {/* OR */}
      <div>{user.first}</div>
      <div>{user.last}</div>
      <h1>UseReducer</h1>
      <UseReducerComponent></UseReducerComponent>
      <h1>UseRef</h1>
      <UseRefComponent></UseRefComponent>
      <h1>UseCustomComponent</h1>
      <CustomHookComponent></CustomHookComponent>
    </div>
  );
}

export default App;
