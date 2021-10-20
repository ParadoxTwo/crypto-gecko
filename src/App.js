import './App.css';
import { useState } from 'react';
import InitialView from './components/InitialView';
import Coins from './components/Coins';
import Loading from './components/Loading';

function App() {
  const [initialView, setInitialView] = useState(true)
  const [loading, setLoading] = useState(true)
  return (
    <div className="App">
      <InitialView setInitialView = {setInitialView} initialView = {initialView}/>
      <Loading/>
      <Coins initialView = {initialView}/>
    </div>
  );
}

export default App;
