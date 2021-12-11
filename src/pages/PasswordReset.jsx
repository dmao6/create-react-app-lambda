import React, { useState, useContext, useRef, useEffect } from "react";
import { withRouter } from 'react-router';
import AuthService, { AuthenService } from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';
import Message from '../components/Message';

import { Form, Label, Input } from 'reactstrap'

function PasswordReset(props) {

    const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const [message, setMessage] = useState(null);
    const [userUpdate, setUserUpdate] = useState({ userName: user.userName, password: "", newPassword: "" });
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const onChange = e => {
        e.preventDefault();
        setUserUpdate({ ...userUpdate, [e.target.name]: e.target.value });
        console.log(userUpdate)
    }
    const onChangeConfirm = e => {
        e.preventDefault();
        setConfirmNewPassword(e.target.value);
    }

    const resetData = () => {
        setUserUpdate({ userName: user.userName, password: "", newPassword: "" });
        setConfirmNewPassword("");
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (confirmNewPassword.normalize() === userUpdate.newPassword.normalize()) {
            AuthService.changePassword(userUpdate)
                .then(data => {
                    const { message } = data;
                    setMessage(message)
                    resetData();
                    if (!message.msgError) {

                        timerID = setTimeout(() => {
                            AuthService.logout().then(data => {
                                if (data.success) {
                                    console.log("data logout: " + data.success)
                                    setUser(data.user);
                                    setIsAuthenticated(data.isAuthenticated)
                                    props.history.push('/login')
                                    // window.location.reload(false);

                                }
                            })
                        }, 2000)

                    }
                })
        } else {
            setMessage({ msgBody: "The new passwords you entered don't match, please try again!", msgError: true });
        }

    }


    return (

        <div className="passwordReset">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-10">
                    <div class="forgot">
                        <h2>Need to reset your password?</h2>
                        <hr />
                        <div class="card mt-4">
                            <Form className="login-form" onSubmit={handleSubmit}>
                                <Label htmlFor="password">Current Password</Label>
                                <div className="form-group pass_show">
                                    <Input id="password" name="password" onChange={onChange} type="password" class="form-control" placeholder="Current Password" />
                                </div>
                                <Label htmlFor="newPassword">New Password</Label>
                                <div className="form-group pass_show">
                                    <Input id="newPassword" name="newPassword" onChange={onChange} type="password" class="form-control" placeholder="New Password" />
                                </div>
                                <Label htmlFor="confirmNewPassword">Confirm Password</Label>
                                <div className="form-group pass_show">
                                    <Input id="confirmNewPassword" name="confirmNewPassword" onChange={onChangeConfirm} type="password" class="form-control" placeholder="Confirm Password" />
                                </div>
                                <button className="btn btn-primary" type="submit">Save New Password</button> {/* <Link to="logIn"><button class="btn btn-danger" type="submit">Back to Login</button></Link></div>  */}

                                {message ? <Message message={message} /> : null}

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(PasswordReset);