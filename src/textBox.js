import React, {useState, useEffect} from 'react'

export default() => {
    const [userInput, changeUserInput] = useState('')
    return ( 
        <input type="text" size="65" style="display: inline;" value={userInput} onChange={e => changeUserInput(e.target.value)} />
    )
}