import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
        }
    }


    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className='col'>
                    <form>
                        <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
                            <div className="card-header">Thêm mới user vào hệ thống</div>
                            <div className="card-body text-primary">
                                <div className="form-group mb-2">
                                    <input
                                        type="text"
                                        onChange={(event) => this.isChange(event)}
                                        name="name"
                                        className="form-control"
                                        placeholder="Tên user"
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <input
                                        type="text"
                                        onChange={(event) => this.isChange(event)}
                                        name="tel"
                                        className="form-control"
                                        placeholder="Điện thoại"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <select className="form-select" name="permission" onChange={(event) => this.isChange(event)} required>
                                        <option>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input
                                        type='reset'
                                        value="Thêm mới"
                                        className="btn btn-primary d-block"
                                        onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
    render() {
        return (
            <>
                {this.kiemTraTrangThai()}
            </>
        );
    }
}

export default AddUser;