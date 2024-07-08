import { useState } from 'react';
import './App.css';
import { Hero } from './components/Hero';
import { Generator } from './components/Generator';
import { Workout } from './components/Workout';
import { generateWorkout } from './utils/ functions';

function App() {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoison] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState('strength_power');

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }
    let newWorkout = generateWorkout({ poison, muscles, goals });
    //console.log(newWorkout);
    setWorkout(newWorkout);

    window.location.href = '#workout';
  }

  return (
    <div className='app-wrapper'>
      <Hero />
      <Generator poison={poison} setPoison={setPoison} muscles = {muscles} setMuscles={setMuscles} goals={goals} setGoals={setGoals} updateWorkout={updateWorkout}/>
      {workout && (<Workout workout={workout} />)}
    </div>
  )
}

export default App
