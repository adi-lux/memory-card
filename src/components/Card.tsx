// Takes in an image and name
type Card = {
    image: string
    name: string
}

const Card = ({image, name}: Card): JSX.Element => {
    return (
        <div
            className='bg-fuchsia-50 col-span-1 row-span-1 grid place-items-center shadow-blue-800 m-5 hover:shadow-md hover:shadow-blue-800 active:shadow-lg active:shadow-blue-800 '>
            <p className='font-bold'>{name}</p>
            <img src={image} alt={`image of ${name}`}/>
        </div>
    )
}


export default Card;