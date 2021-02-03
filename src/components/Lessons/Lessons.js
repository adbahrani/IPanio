import React from 'react'
import './lessons.scss';
import Pianocomp from '../../components/Piano/Piano'
import LessonComp from '../../components/LessonComp/LessonComp'
const Lessons = () => {
    
    return (
        <div className="lessons container">
            <LessonComp no="1" />
            <LessonComp no="2" />
            <LessonComp no="3" />
            <LessonComp no="4" />
            <Pianocomp />
        </div>
    )
}

export default Lessons;
