import Card from "./Card";

type GameBoard = {
    currScore: number;
    highScore: number;
    cardList: JSX.Element[];
}

const GameBoard = ({currScore, highScore, cardList}: GameBoard): JSX.Element => {
    return (
        <body
            className='min-w-full p-5'>
            <div
                className='grid grid-cols-5 grid-rows-[100px_1fr_30px]  bg-white h-full shadow-xl shadow-blue-800'>
                <section className='col-span-5 grid grid-cols-3 items-center text-center font-bold'>
                    <h1>High Score: {highScore}</h1>
                    <div className='grid invisible'>
                        <h2>You Lose!</h2>
                        <button>Restart?</button>
                    </div>
                    <h3>Current Score: {currScore}</h3>
                </section>
                <section className='col-span-5 col-span-5 grid grid-cols-4 grid-rows-4'>
                    {cardList}
                </section>
                <a className="text-center col-span-5 text-blue-500 underline"
                   href='https://www.vecteezy.com/free-vector/space'>Space
                    Vectors by
                    Vecteezy</a>
            </div>

        </body>)
}

export default GameBoard