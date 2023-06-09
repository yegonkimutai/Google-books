import { useState } from "react"
import './style.css'
import Card from './Card'
import axios from 'axios'

const Main = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([])
    const searchBook = (e) => {
        if(e.key === 'Enter') {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAtl6Pxq-ulSyusBAvFkcEdlPAfcfdrW_s' + '&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
        }
    }

    return(
        <>
        <div className='header'>
            <div className='row1'>
                <h1>A room without a book is likes<br/>a body without a soul.</h1>
            </div>
            <div className='row2'>
                <h2>Find Your Book</h2>
                <div className='search'>
                    <input
                     type='text'
                    placeholder='Enter keyword eg:react,science e.t.c...' 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={searchBook}
                    />
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <img src='./images/bg2.png'/>
            </div>
        </div>

        <div className='container'>
           {  <Card book={data}/> }
        </div>
        </>
    )
}

export default Main