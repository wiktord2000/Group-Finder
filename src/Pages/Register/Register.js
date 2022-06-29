import React, { useState } from 'react'
import './Register.css'
import { Col, Row, Form, Input, Button, Divider} from 'antd';
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Providers/AuthContext"
import { Alert } from 'react-bootstrap';


function Register(){

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { signUp, currentUser} = useAuthContext();



    const onFinish = async (values) => {

        // Clear previous errors
        setErrorMessage('');

        // If passwords aren't same
        if(values.password !== values.password2){
            setErrorMessage("Wprowadzone hasła się różnią!");
            return;
        }
        
        try{
            // disable the button when processing
            setLoading(true);
            await signUp(values.email, values.password);
            // Navigate to main page
            navigate('/');

        } catch(e){
            console.log(e);
            setErrorMessage("Nie można utowrzyć tego konta!");
        }
        
        // enable the button
        setLoading(false);
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

                    {/* Error message */}
                    { errorMessage && <Alert style={{maxWidth: 400 , margin: 'auto' }} variant="danger">{errorMessage}</Alert>}

                    {/* Form */}
                    <Form
                        name="login-form"
                        style={{marginTop: 40}}
                        labelCol={{ span: 6, offset: 1}}
                        wrapperCol={{ span: 10 }}
                        initialValues={{ remember: false }}
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

                        {/* Submit button */}
                        <Form.Item className='register-button'  style={{marginTop: 40}} wrapperCol={{span: 24 }}>
                            <Button className='w-25' type="primary" htmlType="submit" disabled={loading}>{loading? "Rejestracja...": "Zarejestruj"}</Button>
                        </Form.Item>
                    </Form>
                    {currentUser && currentUser.email}
                </Col>
            </Row>
        </>
    )
}

export default Register;