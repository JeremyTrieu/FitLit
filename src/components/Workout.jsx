import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { ExerciseCard } from './ExerciseCard';

export const Workout = (props) => {
    const { workout } = props;
    console.log(workout);
    workout.map((exercise, id) => {
        console.log(exercise);
        console.log(id);
    });
    return (
        <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'DANGER', 'zone']}>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, i) => {
                    return (
                        <ExerciseCard i={i} exercise={exercise} key={i} />
                    )
                })}
            </div>
        </SectionWrapper>
    )
};

