import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ExerciseCard from '../components/ExerciseCard';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import styles from '../styles/SearchStyle.module.css';

const apiKey = 'd63c34a763msh7ec90e726ec3ee9p1ca946jsn74adae23be45';

function Searchbar() {
    const [exercise, setExercise] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchExercises = (muscle) => {
      axios.request({
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/target/${muscle}`,
        headers: {
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key': 'd63c34a763msh7ec90e726ec3ee9p1ca946jsn74adae23be45'
        }
      })
      .then(function (response) {
        console.log(response.data);
        setExercise(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    }

    useEffect(() => {
      searchExercises('abs');
    }, [])

    console.log("NOW", exercise)

  return (
    <div>
        {/* <input 
            type="text" 
            data-testid="searchBar"
            placeholder="search by muscles" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchExercises(searchTerm)} 
          style={{cursor: 'pointer'}} 
        /> */}
        <div className={styles.searchbar}>
          <SearchIcon 
            className={styles.icon}
            onClick={() => searchExercises(searchTerm)}
          />
          <Input 
            className={styles.input} 
            placeholder='E.g., abs'
            type="text" 
            data-testid="searchBar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={() => searchExercises(searchTerm)}
          />
        </div>
        
        {
          exercise.length > 0
            ? (
                <div>
                    {exercise.map((exercise, index) => index < 10 && (
                        <ExerciseCard key={exercise.id} exercise={exercise}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No exercises found</h2>
                </div>
            )
        }
    </div>
  )
}

export default Searchbar