import {useState} from "react";

//todo: actually dynamically change the letters
//set the letters and return a grid with those letters
const text = "RAKE"
const letters = text.split("")
const letterGrid = letters.map( (letter) => <LetterItem letter={letter} />)

let inputText = "";
let keyPressed = "";

//todo: figure out backspace issue. can only backspace once and it doesn't trim the inputText length
document.addEventListener('keydown', (e) => {
    if (keyPressed !== e.code) {
        keyPressed = e.code
        console.log("Key pressed: " + e.key)
        const alphabet = "qwertyuiopasdfghjklzxcvbnm".split("")
        if(alphabet.includes(e.key)) {
            console.log("Key is in alphabet.")
            inputText += e.key
            console.log(inputText)
        } else if (e.code === "8") {
            inputText = inputText.slice(0, inputText.length - 2)
            console.log(inputText)
        }
    }
});

document.addEventListener('keyup', (e) => {
    keyPressed = ""
})
export default function GameBoard() {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="grid grid-cols-1 gap-y-4 justify-items-center border-8 rounded-3xl p-4">
                <IntroTextBox />
                <div className="grid grid-cols-4 gap-2">
                    {letterGrid}
                </div>
                <CustomInputField />
            </div>
        </div>
    );
}

function LetterItem({letter}) {
    return (
        <div className="h-16 w-16 bg-green-300 rounded-3xl flex items-center justify-center text-4xl font-bold">
            {letter}
        </div>
    )
}
function CustomInputField({text}) {
    const [typing, setTyping] = useState("Start typing...");
    document.addEventListener('keydown', (e) => {
        setTyping(inputText)
    })

    let classInfo = "h-16 text-4xl flex items-center justify-center font-consolas"
    if (inputText === "") {
        classInfo += " text-gray-200"
    } else {
        classInfo += " text-gray-600"
    }

    return (
        <>
            <div className={classInfo}>
                {typing}
            </div>
        </>
    );
}

function IntroTextBox() {
    return(
        <>
            <h1 className="text-5xl font-roboto-slab font-bold">
                Fours
            </h1>
            <p className="text-xl font-roboto-slab">
                Given this string of 4 letters, how many words can you make?
            </p>
        </>
    )
}