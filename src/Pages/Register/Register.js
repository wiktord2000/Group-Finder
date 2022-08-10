import React, { useState, useEffect } from 'react'
import './Register.css'
import { Col, Row, Form, Input, Button, Divider} from 'antd';
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Providers/AuthContext"
import { Alert } from 'react-bootstrap';


function Register(){

    const navigate = useNavigate();
    const [ errorMessage, setErrorMessage ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const { signUp, currentUser} = useAuthContext();


    useEffect(() => {
        // Delete side-content styling
        document.getElementById("side-content").classList.remove('black-transparency-effect', 'shadow');

        // Restore styling
        return(() => {
            document.getElementById("side-content").classList.add('black-transparency-effect', 'shadow');
        })
    }, [])

    const onFinish = async (values) => {

        // Clear previous errors
        setErrorMessage('');

        // If passwords aren't same
        if(values.password !== values.password2){
            setErrorMessage("Inserted passwords are not equal!");
            return;
        }
        
        try{
            // Disable the button when processing
            setLoading(true);
            let result = await signUp(values.email, values.password);   // I'm not sure that we get the user data after register
            // Store user data in local storage
            localStorage.setItem('user', JSON.stringify(result.user));
            // Navigate to main page
            navigate('/');

        } catch(error){
            // console.log(error.message);
            if(error.message === "Firebase: Error (auth/email-already-in-use)."){
                setErrorMessage("The given address is already taken!");
            }
            else{
                setErrorMessage("Unidentified error!");
            }
            console.log(error);
        }
        
        // Enable the button
        setLoading(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    
    // --------------------------------- Rules ---------------------------------
    const passwordRules = [
        {
            required: true,
            message: 'Please insert the password!'
        }
    ]

    const emailRules = [
        {
            type: 'email',
            message: 'Incorrect e-mail!',
        },
        {
            required: true,
            message: 'Please insert the e-mail!',
        }
    ];

    const userRules = [
        {
            required: true,
            message: 'Please insert the username!'
        },
    ]


    return(
        <>
            <Row style={{marginTop: -30}} justify='center'>
                
                {/* Form container */}
                <Col className="black-transparency-effect shadow register-container" span={12}>

                    {/* Header */}
                    <Col justify='center' span={22} offset={1}>
                        <Divider style={{fontSize: '1.875rem'}}>Register</Divider>
                    </Col>

                    {/* Error message */}
                    { errorMessage && 

                        <Col justify='center' span={14} offset={5}>
                            <Alert className="alert-message" variant="danger">
                                {errorMessage}
                            </Alert>
                        </Col>
                    }

                    {/* Form */}
                    <Form
                        name="register-form"
                        style={{marginTop: 20}}
                        labelCol= {{ offset: 5, span: 14 }}
                        wrapperCol={{ offset: 5, span: 14 }}
                        initialValues={{ remember: false }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        layout="vertical"
                    >
                        {/* Email */}
                        <Form.Item label="E-mail" name="email" rules={emailRules}>
                            <Input />
                        </Form.Item>

                        {/* UserName*/}
                        <Form.Item label="Username" name="userName" rules={userRules}>
                            <Input />
                        </Form.Item>
                        
                        {/* Password*/}
                        <Form.Item label="Password" name="password" rules={passwordRules}>
                            <Input.Password />
                        </Form.Item>

                        {/* Password2*/}
                        <Form.Item label="Repeat password" name="password2" rules={passwordRules}>
                            <Input.Password />
                        </Form.Item>

                        {/* Submit button */}
                        <Form.Item className='register-button'  style={{marginTop: 40}} wrapperCol= {{offset: 8, span: 8}}>
                            <Button className='w-100' type="primary" htmlType="submit" disabled={loading}>{loading? "Processing...": "Register"}</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default Register;