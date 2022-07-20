// Code Keypad Component Here
import React from "react"

function Keypad() {
    function keyEntered() {
        console.log("Entering password...")
    }
    
    
    return (
        <input
            type="password"
            name="keypad"
            onChange={keyEntered}
            placeholder="secret password"
        />
    )
    
}

export default Keypad