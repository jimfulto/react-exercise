import React, { Component } from "react";
import SideBar from "./ui/sidebar";
import Transactions from "./transactions/transactions";
import Rewards from "./rewards/rewards";
import { calculateReward } from './utils'

export default class Main extends Component {

    state = {
        transactionsSelected : true,
        rewardsSelected : false,

        transactions : [
            {
                date : '01 Jan 2020',
                text : 'purchased item number 1',
                cost  : '120',
            
            },
            {
                date : '01 Feb 2020',
                text : 'purchased item number 2',
                cost  : '220',
            
            },
            {
                date : '01 March 2020',
                text : 'purchased item number 3',
                cost  : '220',
            
            },
            {
                date : '10 Feb 2020',
                text : 'purchased item number 4',
                cost  : '1220',
            
            }
        ],

        totalRewards : 0,
        janReward : 0,
        febReward : 0,
        marchReward : 0,
    }

    componentDidMount(){

        let totalRewards = 0;
        let janReward = 0;
        let febReward = 0;
        let marchReward = 0;

        for(let i = 0; i < this.state.transactions.length;i++){

            let tempReward = calculateReward(parseFloat(this.state.transactions[i].cost))
            totalRewards +=   tempReward
            let x = this.state.transactions[i].date.search('Jan')
            let y = this.state.transactions[i].date.search('Feb')
            let z = this.state.transactions[i].date.search('Mar')

            if(x != -1) janReward += tempReward;
            if(y != -1) febReward += tempReward;
            if(z != -1) marchReward += tempReward;

        }

        this.setState({
            totalRewards : totalRewards,
            janReward : janReward,
            febReward : febReward,
            marchReward : marchReward
        })
    }

    selectTransaction = () => {
        this.setState({
            transactionsSelected : true,
            rewardsSelected : false
        })
    }

    selectRewards = () => {
        this.setState({
            rewardsSelected : true,
            transactionsSelected : false
        })
    }


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-12 px-0">
            <SideBar selectTransaction={this.selectTransaction} selectRewards={this.selectRewards} />
          </div>
          {this.state.transactionsSelected ?  <div className="col-12 col-md-9 px-0"> <Transactions transactions={this.state.transactions} /> </div> : ''}
          {this.state.rewardsSelected ?  <div className="col-12 col-md-9 px-0"> <Rewards totalRewards={this.state.totalRewards} 
          janReward={this.state.janReward}  febReward={this.state.febReward} marchReward={this.state.marchReward}/> </div> : ''}
        </div>
      </div>
    ); 
  }
}
