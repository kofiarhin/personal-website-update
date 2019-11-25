import React from "react";
import Header from "../Header/header";
import { firebase, firebaseLooper } from "../../../../../firebase";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import _ from "lodash";

class Login extends React.Component {

    state = {

        users: []
    }

    async   componentDidMount() {

        //get list of users
        const users = await firebase.database().ref("shoppingCart/users").once("value").then(snapshot => {

            return firebaseLooper(snapshot)
        });


        //check if users empty
        if (!_.isEmpty(users)) {

            this.setState({

                users
            })
        }



    }


    handleSubmit = e => {
        e.preventDefault();

        const users = this.state.users;
        this.props.form.validateFields((err, values) => {
            if (!err) {


                const user = users.find(user => {

                    return user.email = values.email;
                });



                if (!_.isEmpty(user)) {


                    const { email, name, phone, role } = user;

                    const userData = {
                        email,
                        name,
                        phone,
                        role
                    }


                    const dataToStore = JSON.stringify(userData);

                    sessionStorage.setItem('userData', dataToStore);

                    this.props.history.push("/projects/shoppingCart/user/dashboard");
                }



            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (

            <div>

                <Header />

                <div className="form-container">

                    <h1 className="main-title text-center">Login</h1>

                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your email!' }],
                            })(
                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Email"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>

                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                Forgot password
          </a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
          </Button>
                            Or <a href="/projects/shopping-cart/register">register now!</a>
                        </Form.Item>

                    </Form>

                </div>

            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm;
