import React from 'react';
import { Layout, Button, Input, Icon, Form, Row, Col, Card ,Checkbox} from 'antd';

const { Content } = Layout;

export class LoginPage extends React.Component {
    handleSubmit = e => {
        e.preventDefault();

        const { form, onSubmit } = this.props;

        form.validateFields((err, values) => {
            if (!err) {
                const { name, email, password, admin } = values;
                onSubmit( name, email, password, admin) ;
            }
        });
    };

    backToSignIn=()=>{
        this.props.toggleSignUp()
    }
    render() {
        const { getFieldDecorator } = this.props.form;

        const usernameFieldDecorator = getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
        });
        const emailFieldDecorator = getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
        });
        const passwordFieldDecorator = getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password!' }],
        });
        const adminFieldDecorator = getFieldDecorator('admin', {
        });

        return (
            <Layout>
                <Content style={{ height: '100vh' }}>
                    <Row type="flex" justify="space-around" align="middle" style={{ height: '100%' }}>
                        <Col span={12} offset={6}>
                            <Card style={{ maxWidth: '404px' }}>
                                <Row type="flex" justify="center" align="middle" style={{ marginBottom: '30px' }}>
                                    {/* <Logo/> */}
                                    <p style={{fontSize:20}}>Sign Up</p>
                                </Row>

                                <Form onSubmit={this.handleSubmit}>
                                <Form.Item>
                                        {usernameFieldDecorator(
                                            <Input
                                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                                                placeholder="name"
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        {emailFieldDecorator(
                                            <Input
                                                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                                                placeholder="email"
                                            />,
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        {passwordFieldDecorator(
                                            <Input
                                                prefix={<Icon type="eye" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                                                placeholder="password"
                                            />,
                                        )}
                                    </Form.Item>

                                    <Form.Item>
                                        {adminFieldDecorator(
                                            <div style={{display:'flex', flexDirection:'row' }}>   
                                            <Checkbox  style={{marginRight:10}} />  
                                            <p>Admin</p>
                                            </div>
                                        )}
                                    </Form.Item>

                                    <Form.Item>
                                        <Button block type="primary" htmlType="submit">
                                            Sign Up
                                        </Button>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button block type="secondary" onClick={()=>{this.backToSignIn()}}>
                                            Back to Sign In
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        )
    }
}

export default Form.create({ name: 'login' })(LoginPage);
