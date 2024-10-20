import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObjectChild.id,
            name: this.props.userEditObjectChild.name,
            tel: this.props.userEditObjectChild.tel,
            permission: this.props.userEditObjectChild.permission
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className='row'>
                <div className="col-md-12">
                    <form>
                        <div className="card border-primary mb-3">
                            <div className="card-header fw-bold text-center">EDIT USER</div>
                            <div className="card-body text-primary">
                                <div className="form-group mb-2">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Tên user"
                                        defaultValue={this.props.userEditObjectChild.name}
                                        onChange={(event) => this.isChange(event)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <input
                                        type="text"
                                        name="tel"
                                        className="form-control"
                                        placeholder="Điện thoại"
                                        defaultValue={this.props.userEditObjectChild.tel}
                                        onChange={(event) => this.isChange(event)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <select
                                        className="form-select"
                                        name="permission"
                                        defaultValue={this.props.userEditObjectChild.permission}
                                        onChange={(event) => this.isChange(event)}
                                        required>
                                        <option>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input
                                        type='reset'
                                        value="Submit"
                                        className="btn btn-success w-100"
                                        onClick={() => this.props.changeEditUserStatusParent()}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}

export default EditUser;