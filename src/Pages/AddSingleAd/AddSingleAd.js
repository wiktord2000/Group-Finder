import './AddSingleAd.css';
import { Input, Form, Button, Divider, Row, Col} from 'antd';
import React, { useEffect } from 'react';
import { PlusOutlined , CloseOutlined } from '@ant-design/icons';
import { SingleAd } from '../../Models/SingleAd';
import useLocalStorage from '../../CustomHooks/useLocalStorage';
import ApiService from '../../Services/ApiService';
import { useNavigate } from 'react-router-dom';

function AddAd(){

    const [value, setValue] = useLocalStorage("accountData", "");
    const navigate = useNavigate();

    useEffect(() => {
        // Delete side-content styling
        document.getElementById("side-content").classList.remove('black-transparency-effect', 'shadow');

        // Restore styling
        return(() => {
            document.getElementById("side-content").classList.add('black-transparency-effect', 'shadow');
        })
    }, [])

    const nameRules = [
        {
            required: true,
            message: 'Proszę wprowadź wyświetlaną nazwę',
        }
    ];

    const descriptionRules = [
        {
            required: true,
            message: 'Proszę wprowadź opis',
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


    // On form finish
    const onFinish = (values) => { 

        // If undefine - set empty array
        if(!values.tags) values.tags = [];
        if(!values.courses) values.courses = [];
       
        const singleAd = new SingleAd(value.id, values.name, value.email, values.description, values.tags, values.courses, value.imgURL);
        ApiService.postSingleAd(singleAd)
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            navigate("/");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }


    return(
        <>
            <div className='form-container shadow black-transparency-effect'>

                <Row justify="center">
                    
                    {/* Title */}
                    <Col span={22}><Divider className='title-divider'>Complete the form</Divider>

                        <Row justify='center'>
                            <Col span={16}>

                                {/* Form */}
                                <Form
                                    name="single-ad"  
                                    wrapperCol={{span: 18}}
                                    onFinish = {onFinish}>


                                    {/* Displaying name - label*/}
                                    <Divider dashed>
                                        Displaying name <span className='required-color'>*</span>
                                    </Divider>
                                    {/* Displaying name - input*/}
                                    <Form.Item name="name" justify="center" rules={nameRules} initialValue={value.userName}>
                                        <Input maxLength={50}></Input>
                                    </Form.Item>


                                    {/* Description - label*/}
                                    <Divider>
                                        Description <span className='required-color'>*</span>
                                    </Divider>
                                    {/* Description - textarea */}
                                    <Form.Item name="description" justify="center" rules={descriptionRules}>
                                        <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} maxLength={200}/>
                                    </Form.Item>


                                    {/* Adding tags section */}
                                    <Divider>
                                        Tags
                                    </Divider>

                                    {/* Adding tags functionality */}
                                    <Form.List name="tags">
                                        {(fields, {add, remove}) => (
                                            <>
                                                {/* Generate added inputs */}
                                                {fields.map(
                                                    ({key, name, ...restField}) => {
                                                        return (
                                                            <div key={key} >

                                                                {/* Tag input*/}
                                                                <Form.Item
                                                                        wrapperCol={{span: 12}}  
                                                                        justify="center"
                                                                        rules={tagRules} 
                                                                        {...restField} >

                                                                    <div className='d-flex justify-content-center align-items-center'>
                                                                        {/* Input*/}
                                                                        <Input placeholder='Tag name...' maxLength={20}/>
                                                                        {/* Button to delete tag */}
                                                                        <CloseOutlined className='delete-icon' onClick={() => remove(name)} />
                                                                    </div>

                                                                </Form.Item>

                                                            </div>  
                                                        );
                                                    }
                                                )}

                                                {/* Add tag button */}
                                                <Form.Item justify="center">
                                                    <Button block 
                                                            type="dashed" 
                                                            onClick={() => add()} 
                                                            icon={<PlusOutlined />}>
                                                        Add tag
                                                    </Button>
                                                </Form.Item>
                                            </>
                                        )}
                                    </Form.List>


                                    {/* Adding courses section */}
                                    <Divider>
                                        Courses
                                    </Divider>

                                    {/* Adding courses functionality */}
                                    <Form.List name="courses">
                                        {(fields, {add, remove}) => (
                                            <>
                                                {/* Generate added inputs */}
                                                {fields.map(
                                                    ({key, name, ...restField}) => {
                                                        return (
                                                            <div key={key} >
                                                                
                                                                {/* Course input */}
                                                                <Form.Item  
                                                                        justify='center'
                                                                        wrapperCol={{span: 12}}  
                                                                        rules={courseRules} 
                                                                        {...restField} >

                                                                    <div className='d-flex justify-content-center align-items-center'>
                                                                        {/* Input */}
                                                                        <Input placeholder='Course name...' maxLength={50}/>
                                                                        {/* Button to delete tag */}
                                                                        <CloseOutlined className='delete-icon' onClick={() => remove(name)}/>
                                                                    </div>

                                                                </Form.Item>

                                                            </div>  
                                                        );
                                                    }
                                                )}

                                                {/* Add course button */}
                                                <Form.Item justify="center">
                                                    <Button block 
                                                            type="dashed" 
                                                            onClick={() => add()}  
                                                            icon={<PlusOutlined />}>
                                                        Add course
                                                    </Button>
                                                </Form.Item>
                                            </>
                                        )}
                                    </Form.List>
                                    
                                    {/* -------------------------- Submit button --------------------------*/}
                                    <Form.Item
                                        wrapperCol={{span: 12}} 
                                        justify='center'>
                                        
                                        <Col>
                                            {/* Submit button */}
                                            <Button className='w-100 mt-4' type="primary" htmlType="submit">Publish</Button>
                                        </Col>
                                    </Form.Item>

                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>                
            </div>
        </>
    );
}

export default AddAd;

