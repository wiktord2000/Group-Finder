import './AddSingleAd.css';
import { Input, Form, Button, Space, Divider} from 'antd';
import React, { useState} from 'react';
import { PlusOutlined , MinusCircleOutlined } from '@ant-design/icons';



function AddAd(){

    const [courses, setCourses] = useState([]);

    const emailRules = [
        {
            type: 'email',
            message: 'The input is not valid E-mail!',
        },
        {
            required: true,
            message: 'Please input your E-mail!',
        }
    ];

    const nameRules = [
        {
            required: true,
            message: 'Proszę wprowadź swoje imię',
        }
    ];

    const tagRules = [
        { 
            required: true, 
            message: 'Nie uzupełniono tagu' 
        }
    ];


    return(
        <>
            <div className='form-container'>

                <Form name="createSingleAdd" labelCol={{span: 7}} wrapperCol={{span: 10}} autoComplete='off' initialValues={{remember: true}}>

                    {/* Name  field*/}
                    <Form.Item label ="Imię" rules = {nameRules}>
                        <Input maxLength={50}></Input>
                    </Form.Item>

                    {/* E-mail field */}
                    <Form.Item label="E-mail" rules={emailRules}>
                        <Input maxLength={50}></Input>
                    </Form.Item>
                          
                    {/* Description field */}
                    <Form.Item label="Opis">
                        <Input.TextArea  maxLength={200}/>
                    </Form.Item>
                    
                    <Divider>Kursy</Divider>

                    <Form.List name="tags">
                            {
                                (fields, {add, remove}) => (
                                    <>
                                        {fields.map(
                                            ({key, name, ...restField}) => {
                                                return (

                                                    <div key={key} className='d-flex align-items-center justify-content-center mb-2' >
                                                        <Form.Item style={{marginRight: 5}} className='mb-0 justify-content-center ' {...restField} name={[name, 'tag']} rules={tagRules}>
                                                            <Input style={{width: '100%'}} placeholder='Wprowadź tag' maxLength={16}/>
                                                        </Form.Item>
                                                        
                                                        <MinusCircleOutlined  onClick={() => remove(name)} />
                                                    </div>  
                                                );
                                            }
                                        )
                                        }
                                        {/* Add tag button */}
                                        <Form.Item className='d-flex justify-content-center'>
                                            <Button className='d-flex align-items-center justify-content-center' type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                Dodaj tag
                                            </Button>
                                        </Form.Item>
                                    </>
                                )
                            }

                            
                    </Form.List>

                    {/* Submit button */}
                    <Form.Item wrapperCol={{offset: 8}}>
                        <Button className='w-50' type="primary" htmlType="submit">Opublikuj</Button>
                    </Form.Item>
                </Form>
                
            </div>
            
        </>
    );
}

export default AddAd;

