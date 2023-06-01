import './style.css'

const Main = () => {
    return(
        <>
        <div className='header'>
            <div className='row1'>
                <h1>A room without a book is likes<br/>a body without a soul.</h1>
            </div>
            <div className='row2'>
                <h2>Find Your Book</h2>
                <div className='search'>
                    <input type='text' placeholder='Enter book name'/>
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <img src='./images/bg2.png'/>
            </div>
        </div>
        </>
    )
}

export default Main