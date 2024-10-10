import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: ''
        }
    }

    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
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
                <div className="form-group mt-2 mb-3">
                    <div
                        className="searchForm__group btn-group d-flex"
                        style={{ width: "100%" }}
                    >
                        <input
                            type="text"
                            className="form-control"
                            onChange={(event) => this.isChange(event)}
                            placeholder="Nhập từ khoá"
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