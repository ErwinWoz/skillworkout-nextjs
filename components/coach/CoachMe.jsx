// import React from 'react';
// import style from './coach.module.scss';
import { coachList } from '../../lib/data';
import CoachCard from './CoachCard';

function CoachMe() {
  return (
    <div>
      <h2>Select a coach and start gtting best results  </h2>
      <div>
        {coachList.map((coach) => (
          <CoachCard key={coach.id} coach={coach}/>
        ))}
      </div>
    </div>
  )
}

export default CoachMe;