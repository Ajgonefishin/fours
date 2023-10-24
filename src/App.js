function LetterItem({letter}) {
    return (
        <div className="h-16 w-16 border-black flex items-center justify-center">
            {letter}
        </div>
    )
}

export default function GameBoard() {
  return(
      <div className="flex h-screen justify-center items-center">
          <div className="grid grid-cols-1 justify-items-center border-8 rounded-3xl p-4">
              <h1 className="text-5xl font-roboto font-bold pb-4">
                  Fours
              </h1>
              <p className="text-xl font-roboto">
                  Given the string of these 4 letters, how many words can you make?
              </p>
              <LetterItem letter="X"/>
          </div>
      </div>
  );
}