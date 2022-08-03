// Takes in an image and name
type Card = {
    image: string
    name: string
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const Card = ({image, name, handleClick}: Card): JSX.Element => {
    return (
        <button
            className='bg-fuchsia-50 col-span-1 row-span-1 grid place-items-center shadow-blue-800 m-5 hover:shadow-md hover:shadow-blue-800 active:shadow-lg active:shadow-blue-800 '
            onClick={handleClick}>
            <p className='pointer-events-none font-bold' onClick={() => false}>{name}</p>
            <img src={image} alt={`image of ${name}`} className='pointer-events-none'/>
        </button>
    )
}


export default Card;