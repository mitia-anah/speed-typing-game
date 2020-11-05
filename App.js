import React, { useEffect, useState } from "react"

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
    const [text, setText] = useState('')
    const [time, setTime] = useState(15)
    const [runTime, setRunTime] = useState(false)

    function handleChange(e) {
        const { value } = e.target
        setText(value)
    }
    console.log(text);

    function numberOfWordCount() {
        const countedWord = text.trim().split(' ');
        return countedWord.filter(word => word !== '').length;
    }

    function timer() {
        setRunTime(true)
    }

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
        }
    }, [runTime, time])

    /**
     * Challenge:
     * 
     * Make it so clicking the Start button starts the timer instead of it starting on refresh
     * (Hint: use a new state variable to indicate if the game should be running or not)
     */
    /**
    * Challenge:
    * 
    * 1. Create state to hold the current value of the countdown timer.
    *    Display this time in the "Time Remaining" header
    * 
    * 2. Set up an effect that runs every time the `timeRemaining` changes
    *    The effect should wait 1 second, then decrement the `timeRemaining` by 1
    * 
    *    Hint: use `setTimeout` instead of `setInterval`. This will help you avoid
    *    a lot of extra work.
    * 
    *    Warning: there will be a bug in this, but we'll tackle that next
    */

    return (
        <>
            <h1>Speed Typing Game</h1>
            <textarea value={text} onChange={handleChange} />
            <h4>Time remaining:{time}</h4>
            <button onClick={timer}>start</button>
            {/* <button onClick={() => console.log(numberOfWordCount(text))}>start</button> */}
            <h1>Word count:{numberOfWordCount(text)}</h1>

        </>
    )
}

export default App



/**
 * Challenge: build the basic structure of our game
 *
 * 1. <h1> title at the top
 * 2. <textarea> for the box to type in
 *      (tip: React normalizes <textarea /> to be more like <input />,
 *      so it can be used as a self-closing element and uses the `value` property
 *      to set its contents)
 * 3. <h4> ti display the amount of time remaining
 * 4. <button> to start the game
 * 5. Another <h1> to display the word count
 */
