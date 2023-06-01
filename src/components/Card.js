import Modal from "./Modal"
import { useState } from "react"

const Card = ({book}) => {
    const [show, setShow] = useState(false)
    const[item, setItem] = useState()

    return(
        <>
        {book.map((item) => {
            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
            let amount = item.saleInfo && item.saleInfo.saleability
            if(thumbnail != undefined && amount != undefined) {
                return(
                    <div className='card' onClick={() => {setShow(true); setItem(item)}}>
                    <img src={thumbnail} alt=''/>
                    <div className='bottom'>
                        <h3 className='title'>{item.volumeInfo.title}</h3>
                        <p className='amount'>&#8377;{amount}</p>
                    </div>
                    </div>
                )
            }})}
            <Modal show={show} item={item} onClose={() => setShow(false)}/>
        </>
    )
}

export default Card