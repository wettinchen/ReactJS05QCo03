import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ["Bob", "Kevin", "Dave"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    };

    const handleClick = () => {
      console.log("You Clicked it.");
    };
    
    const handleClick2 = (name) => {
      console.log(`${name} was clicked.`);
    };

  return (
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click it</button>
        <button onClick={() => handleClick2("Dave") }>Click it</button>
    </main>
  )
}

export default Content