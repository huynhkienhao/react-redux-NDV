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

    // Kiểm tra localStorage và khởi tạo state trước khi render
    if (localStorage.getItem('userData') === null) {
      this.state = {
        data: DataUser, // Dữ liệu mặc định nếu chưa có trong localStorage
        hienThiForm: true,
        searchText: '',
        editUserStatus: false,
        userEditObject: {}
      };
      // Lưu dữ liệu mặc định vào localStorage
      localStorage.setItem('userData', JSON.stringify(DataUser));
    } else {
      this.state = {
        data: JSON.parse(localStorage.getItem('userData')),
        hienThiForm: true,
        searchText: '',
        editUserStatus: false,
        userEditObject: {}
      };
    }
  }

  removeUserClick = (id) => {
    let tempData = this.state.data.filter((user) => user.id !== id)
    this.setState({
      data: tempData
    });
    // Đây vào dữ liệu localStorage
    localStorage.setItem('userData', JSON.stringify(tempData));
  }

  getUserEditInfoFromApp = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    });
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  editUserGrandparent = (user) => {
    this.setState({
      userEditObject: user
    });
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
    localStorage.setItem('userData', JSON.stringify(items));
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
                getUserEditInfoFromApp={(info) => this.getUserEditInfoFromApp(info)}
                userEditObjectParent={this.state.userEditObject}
                checkConnectProps={(dl) => this.getTextSearch(dl)}
                ketNoi={() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatusGrandparent={() => this.changeEditUserStatus()}
              />
              <div className='row'>
                <TableData
                  removeUserClick={(id) => this.removeUserClick(id)}
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
