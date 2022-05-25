import React, { useState, useEffect} from 'react';
import './SearchForStudents.css'
import StudentCard from './Components/StudentCard';
import { Input, Select } from 'antd';
import { SingleAd } from '../../Models/SingleAd';
import ApiService from '../../Services/ApiService';

const { Search } = Input;
const { Option } = Select;

function SearchForStudents(){

    // const [studentsList, setStudentsList] = useState([
    //                             new SingleAd(0, "Wiktor Danielewski","wiktord2000@wp.pl","Jestem studentem 3 roku", ["Java", "Python"], ["PEA", "SDiZO"], ''),
    //                             new SingleAd(1, "Wiktor Danielewski","wiktord2000@wp.pl","Jestem studentem 3 roku", ["Java", "Python"], ["PEA", "SDiZO"], ''),
    //                             new SingleAd(2, "Wiktor Danielewski","wiktord2000@wp.pl","Jestem studentem 3 roku", ["Java", "Python"], ["PEA", "SDiZO"], '')
    //                         ]);

    const [studentsList, setStudentsList] = useState([]);
    const [dispStudentsList, setDispStudentsList] = useState([]);

    useEffect(() => {
        //Runs only on the first render
        ApiService.getSingleAds()
        .then(response => response.json())
        .then(data => {
            setStudentsList(data);
            setDispStudentsList(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, []);

    

    const [filterBy, setFilterBy] = useState('tags');




    const handleOnSearch = function(value){ 
        
        // If empty string - fill all list
        if(value === ""){
            setDispStudentsList([...studentsList]);
            return;
        }

        let lowerCaseValue = value.toLowerCase();

        switch(filterBy){
            case 'tags':
                setDispStudentsList(studentsList.filter(({tags}) => {
            
                    let isSame = false; 
                    
                    tags.forEach((tag) => {
                        // Looking for same tag name
                        if(tag.toLowerCase() === lowerCaseValue){
                            isSame = true;
                            return;
                        }
                    });

                    if(isSame) return true;
                    return false;
                }));
                break;

            case 'description':
                setDispStudentsList(studentsList.filter(({description}) => {
                    return description.toLowerCase().includes(lowerCaseValue);  
                }));
                break;
                
            case 'courses':
                setDispStudentsList(studentsList.filter(({courses}) => {
            
                    let isSimilar = false; 
                    
                    courses.forEach((course) => {
                        // Looking for similar tag name
                        if(course.toLowerCase().includes(lowerCaseValue)){
                            isSimilar = true;
                            return;
                        }
                    });
                    
                    if(isSimilar) return true;
                    return false;
                }));
                break;
            default:
                console.log("Problem with switch");
        }

    };

    const handleSelectChange = (value) => {
        setFilterBy(value);
    }


    return(
        <>
            <div className="filters-area shadow-sm">

                <Select defaultValue="tags" style={{ width: 120 }} onChange={handleSelectChange}>
                    <Option value="tags">Tagi</Option>
                    <Option value="description">Opis</Option>
                    <Option value="courses">Kursy</Option>
                </Select>

                <Search allowClear style={{width:300}} onSearch={handleOnSearch} placeholder="Wprowadź tekst..."enterButton />
            </div>

            <div className='cards-container'>
                {dispStudentsList.map((student, index) => {
                    return (
                        <StudentCard 
                            key={student.id}
                            userName={student.userName}
                            tags={student.tags} 
                            description={student.description}
                            courses={student.courses}
                            imgURL={student.imgURL}
                        />);
                })}
            </div>
        </>
    );
}

export default SearchForStudents;