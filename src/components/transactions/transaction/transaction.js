import React from 'react'
import { calculateReward } from '../../utils'



const Transaction = (props) => {

    let color = 'white'
    if(props.i%2 === 1){
        color = '#D3D3D3'
    }

    return(
        <div className="row py-3" style={{background:color,borderBottom:"1px solid #D3D3D3",paddingBottom:"10px"}}>
            <div className="col-12 d-flex justify-content-between align-items-center">
                <span>
                <h5 style={{textTransform:"capitalize"}}>{props.transaction.text}</h5> 
                <span className="ml-3">Cost: ${props.transaction.cost}</span>
                </span>
                
                <span style={{float:"right"}}>
                   <div>
                       {props.transaction.date}
                   </div>
                   <div>
                       Points : $ {calculateReward(props.transaction.cost)}
                   </div>
                </span>
            </div>

        
        </div>
    )
}

export default Transaction