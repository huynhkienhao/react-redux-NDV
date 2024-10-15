import { Component } from 'react';
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from './Data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hienThiForm: true,
      data: DataUser,
      searchText: ''
    }
  }

  getNewUserData = (name, tel, permission) => {
    let item = {};
    item.id = "";
    item.name = name;
    item.tel = tel;
    item.permission = permission;

    console.log('Connect successfully');
    console.log(item);
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
    console.log(`Dữ liệu cha nhận được là ${this.state.searchText}`);
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }

  render() {
    let ketQua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketQua.push(item);
      }
    })
    // console.log(ketQua);

    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                checkConnectProps={(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm} />
              <div className='row'>
                <TableData dataUserProps={ketQua} />
                <AddUser add={(name, tel, permission) => this.getNewUserData(name, tel, permission)} hienThiForm={this.state.hienThiForm} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
