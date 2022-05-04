import React from 'react'
import './Login.css'
import { Col, Row, Form, Input, Button, Divider} from 'antd';


function Login(){

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const passwordRules = [
        {
            required: true,
            message: 'Proszę wprowadź hasło!'
        }
    ]

    const emailRules = [
        {
            type: 'email',
            message: 'Wprowadzono niepoprawny e-mail!',
        },
        {
            required: true,
            message: 'Proszę wprowadź swój e-mail!',
        }
    ];

    return(
        <>
            <Row style={{marginTop: 20}} justify='center'>
                
                {/* Form container - lightgrey area */}
                <Col id="form-container" className="shadow" span={12}>

                    {/* Header */}
                    <Col justify='center' span={22} offset={1}>
                        <Divider style={{fontSize: '28px'}}>Logowanie</Divider>
                    </Col>

                    {/* Form */}
                    <Form
                        name="login-form"
                        style={{marginTop: 40}}
                        labelCol={{ span: 4, offset: 3}}
                        wrapperCol={{ span: 10 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        {/* Email */}
                        <Form.Item label="E-mail" name="email" rules={emailRules}>
                            <Input />
                        </Form.Item>
                        
                        {/* Password*/}
                        <Form.Item label="Hasło" name="password" rules={passwordRules}>
                            <Input.Password />
                        </Form.Item>

                        {/* Submit button */}
                        <Form.Item style={{marginTop: 40}} wrapperCol={{span: 24 }}>
                            <Button className='w-25' type="primary" htmlType="submit">Zaloguj</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default Login;
