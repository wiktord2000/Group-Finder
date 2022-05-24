import './AddSingleAd.css';
import { Input, Form, Button, Space, Divider} from 'antd';
import React, { useState} from 'react';
import { PlusOutlined , CloseOutlined } from '@ant-design/icons';
import { SingleAd } from '../../Models/SingleAd';

function AddAd(){

    const [courses, setCourses] = useState([]);

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

    const nameRules = [
        {
            required: true,
            message: 'Proszę wprowadź swoje imię',
        }
    ];

    const tagRules = [
        { 
            required: true, 
            message: 'Nie podano nazwy tagu' 
        }
    ];

    const courseRules = [
        { 
            required: true, 
            message: 'Nie podano nazwy kursu' 
        }
    ];

    const onFinish = (values) => { console.log(values); }


    return(
        <>
            <div className='form-container shadow'>
                <Divider  style={{fontSize: '20px', marginBottom: 40}}>Uzupełnij ogłoszenie</Divider>
                <Form name="single-ad"  wrapperCol={{span: 10, offset: 7}} autoComplete='off' initialValues={{remember: true}} onFinish = {onFinish}>

                    {/* Name  field*/}
                    <Divider>Wyświetlana nazwa <span style={{color: 'red'}}>*</span></Divider>
                    <Form.Item name="name" rules={nameRules}>
                        <Input maxLength={50} value="Anonymous"></Input>
                    </Form.Item>

                    {/* E-mail field
                    <Form.Item name="email" label="E-mail" rules={emailRules}>
                        <Input maxLength={50}></Input>
                    </Form.Item> */}
                          
                    {/* Description field */}
                    <Divider>Opis <span style={{color: 'red'}}>*</span></Divider>
                    <Form.Item name="description" >
                        <Input.TextArea  maxLength={200}/>
                    </Form.Item>
                    
                    {/* Adding tags section */}
                    <Divider>Tagi</Divider>

                    <Form.List name="tags">
                            {
                                (fields, {add, remove}) => (
                                    <>
                                        {/* Generate added inputs */}
                                        {fields.map(
                                            ({key, name, ...restField}) => {
                                                return (
                                                    <div key={key} >
                                                        {/* Tag input */}
                                                        <Form.Item  className='tag-input' {...restField}  rules={tagRules}>
                                                            <Input  style={{maxWidth: 200}} placeholder='Wprowadź nazwę tagu' maxLength={20}/>
                                                            {/* Button to delete tag */}
                                                            <CloseOutlined className='delete-icon' onClick={() => remove(name)} />
                                                        </Form.Item>
                                                    </div>  
                                                );
                                            }
                                        )
                                        }
                                        {/* Add tag button */}
                                        <Form.Item>
                                            <Button block 
                                                    type="dashed" 
                                                    onClick={() => add()} 
                                                    icon={<PlusOutlined />}>
                                                Dodaj tag
                                            </Button>
                                        </Form.Item>
                                    </>
                                )
                            }
                    </Form.List>

                    {/* Adding courses section */}
                    <Divider>Kursy</Divider>

                    <Form.List name="courses">
                            {
                                (fields, {add, remove}) => (
                                    <>
                                        {/* Generate added inputs */}
                                        {fields.map(
                                            ({key, name, ...restField}) => {
                                                return (
                                                    <div key={key} >
                                                        
                                                        {/* Tag input */}
                                                        <Form.Item className='tag-input' {...restField} rules={courseRules}>
                                                            <Input style={{maxWidth: 200}} placeholder='Wprowadź nazwę kursu' maxLength={50}/>
                                                            {/* Button to delete tag */}
                                                            <CloseOutlined  className='delete-icon' onClick={() => remove(name)} />
                                                        </Form.Item>
                                                    </div>  
                                                );
                                            }
                                        )
                                        }
                                        {/* Add tag button */}
                                        <Form.Item>
                                            <Button block 
                                                    type="dashed" 
                                                    onClick={() => add()}  
                                                    icon={<PlusOutlined />}>
                                                Dodaj kurs
                                            </Button>
                                        </Form.Item>
                                    </>
                                )
                            }
                    </Form.List>

                    {/* Submit button */}
                    <Form.Item className='button-row'>
                        <Button style={{minWidth: 100, maxWidth: '50%', width: '100%'}} type="primary" htmlType="submit">Opublikuj</Button>
                    </Form.Item>
                </Form>
                
            </div>
            
        </>
    );
}

export default AddAd;

