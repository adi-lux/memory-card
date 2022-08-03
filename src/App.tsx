import {useEffect, useState} from 'react'
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Card from "./components/Card";
import Argh from './assets/Argh.svg'
import Binz from './assets/Binz.svg'
import Cara from './assets/Cara.svg'
import Carlee from './assets/Carlee.svg'
import Charlie from './assets/Charlie.svg'
import Chipee from './assets/Chipee.svg'
import Droz from './assets/Droz.svg'
import Filip from './assets/Filip.svg'
import Flem from './assets/Flem.svg'
import Gronk from './assets/Gronk.svg'
import Hilda from './assets/Hilda.svg'
import Karrie from './assets/Karrie.svg'
import Marzie from './assets/Marzie.svg'
import Mees from './assets/Mees.svg'
import Miek from './assets/Miek.svg'
import Robin from './assets/Robin.svg'


function App(): JSX.Element {

    const [highScore, setHighScore] = useState(0)
    const [clickList, setClickList]: [string[], any] = useState([])
    const [cardList, setCardList] = useState([
        {image: Argh, name: 'Argh'},
        {image: Binz, name: 'Binz'},
        {image: Cara, name: 'Cara'},
        {image: Carlee, name: 'Carlee'},
        {image: Charlie, name: 'Charlie'},
        {image: Chipee, name: 'Chipee'},
        {image: Droz, name: 'Droz'},
        {image: Filip, name: 'Filip'},
        {image: Flem, name: 'Flem'},
        {image: Gronk, name: 'Gronk'},
        {image: Hilda, name: 'Hilda'},
        {image: Karrie, name: 'Karrie'},
        {image: Marzie, name: 'Marzie'},
        {image: Mees, name: 'Mees'},
        {image: Miek, name: 'Miek'},
        {image: Robin, name: 'Robin'}
    ])


    useEffect(() => {
        // if clickList length = 0 > make lose
        // if clickList length = 16 > make win


        if (highScore < clickList.length) {
            setHighScore(clickList.length)
        }

        setCardList((carList) => {
            let random = carList.length - 1
            let generated
            for (random; random > 0; random--) {
                generated = Math.floor(Math.random() * (random + 1));
                [carList[random], carList[generated]] = [carList[generated], carList[random]]
            }
            return carList
        })
        // fisher yates
    }, [clickList])


    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const clickedName = (e.target as HTMLButtonElement).children[0].textContent!
        if (clickList.includes(clickedName)) {
            setClickList([])
        } else {
            setClickList(clickList.concat(clickedName))
        }
    }
    const convertCards = (cList: { image: string, name: string }[]) => {
        return cList.map((card) => {
            const {image, name} = card
            return (<Card key={name} image={image} name={name} handleClick={handleClick}/>)
        })
    }

    // click handlers for only the card -> when card clicked
    return (
        <div className='text-center font-mono grid grid-flow-row-dense grid-rows-layout bg-fuchsia-100 min-h-[100vh]'>
            <Header/>
            <GameBoard highScore={highScore}
                       currScore={clickList.length}
                       cardList={convertCards(cardList)}
            />
        </div>)
}

export default App