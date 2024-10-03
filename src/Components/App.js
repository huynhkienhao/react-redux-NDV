import { Component } from 'react';
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hienThiForm: true
    }
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search ketNoi={() => this.doiTrangThai()} />
              <TableData />
              <AddUser hienThiForm={this.state.hienThiForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
