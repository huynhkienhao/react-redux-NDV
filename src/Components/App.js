import { Component } from 'react';
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import DataUser from './Data.json';
const { v4: uuidv4 } = require('uuid');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hienThiForm: true,
      data: DataUser,
      searchText: '',
      editUserStatus: true
    }
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  editUserGrandparent = (user) => {
    console.log('Connect successfully');
    console.log(user);
  }

  getNewUserData = (name, tel, permission) => {
    let item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission = permission;

    let items = this.state.data;
    items.push(item);

    this.setState({
      data: items
    });

    console.log('Connect successfully');
    console.log(this.state.data);
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

    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                checkConnectProps={(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatusGrandparent={() => this.changeEditUserStatus()}
              />
              <div className='row'>
                <TableData
                  editUserParent={(user) => this.editUserGrandparent(user)}
                  dataUserProps={ketQua}
                  changeEditUserStatusGrandparent={() => this.changeEditUserStatus()}
                />
                <AddUser
                  add={(name, tel, permission) => this.getNewUserData(name, tel, permission)}
                  hienThiForm={this.state.hienThiForm}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
