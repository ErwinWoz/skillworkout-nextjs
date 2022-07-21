import React, { useState } from 'react';
import styles from '../styles/bmiStyle.module.css';
import Image from 'next/image';
import bmiImage from '../img/bmi1.png';
import Button from '@mui/material/Button';

function Bmi() {

  const startValues = {
    weight: '',
    feet: '',
    inches: '',
  }

  const [value, setValue] = useState(startValues);
  const [bmiValue, setBmiValue] = useState('');
  const [bmiMessage, setBmiMessage] = useState('');

  const handleChange = (e) => {
    setValue(prev => ({...prev, [e.target.name]: e.target.value }))
    e.preventDefault();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setBmiValue(calculateBMI());
  }

  const calculateBMI = () => {

    let bmiScoreMessage = '';
    const inchesInFeet = 12;
    //convert height to inches
    const heightInInches = Number(value.feet) * inchesInFeet;
    const totalHeight = heightInInches + Number(value.inches)
    const weight = Number(value.weight);
    // BMI Formula = (WEIGHT[in pounds] / (HEIGHT[in inches] * HEIGHT[in inches])) * 703;
    const bmi = (weight / (totalHeight * totalHeight)) * 703;
    const bmiRounded = Math.round(bmi);

    if (bmiRounded >= 18.5 && bmiRounded <= 24.99) {
      bmiScoreMessage = 'Healthy weight range';
    } else if (bmiRounded >= 25 && bmiRounded <= 29.99) {
      bmiScoreMessage = 'Overweight';
    } else if (bmiRounded >= 30) {
      bmiScoreMessage = 'Obesity';
    } else {
      bmiScoreMessage = 'Under weight';
    }

    setBmiMessage(bmiScoreMessage);
    
    return bmiRounded;
  }

 

   


  return (
    <>
        <div className={styles.bgWrap}>
          <Image 
            alt='backgroundImage'
            src={bmiImage}
            layout='fill'
            objectFit='cover'
            quality={100}
            style={{filter: 'brightness(0.7)'}}
          />
          <div className={styles.bgText}>
            <h2>BMI Calculator</h2>
            <h3>Enter your weight and height</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Weight in lb:</label>
                <input
                  className={styles.input}
                  required
                  type='number'
                  name="weight"
                  placeholder='e.g.,180'
                  value={value.weight}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Height in ft/in:</label>
                <input
                  className={styles.input}
                  required
                  type='number'
                  name='feet'
                  placeholder='e.g.,5'
                  value={value.feet}
                  onChange={handleChange}
                />
                <input
                  required
                  type='number'
                  name='inches'
                  placeholder='e.g.,9'
                  value={value.inches}
                  onChange={handleChange}
                />
              </div>
              <div className="form-control">
                <label></label>
                <Button 
                  color='error'
                  variant="contained" 
                  size="large"
                  type="submit"
                  disabled={value.weight === '' || value.feet === ''}
                  >Calculate</Button>
              </div>
            </form>
            <BmiDisplay bmi={bmiValue} message={bmiMessage} />
          </div>     
        </div>
    </>
  )
}

const BmiDisplay = ({bmi, message}) => {
  return (
    <>
    {bmi === '' ? null : (
      <div>
        <h2>Your score is : {bmi}</h2>
        <h3>Result: {message}</h3>
      </div>
    )}
    </>
  )
}

export default Bmi