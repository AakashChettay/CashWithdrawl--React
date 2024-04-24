import './index.css';
import { Component } from 'react';
import DenominationItem from '../DenominationItem';

class CashWithdrawal extends Component {
  state = {
    currentBalance: 2000,
  };

  withDrawMoney = value => {
    this.setState(prevState => ({
      currentBalance: prevState.currentBalance - value,
    }));
  };

  render() {
    const { currentBalance } = this.state;
    const { denominationsList } = this.props;

    return (
      <div className="bgContainer">
        <div className="card">
          <div className="profile">
            <p className="logo">S</p>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balanceSection">
            <p className="bankBalanceHeading">Your Balance</p>
            <div className="caluclationSection">
              <p className="currentBalance">{currentBalance}</p>
              <p className="bankBalanceHeading rsin">In Rupees</p>
            </div>
          </div>
          <p className="WithdrawHeading">Withdraw</p>
          <p className="bankBalanceHeading bbh">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominationItemContainer">
            {denominationsList.map(denomination => (
              <DenominationItem
                key={denomination.id}
                withDrawMoney={this.withDrawMoney}
                value={denomination.value}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CashWithdrawal;
