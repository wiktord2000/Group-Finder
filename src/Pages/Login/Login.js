import React, { useEffect, useState, useRef } from 'react'
import './Login.css'
import { Col, Row, Form, Input, Button, Divider} from 'antd';
import { useNavigate } from "react-router-dom";
// import { logInWithGoogle } from '../../firebase/users';
import { useAuthContext } from '../../Providers/AuthContext';
import { Alert } from 'react-bootstrap';



export default function Login(){

    const [ errorMessage, setErrorMessage ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ googleLoading, setGoogleLoading] = useState(false);
    const { logIn, signInWithGoogle } = useAuthContext();
    const navigate = useNavigate();

    const onFinish = async (values) => {

        // Clear previous errors
        setErrorMessage('');

        try{
            // Disable the button when processing
            setLoading(true);
            await logIn(values.email, values.password);
            // Navigate to main page
            navigate('/');

        } catch(e){
            console.log(e);
            setErrorMessage("Wprowadzono niepoprawne dane!");
        }

        // Enable the button
        setLoading(false);
    };
 

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onSignInWithGoogle = () => {

        // Disable the button when processing
        setGoogleLoading(true);

        signInWithGoogle()
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // Navigate to main page
                navigate('/');

            }).catch((error) => {
                console.log(error);

            }).finally(() => {
                // Disable the button when processing
                setGoogleLoading(false);
            });
    }


    // Rules for form
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

                    {/* Error message */}
                    { errorMessage && <Alert style={{maxWidth: 400 , margin: 'auto' }} variant="danger">{errorMessage}</Alert>}

                    {/* Form */}
                    <Form
                        name="login-form"
                        style={{marginTop: 40}}
                        labelCol={{ span: 4, offset: 3}}
                        wrapperCol={{ span: 10 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="on"
                    >

                        {/* Email */}
                        <Form.Item label="E-mail" name="email" rules={emailRules}>
                            <Input  ref="emailInput"/>
                        </Form.Item>
                        
                        {/* Password*/}
                        <Form.Item label="Hasło" name="password" rules={passwordRules}>
                            <Input.Password ref="passwordInput"/>
                        </Form.Item>

                        {/* Submit button */}
                        <Form.Item className='login-button' style={{marginTop: 40}} wrapperCol={{span: 24 }}>
                            <Button className='w-25' type="primary" htmlType="submit" disabled={loading | googleLoading}>{loading? "Logowanie..." : "Zaloguj"}</Button>
                            <Button className='w-25 mt-2' onClick={onSignInWithGoogle} disabled={loading | googleLoading}>{googleLoading? "Logowanie..." : "Użyj konta google"}</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )


};
