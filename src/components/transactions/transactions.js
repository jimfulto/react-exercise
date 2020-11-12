import React   from 'react'
import  Transaction  from './transaction/transaction'
import TopBar from '../ui/topbar'

const Transactions = (props) => {

    return(
        <div className="container-fluid pb-5">
            <TopBar text="Your Purchases" />
            {props.transactions.map((transaction,i) => {
                return(
                    <>
                    
                    <div key={i}>
                        <Transaction i={i}  transaction={transaction} />
                    </div>
                   
                    </>
                )
            })}
        </div>
    )

}

export default Transactions