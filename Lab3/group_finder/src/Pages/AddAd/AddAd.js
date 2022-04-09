import './AddAd.css';
import { Input, Form, Button, Space, Divider} from 'antd';
import React, { useState} from 'react';
import { PlusOutlined } from '@ant-design/icons';



function AddAd(){

    const [courses, setCourses] = useState([]);


    return(
        <>
            <div className='form-container'>

                <Form
                name="basic"
                labelCol={{
                  span: 7,
                }}
                wrapperCol={{
                  span: 10,
                }}
                autoComplete="off"
                initialValues={{
                  remember: true,
                }}>
                    <Form.Item
                        label="Imię"
                        rules={[
                            {
                              required: true,
                              message: 'Proszę wprowadź swoje imię',
                            },
                          ]}

                    >
                        <Input maxLength={50}></Input>
                    </Form.Item>
                    <Form.Item
                        label="E-mail:"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                          ]}
                    >
                        <Input maxLength={50}></Input>
                    </Form.Item>
                          
                    {/* Big text area */}
                    <Form.Item label="Opis">
                        <Input.TextArea  maxLength={200}/>
                    </Form.Item>
                    
                    <Divider>Kursy</Divider>
                    {/* Submit button */}
                    <Form.Item
                        wrapperCol={{
                        offset: 10,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                        Opublikuj
                        </Button>
                    </Form.Item>
                </Form>
                
            </div>
            
        </>
    );
}

export default AddAd;

