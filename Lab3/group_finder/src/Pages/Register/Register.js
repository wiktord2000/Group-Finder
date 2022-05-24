import React from 'react'
import './Register.css'
import { Col, Row, Form, Input, Button, Divider} from 'antd';
import ApiService from '../../Services/ApiService';
import { Account } from '../../Models/Account';
import { useNavigate } from "react-router-dom";


function Register(){

    let navigate = useNavigate();

    const onFinish = (values) => {

        // If passwords aren't same
        if(values.password !== values.password2){
            document.getElementById('error-message').innerHTML = "Wprowadzone hasła się różnią!";
        }
        else{
            // Add account
            ApiService.postAccount(new Account( null , values.email, values.password, values.userName, null, null));
            // Navigate to login
            navigate('/login');
        }
        
    };


    // Rules
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

    const userRules = [
        {
            required: true,
            message: 'Proszę wprowadź nazwę użytkownika!'
        },
    ]


    return(
        <>
            <Row style={{marginTop: 20}} justify='center'>
                
                {/* Form container - lightgrey area */}
                <Col id="form-container" className="shadow" span={12}>

                    {/* Header */}
                    <Col justify='center' span={22} offset={1}>
                        <Divider style={{fontSize: '28px'}}>Rejestracja</Divider>
                    </Col>

                    {/* Form */}
                    <Form
                        name="login-form"
                        style={{marginTop: 40}}
                        labelCol={{ span: 6, offset: 1}}
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

                        {/* UserName*/}
                        <Form.Item label="Nazwa użytkownika" name="userName" rules={userRules}>
                            <Input />
                        </Form.Item>
                        
                        {/* Password*/}
                        <Form.Item label="Hasło" name="password" rules={passwordRules}>
                            <Input.Password />
                        </Form.Item>

                        {/* Password2*/}
                        <Form.Item label="Powtórz hasło" name="password2" rules={passwordRules}>
                            <Input.Password />
                        </Form.Item>
                        
                        {/* Error message */}
                        <div id='error-message'></div>

                        {/* Submit button */}
                        <Form.Item className='register-button' style={{marginTop: 40}} wrapperCol={{span: 24 }}>
                            <Button className='w-25' type="primary" htmlType="submit">Zarejestruj</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default Register;