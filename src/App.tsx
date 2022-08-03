import {useState} from 'react'
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
    const [clickList, setClickList] = useState([])
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

    const convertCards = (cList: Card[]) => {
        return cList.map((card) => {
            const {image, name} = card
            return (<Card key={name} image={image} name={name}/>)
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