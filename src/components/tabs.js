import React from 'react'

const tabs = (props) => {
    return (
        <>
            <div className="tabs">
                <div className="container">
                    <div className="row">
                        <div className={"col-4 " + ( props.activate[0] ? 'active': '')}>
                            <i className="fa-regular fa-calendar"></i>
                            <p>1. SELECT QURBANI</p>
                        </div>
                        <div className={"col-4 " + ( props.activate[1] ? 'active': '')}>
                            <i className="fa-solid fa-truck"></i>
                            <p>2. PROVIDE ADDRESS</p>
                        </div>
                        <div className={"col-4 " + ( props.activate[2] ? 'active': '')}>
                            <i className="fa-regular fa-credit-card"></i>
                            <p>3. Order Placed</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default tabs