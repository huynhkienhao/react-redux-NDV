import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    removeUserClick = (id) => {
        this.props.removeUserClick(id);
    }
    mappingDataUser = () => this.props.dataUserProps.map((value, key) => (
        <TableDataRow
            changeEditUserStatusParent={() => this.props.changeEditUserStatusGrandparent()}
            editUserChild={(user) => this.props.editUserParent(value)}
            userName={value.name}
            key={key}
            stt={key}
            tel={value.tel}
            permission={value.permission}
            id={value.id}
            removeUserClick={(id) => this.removeUserClick(id)}
        />
    ))


    render() {
        return (
            <div className="col">
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
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;