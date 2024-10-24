import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj: {}
        }
    }

    getUserEditInfo = (data) => {
        this.setState({
            userObj: data
        });
        this.props.getUserEditInfoFromApp(data);
    }

    isShowEditForm = () => {
        if (this.props.editUserStatus === true) {
            return <EditUser
                getUserEditInfo={(data) => this.getUserEditInfo(data)}
                userEditObjectChild={this.props.userEditObjectParent}
                changeEditUserStatusParent={() => this.props.changeEditUserStatusGrandparent()}
            />
        }
    }

    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue)
    }

    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return <div className="btn d-block btn-outline-secondary mt-2" onClick={() => this.props.ketNoi()}>Đóng lại</div>
        } else {
            return <div className="btn d-block btn-outline-info mt-2" onClick={() => this.props.ketNoi()}>Thêm mới</div>
        }
    }

    render() {
        return (
            <div className="col-md-12">
                {this.isShowEditForm()}
                <div className="form-group mt-2 mb-3">
                    <div
                        className="searchForm__group btn-group d-flex"
                        style={{ width: "100%" }}
                    >
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) => this.isChange(event)}
                            placeholder="Nhập tên cần tìm"
                            style={{ border: "1px solid #000" }}
                        />
                        <button className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>
                            <i className="fa-solid fa-magnifying-glass text-white" />
                        </button>
                    </div>
                </div>
                {this.hienThiNut()}
                <hr />
            </div>
        );
    }
}

export default Search;