import React, { useState } from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import ProductsList from '../Components/ProductsList'
import '../App.css'
import CancelIcon from '@mui/icons-material/Cancel';

function Homepage() {

    const [openSidebar, setopenSidebar] = useState(false)

    const hideSidebar = () => {
        setopenSidebar(false)
    }

    return (
        <div>

            {
                openSidebar && (
                    <div className="leftSidebar" id="leftSidebar">
                        <div className="heading">
                            <h1>Left Sidebar</h1>
                            <CancelIcon
                                onClick={hideSidebar}
                                style={{ fontSize: '30px' }}
                            />
                        </div>

                        <div className="items">
                            <h1>Trending</h1>
                            <div className="oneItem">
                                <p>Best Sellers</p>
                                <i
                                    style={{ color: 'gray', fontSize: '14px' }}
                                    // style="color: gray; font-size: 14px"
                                    className="fa fa-chevron-right"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <div className="oneItem">
                                <p>New Releases</p>
                                <i
                                    style={{ color: 'gray', fontSize: '14px' }}
                                    // style="color: gray; font-size: 14px"
                                    className="fa fa-chevron-right"
                                    aria-hidden="true"
                                ></i>
                            </div>
                            <div className="oneItem">
                                <p>Movers & Shakers</p>
                                <i
                                    style={{ color: 'gray', fontSize: '14px' }}
                                    // style="color: gray; font-size: 14px"
                                    className="fa fa-chevron-right"
                                    aria-hidden="true"
                                ></i>
                            </div>
                        </div>
                    </div>
                )
            }


            {/* Header */}
            <Header />

            {/* Navbar */}
            <Navbar
                setopenSidebar={setopenSidebar}
            />

            {/* Products List */}
            <ProductsList />
        </div >
    )
}

export default Homepage