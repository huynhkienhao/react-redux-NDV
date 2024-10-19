import React, { Component } from 'react';

class EditUser extends Component {
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
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <input
                                        type="text"
                                        name="tel"
                                        className="form-control"
                                        placeholder="Điện thoại"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <select className="form-select" name="permission" required>
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