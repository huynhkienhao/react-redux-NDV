import React, { Component } from 'react';

class Search extends Component {

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
                <div className="form-group mt-2">
                    <div
                        className="searchForm__group btn-group d-flex"
                        style={{ width: "40%" }}
                    >
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nhập từ khoá"
                        />
                        <button className="btn btn-info" onClick={this.props.checkConnectProps}>
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