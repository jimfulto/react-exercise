import React from 'react'

const TopBar = (props) => {

    return(
        <div className="row">
            <div className="col-12 p-3" style={{background : "#D3D3D3"}}>
                <h3>{props.text}</h3>
            </div>
        </div>
    )
}

export default TopBar