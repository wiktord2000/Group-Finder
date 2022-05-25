import React, { useEffect } from 'react'
import './Login.css'
import { Col, Row, Form, Input, Button, Divider} from 'antd';
import ApiService from '../../Services/ApiService';
import { useLoginContext } from '../../Providers/LoginProvider';
import { useNavigate } from "react-router-dom";
import useLocalStorage from '../../CustomHooks/useLocalStorage';

import { logInWithGoogle } from '../../firebase/users';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../firebase/init';


export default function Login(){

    const { loggedAccount, setLoggedAccount} = useLoginContext();
    const [ value, setValue ] = useLocalStorage("accountData", null);

    const [user, loading, error] = useAuthState(auth);


    useEffect(() =>{
        if(loading) return
        if(user){

            console.log(user);
            // navigate("/");

        } 
        if(error)
            console.error(error)
    }, [user, loading])


    const navigate = useNavigate();

    const onFinish = (values) => {

        ApiService.getAccounts()
        .then( result =>
            result.json()
        )
        .then( data => {
            for(let account of data){

                if((account.email === values.email) && (account.password === values.password))
                {
                    // // set account's id
                    // setLoggedAccount(account.id);
                    // // save account data in localStorage
                    // setValue(account);
                    // // redirect to SearchForStudents
                    // navigate("/");
                    return;
                }
            }
            throw("The accound doesn't exist");
        })
        .catch(
            err => {
                // print error message at login panel
                document.getElementById('error-message').innerHTML = 'Wprowadzono niepoprawne dane!'
                console.error(err)
            }
        )
        
    };
    

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


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
                        <div id='error-message'></div>
                        {/* Submit button */}
                        <Form.Item className='login-button' style={{marginTop: 40}} wrapperCol={{span: 24 }}>
                            <Button className='w-25' type="primary" htmlType="submit">Zaloguj</Button>
                            <Button className='w-25 mt-2'  htmlType="submit" onClick={logInWithGoogle}>Użyj konta Google</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    )


};
