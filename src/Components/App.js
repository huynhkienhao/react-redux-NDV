import { Component } from 'react';
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';

class App extends Component {
  thongBao = () => {
    console.log('Kết nối thành công');
  }
  render() {
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search ketNoi={() => this.thongBao()} />
              <TableData />
              <AddUser />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
