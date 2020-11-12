import React  from 'react'


const SideBar = (props) => {

    return(
        <div className="container-fluid mx-0 text-white sidebar pb-3">
            <div className="row text-white" style={{borderBottom : "1px solid #ccc",paddingBottom:"15px",width:"80%",margin:"auto"}}>
                <div className="col-12 px-2 py-3">
                <h3 className="text-white text-center">Welcome</h3>
                </div>
            </div>
            <div className="row text-white mt-4" style={{borderBottom : "1px solid #ccc",paddingBottom:"15px",width:"80%",margin:"auto",cursor:"pointer"}}>
                <div className="col-12 px-2 py-3 align-items-center d-flex">
                <i class="fa fa-2x fa-shopping-cart mr-4" aria-hidden="true"></i>
                <h4 className="text-white text-center" onClick={props.selectTransaction}>Transactions</h4>
                </div>
            </div>
            <div className="row text-white mt-4" style={{width:"80%",margin:"auto",cursor:"pointer"}} >
                <div className="col-12 px-2 py-3 align-items-center d-flex">
                <i class="fa fa-2x fa-trophy mr-4" aria-hidden="true"></i>
                <h4 className="text-white text-center" onClick={props.selectRewards} >Rewards</h4>
                </div>
            </div>
            
        </div>
    )
    
}

export default SideBar