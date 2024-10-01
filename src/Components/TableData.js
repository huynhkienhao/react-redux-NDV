import React, { Component } from 'react';

class TableData extends Component {
    render() {
        return (
            <div className="col-md-9">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Điện thoại</th>
                            <th className="text-center">Quyền</th>
                            <th className="text-center">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">1</td>
                            <td>Trần Đức Lương</td>
                            <td className="text-center">0842822927</td>
                            <td className="text-center">Moderator</td>
                            <td className="text-center">
                                <div className="btn-group">
                                    <div className="btn btn-warning btn--edit">
                                        <i className="btn--edit-icon fa-solid fa-pen-to-square" />
                                        <span className="btn--edit-text">Sửa</span>
                                    </div>
                                    <div className="btn btn-danger btn--delete">
                                        <i className="btn--delete-icon fa-solid fa-trash" />
                                        <span className="btn--delete-text">Xoá</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">2</td>
                            <td>Trần Đức Lương</td>
                            <td className="text-center">0842822927</td>
                            <td className="text-center">Moderator</td>
                            <td className="text-center">
                                <div className="btn-group">
                                    <div className="btn btn-warning btn--edit">
                                        <i className="btn--edit-icon fa-solid fa-pen-to-square" />
                                        <span className="btn--edit-text">Sửa</span>
                                    </div>
                                    <div className="btn btn-danger btn--delete">
                                        <i className="btn--delete-icon fa-solid fa-trash" />
                                        <span className="btn--delete-text">Xoá</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">3</td>
                            <td>Phan Văn Tài Em</td>
                            <td className="text-center">0842822927</td>
                            <td className="text-center">Moderator</td>
                            <td className="text-center">
                                <div className="btn-group">
                                    <div className="btn btn-warning btn--edit">
                                        <i className="btn--edit-icon fa-solid fa-pen-to-square" />
                                        <span className="btn--edit-text">Sửa</span>
                                    </div>
                                    <div className="btn btn-danger btn--delete">
                                        <i className="btn--delete-icon fa-solid fa-trash" />
                                        <span className="btn--delete-text">Xoá</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">4</td>
                            <td>Bùi Tiến Dũng</td>
                            <td className="text-center">0842822927</td>
                            <td className="text-center">Moderator</td>
                            <td className="text-center">
                                <div className="btn-group">
                                    <div className="btn btn-warning btn--edit">
                                        <i className="btn--edit-icon fa-solid fa-pen-to-square" />
                                        <span className="btn--edit-text">Sửa</span>
                                    </div>
                                    <div className="btn btn-danger btn--delete">
                                        <i className="btn--delete-icon fa-solid fa-trash" />
                                        <span className="btn--delete-text">Xoá</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-center">5</td>
                            <td>Trần Đức Lương</td>
                            <td className="text-center">0842822927</td>
                            <td className="text-center">Moderator</td>
                            <td className="text-center">
                                <div className="btn-group">
                                    <div className="btn btn-warning btn--edit">
                                        <i className="btn--edit-icon fa-solid fa-pen-to-square" />
                                        <span className="btn--edit-text">Sửa</span>
                                    </div>
                                    <div className="btn btn-danger btn--delete">
                                        <i className="btn--delete-icon fa-solid fa-trash" />
                                        <span className="btn--delete-text">Xoá</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;