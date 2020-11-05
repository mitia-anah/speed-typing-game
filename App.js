import React, { useEffect, useRef, useState } from "react"

/*Challenge: Using hooks, track the state of the text in the textarea on every keystroke
* To verify it's working, you could just console.log the state on every change
* 
* https://scrimba.com/p/p7P5Hd/cW8Jdfy
*/
/**
 * Challenge:
 * 
 * Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 */

function App() {
    const START_GAME = 5;

    const [text, setText] = useState('')
    const [time, setTime] = useState(START_GAME)
    const [runTime, setRunTime] = useState(false)
    const [finalResult, setfinalResult] = useState(0)
    const inputText = useRef(null)


    function handleChange(e) {
        const { value } = e.target
        setText(value)
    }
    console.log(text);

    function numberOfWordCount() {
        const countedWord = text.trim().split(' ');
        return countedWord.filter(word => word !== '').length;
    }
    // function timer() {
    //     setRunTime(true)
    //     setfinalResult(0)
    //     setText(' ')
    // }

    function restartCount() {
        setRunTime(true)
        setTime(START_GAME)
        setText('')
        inputText.current.disabled = false
        inputText.current.focus()
    }

    function endGame() {
        setRunTime(false)
        setfinalResult(numberOfWordCount(text))
    }

    /**
 * Challenge:
 * 
 * Make the input box focus (DOM elements have a method called .focus()) 
 * immediately when the game starts
 */
    useEffect(() => {
        let startTime = null;
        if (runTime) {
            if (time > 0) {
                startTime = setTimeout(() => {
                    setTime(prevState => {
                        return prevState - 1
                    })
                }, 1000)
            }
        } else if (runTime === 0) {
            endGame()
        }
    }, [runTime, time])

    return (
        <>
            <h1>Speed Typing Game</h1>
            <textarea ref={inputText} disabled={!runTime} value={text} onChange={handleChange} />
            <h4>Time remaining:{time}</h4>
            <button disabled={runTime} onClick={restartCount}>start</button>
            {/* <button onClick={() => console.log(numberOfWordCount(text))}>start</button> */}
            <h1>Word count:{finalResult}</h1>

        </>
    )
}

export default App
