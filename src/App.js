import React from 'react';
import './index.css';
import logo from './img/money.png';
import Footer from './Footer/Footer'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //Initiate 5 variable here.
      input: 0, //User type the input money, which is the root variable
      convertion: 0,//Output Money.
      Currency1: "USD", //the first Selector's country name
      Currency2:"USD",//the second Selector's country name
      rate: '' //To represent the currency rate of two currencies
    }
  };
  handleInputChange = e => { //To update the input field
    this.setState({
      input: e.target.value,
    })
  };
  handleSelectorChange = e => { // To push the option in the First Selector into State: Currrency1
    let country = e.target.value;
    this.setState({
      Currency1: country
    })
  };
  handleSelector2Change = e => {// To push the option in the First Selector into State: Currrency2
    let country = e.target.value;
    this.setState({
      Currency2: country
    })
  };
  handleSwapClick = () => {//After click the swap button, the Options in two Selectors will swap each other
    let temp = this.state.Currency1;//create two temp variables which are the current options of selectors
    let temp2 = this.state.Currency2;
    this.setState({
      Currency1: temp2,//Swap
      Currency2: temp
    })
  }
  Calculate = () => {//fetch the current currency rate from the API and do the execution
    fetch(`https://api.exchangerate-api.com/v4/latest/${this.state.Currency1}`)
        .then(res => res.json())
        .then(data => {

          const rate = data.rates[this.state.Currency2];//get the rate of two currencies from the API
          this.setState({
            rate: `1 ${this.state.Currency1} = ${rate} ${this.state.Currency2}`, //push the rate into a String
            convertion: (this.state.input*rate).toFixed(2)//output the converted money after the rate obtained from the API
          });
        });
  }
  render() {
    this.Calculate(); //Once the state changes, React will rerender the webpage. Therefore, to run the Calculate function here to make sure the converted
    //number is updated when the country name is changed.
    return (
        // use flex box to style. From top to bottom and center all the elements
        <div className="Container">
          {/*Image here*/}
          <img src={logo} alt="Money_Convertion" className="money-img" />
          <h1 className="h1Style">Exchange Rate Calculator</h1>

          <h2>Choose the currency and the amounts to get the exchange rate</h2>

          <div className="smallContainer">
            <select defaultValue="USD" value={this.state.Currency1} className="Selector1" onChange={this.handleSelectorChange} >
              <option value="AED">AED</option>
              <option value="ARS">ARS</option>
              <option value="AUD">AUD</option>
              <option value="BGN">BGN</option>
              <option value="BRL">BRL</option>
              <option value="BSD">BSD</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CLP">CLP</option>
              <option value="CNY">CNY</option>
              <option value="USD">USD</option>
              <option value="COP">COP</option>
              <option value="CZK">CZK</option>
              <option value="DKK">DKK</option>
              <option value="DOP">DOP</option>
              <option value="EGP">EGP</option>
              <option value="EUR">EUR</option>
              <option value="FJD">FJD</option>
              <option value="GBP">GBP</option>
              <option value="GTQ">GTQ</option>
              <option value="HKD">HKD</option>
              <option value="HRK">HRK</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="KZT">KZT</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="NOK">NOK</option>
              <option value="NZD">NZD</option>
              <option value="PAB">PAB</option>
              <option value="PEN">PEN</option>
              <option value="PHP">PHP</option>
              <option value="PKR">PKR</option>
              <option value="PLN">PLN</option>
              <option value="PYG">PYG</option>
              <option value="RON">RON</option>
              <option value="RUB">RUB</option>
              <option value="SAR">SAR</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="TWD">TWD</option>
              <option value="UAH">UAH</option>
              <option value="UYU">UYU</option>
              <option value="VND">VND</option>
              <option value="ZAR">ZAR</option>
            </select>
            {/*Input must be number only. The value property shows the value and it changes when the state updated. */}
            <input type="number" className="Input" value={this.state.input} onChange={this.handleInputChange}/>
          </div>
          {/*This div displays the button and the rate information*/}
          <div className="smallContainer">
            <button className="btn" onClick={this.handleSwapClick}>Swap</button>
            <h4 className="h1Style">{this.state.rate}</h4>
          </div>
          <div className="smallContainer">
            <select defaultValue="USD" value={this.state.Currency2} className="Selector2" onChange={this.handleSelector2Change} >
              <option value="AED" className="Option">AED</option>
              <option value="ARS">ARS</option>
              <option value="AUD">AUD</option>
              <option value="BGN">BGN</option>
              <option value="BRL">BRL</option>
              <option value="BSD">BSD</option>
              <option value="CAD">CAD</option>
              <option value="CHF">CHF</option>
              <option value="CLP">CLP</option>
              <option value="CNY">CNY</option>
              <option value="USD">USD</option>
              <option value="COP">COP</option>
              <option value="CZK">CZK</option>
              <option value="DKK">DKK</option>
              <option value="DOP">DOP</option>
              <option value="EGP">EGP</option>
              <option value="EUR">EUR</option>
              <option value="FJD">FJD</option>
              <option value="GBP">GBP</option>
              <option value="GTQ">GTQ</option>
              <option value="HKD">HKD</option>
              <option value="HRK">HRK</option>
              <option value="HUF">HUF</option>
              <option value="IDR">IDR</option>
              <option value="ILS">ILS</option>
              <option value="INR">INR</option>
              <option value="ISK">ISK</option>
              <option value="JPY">JPY</option>
              <option value="KRW">KRW</option>
              <option value="KZT">KZT</option>
              <option value="MXN">MXN</option>
              <option value="MYR">MYR</option>
              <option value="NOK">NOK</option>
              <option value="NZD">NZD</option>
              <option value="PAB">PAB</option>
              <option value="PEN">PEN</option>
              <option value="PHP">PHP</option>
              <option value="PKR">PKR</option>
              <option value="PLN">PLN</option>
              <option value="PYG">PYG</option>
              <option value="RON">RON</option>
              <option value="RUB">RUB</option>
              <option value="SAR">SAR</option>
              <option value="SEK">SEK</option>
              <option value="SGD">SGD</option>
              <option value="THB">THB</option>
              <option value="TRY">TRY</option>
              <option value="TWD">TWD</option>
              <option value="UAH">UAH</option>
              <option value="UYU">UYU</option>
              <option value="VND">VND</option>
              <option value="ZAR">ZAR</option>
            </select>
            <input type="number" value={this.state.convertion}  className="Input" onChange={this.handleInput2Change}/>
          </div>
          <Footer/>
        </div>
    )
  }
}
export  default App;
