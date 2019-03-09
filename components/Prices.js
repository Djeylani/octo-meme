class Prices extends React.Component {
    state = {
        currency: ''
    }

    render() {
      let list = ''

      if (this.state.currency === 'USD') {
        list = <div>
                 <li className="list-group-item">
                 Bitcoin rates : {this.props.bpi.USD.description} : <span className="badge badge-primary">{this.props.bpi.USD.code}</span> <strong>{this.props.bpi.USD.rate}</strong>
                 </li>
              </div>
        console.log(this.props.bpi.USD.description)
      } else if (this.state.currency === 'GBP') {
        list = <div>
                 <li className="list-group-item">
                 Bitcoin rates : {this.props.bpi.GBP.description} : <span className="badge badge-primary">{this.props.bpi.GBP.code}</span> <strong>{this.props.bpi.GBP.rate}</strong>
                 </li>
              </div>
      } else if (this.state.currency === 'EUR') {
        list = <div>
                 <li className="list-group-item">
                 Bitcoin rates : {this.props.bpi.EUR.description} : <span className="badge badge-primary">{this.props.bpi.EUR.code}</span> <strong>{this.props.bpi.EUR.rate}</strong>
                 </li>
              </div>
      } else {
        list = ''
      }
        return (
            <div className="container">
            <ul className="list-group">
              {list}
            </ul>
            <select onChange={e => this/this.setState({ currency: e.target.value})} className="form-control">

              <option value="pick">Pick Options</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </select>
            </div>
        )
    }
}
export default Prices

// description