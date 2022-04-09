import React from "react";
import './StudentCard.css'

import { Card, Avatar, Tag , Divider } from 'antd';
import { StarOutlined, UserOutlined, SendOutlined } from '@ant-design/icons';

const { Meta } = Card;


function StudentCard(props){

    return(
        <>
            <Card
                className="card shadow-sm"
                // Buttons section
                actions={[
                    <SendOutlined key="setting" />,
                    <StarOutlined key="edit" />,
                    <UserOutlined key="ellipsis" />
                ]}
            >
                
                {/* Header section */}
                <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title= {props.name} 
                description=""
                />

                <Divider style={{marginBottom: 5, marginTop: 15}}></Divider>
                {/* Tags section */}
                <div className="tags-block">
                    {/* Render tags */}
                    { props.tags.map((tagName, i) => {return <Tag key={'t' + i} style={{marginBottom: 5}} color="magenta">{tagName}</Tag>})}
                                                                
                </div>

                <Divider style={{marginTop:0, marginBottom:5}} orientation="left" orientationMargin={0}><span className="divider-text">O mnie</span></Divider>
                
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
        </>
    );
}

export default StudentCard;