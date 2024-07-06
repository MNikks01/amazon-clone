import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import '../App.css'

function Navbar(props) {

    const { setopenSidebar } = props

    const showSidebar = () => {
        setopenSidebar(true)
    }



    return (
        <nav>
            <p onClick={showSidebar}>
                <MenuIcon
                    style={{
                        color: 'white',
                        fontSize: '20px'
                    }}
                />
                All
            </p>
            <p>Amazon Mini TV</p>
            <p>Sell</p>
            <p>Gift Cards</p>
            <p>Amazon Business</p>
            <p>Buy Again</p>
            <p>Browsing History</p>
            <p>Smarthphones</p>
            <p>Electronics</p>
        </nav>
    )
}

export default Navbar