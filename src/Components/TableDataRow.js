import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if (this.props.permission === 1) {
            return "Admin"
        } else if (this.props.permission === 2) {
            return "Moderator"
        } else {
            return "Normal user"
        }
    }
    render() {
        return (
            <tr>
                <td className="text-center">{this.props.stt + 1}</td>
                <td>{this.props.userName}</td>
                <td className="text-center">{this.props.tel}</td>
                <td className="text-center">{this.permissionShow()}</td>
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
        );
    }
}

export default TableDataRow;