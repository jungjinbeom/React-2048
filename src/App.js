import React from 'react'
import Header from "./Components/Header";
import AboveGame from "./Components/AboveGame";
import Game from "./Components/Game";

export default function App() {
    return <div className='container'>
        <Header/>
        <AboveGame/>
        <Game/>
    </div>
}