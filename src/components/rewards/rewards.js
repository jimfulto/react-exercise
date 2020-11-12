import React , { Component } from 'react'
import TopBar from '../ui/topbar'

export default class MainData extends Component{

    state = {
        selectedMonth : 'Jan',
        showSelectMonthDropdown  : false
    }

    selectMonthToggle = () => {
        this.setState({
            showSelectMonthDropdown : !this.state.showSelectMonthDropdown
        })
    }

    showSelectedMonthReward = () => {
        if(this.state.selectedMonth === 'Jan') return this.props.janReward;
        if(this.state.selectedMonth === 'Feb') return this.props.febReward;
        return this.props.marchReward
    }

    selectMonth = (month) => {
        this.setState({
            selectedMonth : month,
            showSelectMonthDropdown : false
        })
    }

    render(){

        return(
            <div className="container-fluid">
            <TopBar text="Your Rewards" />
                <div className="row">
                    <div className="col-12">
                        <div className="row mt-4">
                            <div className="col-6">
                                <div className="card text-center">
                                <h4>Total rewards</h4>
                                <hr></hr>
                                <h3>$ {this.props.totalRewards}</h3>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card text-center">
                                   <div>
                                       <h4>Reward for month</h4> 
                                   </div>
                                   <div className="dropdownButton px-0 py-0">
                                        <div className="py-2" style={{borderBottom:"1px solid grey"}} onClick={this.selectMonthToggle}>{this.state.selectedMonth}
                                            <i class="fa fa-angle-down ml-2"></i>
                                        </div>
                                        {this.state.showSelectMonthDropdown ?
                                        <div>
                                       
                                       <div className="py-2" style={{borderBottom:"1px solid grey"}} onClick={() => this.selectMonth('Jan')}>Jan</div>
                                       
                                       <div  className="py-2" style={{borderBottom:"1px solid grey"}} onClick={() => this.selectMonth('Feb')}>Feb</div>
                                      
                                       <div  className="py-2" onClick={() => this.selectMonth('March')}>March</div>
                                       </div> : ''}
                                   </div>
                                    
                                <hr></hr> 
                                <h3>$ {this.showSelectedMonthReward()}</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

