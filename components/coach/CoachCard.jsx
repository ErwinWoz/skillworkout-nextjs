import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';


const CoachCard = ({coach}) => {

    const [showForm, setShowForm] = useState(false);


  return (    
    <Box width='350px' marginTop='3rem' marginBottom='6rem'>
        <Card>
            <CardMedia
                component='img'
                height='300'
                image={coach.image}
                alt='unsplash image'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {coach.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    {coach.certificate}
                </Typography>
            </CardContent>
            <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Learn More</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box marginBottom='1rem'>
                            <Typography>
                                My Expertise:
                            </Typography>
                            <Typography>
                                {coach.expertise}
                            </Typography>
                        </Box>
                        <Typography>
                            {coach.description}
                        </Typography>
                        <Typography>
                            Price per session:
                        </Typography>
                        <Typography>
                            ${coach.sessionPrice} / {coach.sessionTime}
                        </Typography>
                        <Typography>
                            Monthly subscription: ${coach.monthPrice}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            <CardActions>
                <Button 
                    size='large'
                    onClick={() => {
                        console.log('YUP');
                        setShowForm(!showForm);
                        console.log(showForm);
                    }}
                >Contact Me
                </Button>
            </CardActions>
            {showForm ? (
                <Box>
                <TextField
                    variant="outlined"
                    autoFocus={true}
                    placeholder="Write awesome things about yourself"
                    multiline={true}
                    rows={3}
                />
                <Button>Send</Button>
                </Box>
            ): null
            }
        </Card>
    </Box>
  )
}

export default CoachCard;