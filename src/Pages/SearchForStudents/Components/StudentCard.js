import React from "react";
import { useState } from "react";
import './StudentCard.css'
import { Card, Avatar, Tag , Divider, Modal, Button, Form, Input, message} from 'antd';
import { StarOutlined, UserOutlined, SendOutlined } from '@ant-design/icons';
import ApiService from "../../../Services/ApiService";

const { Meta } = Card;



function StudentCard(props){    

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const onFinishForm = (values) => {
        console.log('Success:', values);
        setIsModalVisible(false);
        message.success('Wiadomość została wysłana!', 1.5);
        
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const messageRules = [
        {
            required: true,
            message: 'Proszę uzupełnij wiadomość!',
        }
    ]



    return(
        <>
            <Card
                className="card shadow"
                // Buttons section
                actions={[
                    <SendOutlined onClick={showModal} key="send" />,
                    <StarOutlined onClick={ApiService.getSingleAds} key="follow" />,
                    <UserOutlined key="profile" />
                ]}
                hoverable
            >
                
                {/* Header section */}
                <Meta
                // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                avatar={<Avatar src={props.imgURL}/>}
                title= {props.userName} 
                description=""
                />
                <Divider style={{marginBottom: 5, marginTop: 15}}></Divider>
                {/* Tags section */}
                <div className="tags-block">
                    {/* Render tags */}
                    { props.tags.map((tagName, i) => {return <Tag key={'t' + i} style={{marginBottom: 5}} color="magenta">{tagName}</Tag>})}
                                                                
                </div>

                <Divider style={{marginTop:0, marginBottom:5}} orientation="left" orientationMargin={0}><span className="divider-text">Opis</span></Divider>
                
                {/* Description section */}
                <div className="description-block">
                    {props.description}
                </div>
                
                <Divider style={{marginTop:5, marginBottom:5}} orientation="left" orientationMargin={0}><span className="divider-text">Realizowane kursy</span></Divider>
                
                {/* Courses section */}
                <div className="courses-block">
                    <ul>
                        {/* Render list of courses */}
                        {props.courses.map((courseName, i ) => {return <li key={i}>{courseName}</li>})}
                    </ul>
                </div>
            </Card>

            {/* Modal when send button click */}
                <Modal  bodyStyle={{paddingBottom: 5}} title="Wiadomość" 
                        centered 
                        visible={isModalVisible} 
                        onCancel={handleCancel}
                        footer= {[
                            <Button key="back" shape="round" onClick={handleCancel}>
                                Powrót
                            </Button>,
                            <Button form="message-form" key="submit" type="primary" htmlType="submit" shape="round" icon={<SendOutlined/>}>
                                Wyślij
                            </Button>
                        ]}
                        >
                        <Form   id ="message-form"
                                name="message-form"
                                onFinish={onFinishForm}
                                autoComplete="off"
                                >
                            <Form.Item  rules={messageRules}
                                        name="message"
                                    >
                                <Input.TextArea  allowClear id="message-area"></Input.TextArea>
                            </Form.Item>

                        </Form>
                </Modal>
        </>
    );
}

export default StudentCard;