import React, { Component } from 'react';

class Search extends Component {
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
                        <div className="btn btn-info">
                            <i className="fa-solid fa-magnifying-glass text-white" />
                        </div>
                    </div>
                </div>
                <div className="btn d-block btn-outline-secondary mt-2" onClick={() => this.props.ketNoi()}>Đóng lại</div>;
                <div className="btn d-block btn-outline-info">Thêm mới</div>;
                <hr />
            </div>
        );
    }
}

export default Search;