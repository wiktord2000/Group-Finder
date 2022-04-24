import React, { useState} from 'react';
import './SearchForStudents.css'
import StudentCard from './Components/StudentCard';
import { Input, Select } from 'antd';
import { SingleAd } from '../../Models/SingleAd';

const { Search } = Input;
const { Option } = Select;

function SearchForStudents(){

    const [studentsList, setStudentsList] = useState([
                                new SingleAd(0, "Wiktor Danielewski","wiktord2000@wp.pl","Jestem studentem 3 roku", ["Java", "Python"], ["PEA", "SDiZO"]),
                                new SingleAd(1, "Wiktor Danielewski","wiktord2000@wp.pl","Jestem studentem 3 roku", ["Java", "Python"], ["PEA", "SDiZO"]),
                                new SingleAd(2, "Wiktor Danielewski","wiktord2000@wp.pl","Jestem studentem 3 roku", ["Java", "Python"], ["PEA", "SDiZO"])
                                // {name: "Wiktor Danielewski", tags: ["Java", "Python"], description: "Jestem studentem 3 roku", courses: ["PEA", "SDiZO"]},
                                // {name: "Szymon Kos", tags: ["JavaScript", "FrontEnd", "Python"], description: "Jestem studentem 2 roku", courses: ["GK", "PEA", "SDiZO"]},
                                // {name: "Tomasz Zawadzki", tags: ["C/C++", "C#"], description: "Jestem studentem 3 roku na PWr", courses: ["SDiZO"]},
                                // {name: "Wiktor Danielewski", tags: ["Java", "Python"], description: "Jestem studentem 3 roku", courses: ["PEA", "SDiZO"]},
                                // {name: "Szymon Kos", tags: ["JavaScript", "FrontEnd", "Python"], description: "Jestem studentem 2 roku", courses: ["GK", "PEA", "SDiZO"]},
                                // {name: "Tomasz Zawadzki", tags: ["C/C++", "C#"], description: "Jestem studentem 3 roku na PWr", courses: ["SDiZO"]}
                            ]);

    const [dispStudentsList, setDispStudentsList] = useState([...studentsList]);

    const [filterBy, setFilterBy] = useState('tags');




    const handleOnSearch = function(value){ 

        console.log(studentsList[2]);
        
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
                            key={index}
                            name={student.name}
                            tags={student.tags} 
                            description={student.description}
                            courses={student.courses}
                        />);
                })}

            </div>
        </>
    );
}

export default SearchForStudents;