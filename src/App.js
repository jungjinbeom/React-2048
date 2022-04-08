import React, {useEffect, useState} from 'react'
import Header from "./Components/Header";
import AboveGame from "./Components/AboveGame";
import Game from "./Components/Game";
import useLocalStorageNumber from "./hook/useLocalStorageNumber";

export default function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useLocalStorageNumber('bestScore', 0);

    useEffect(() => {
        if (score > bestScore) {
            setBestScore(score);
        }
    });
    return <div className='container'>
        <Header  score={score} bestScore={bestScore}/>
        <AboveGame/>
        <Game setScore={setScore}/>
    </div>
}