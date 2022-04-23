import './AddSingleAd.css';
import { Input, Form, Button, Space, Divider} from 'antd';
import React, { useState} from 'react';
import { PlusOutlined , MinusCircleOutlined } from '@ant-design/icons';



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


    return(
        <>
            <div className='form-container shadow'>
                <Divider  style={{fontSize: '20px', marginBottom: 40}}>Uzupełnij ogłoszenie</Divider>
                <Form name="single-ad" labelCol={{span: 7}} wrapperCol={{span: 10}} autoComplete='off' initialValues={{remember: true}}>

                    {/* Name  field*/}
                    <Form.Item name="name" label ="Imię" rules={nameRules}>
                        <Input maxLength={50}></Input>
                    </Form.Item>

                    {/* E-mail field */}
                    <Form.Item name="email" label="E-mail" rules={emailRules}>
                        <Input maxLength={50}></Input>
                    </Form.Item>
                          
                    {/* Description field */}
                    <Form.Item name="description" label="Opis">
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
                                                    <div key={key} className='d-flex justify-content-center mb-2' >
                                                        
                                                        {/* Tag input */}
                                                        <Form.Item style={{marginRight: 5}} className='mb-0' {...restField} name={[name, 'tag']} rules={tagRules}>
                                                            <Input placeholder='Wprowadź nazwę tagu' maxLength={20}/>
                                                        </Form.Item>
                                                        
                                                        {/* Button to delete tag */}
                                                        <MinusCircleOutlined  className='delete-icon' onClick={() => remove(name)} />
                                                    </div>  
                                                );
                                            }
                                        )
                                        }
                                        {/* Add tag button */}
                                        <Form.Item className='d-flex justify-content-center'>
                                            <Button block 
                                                    className='d-flex align-items-center justify-content-center' 
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
                                                    <div key={key} className='d-flex justify-content-center mb-2' >
                                                        
                                                        {/* Tag input */}
                                                        <Form.Item style={{marginRight: 5}} className='mb-0' {...restField} name={[name, 'course']} rules={courseRules}>
                                                            <Input placeholder='Wprowadź nazwę kursu' maxLength={50}/>
                                                        </Form.Item>
                                                        
                                                        {/* Button to delete tag */}
                                                        <MinusCircleOutlined  className='delete-icon' onClick={() => remove(name)} />
                                                    </div>  
                                                );
                                            }
                                        )
                                        }
                                        {/* Add tag button */}
                                        <Form.Item className='d-flex justify-content-center'>
                                            <Button block 
                                                    className='d-flex align-items-center justify-content-center' 
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
                    <Form.Item className='justify-content-center mt-5'>
                        <Button className='w-50'  type="primary" htmlType="submit">Opublikuj</Button>
                    </Form.Item>
                </Form>
                
            </div>
            
        </>
    );
}

export default AddAd;

