import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const Product = () => {

    const router = useRouter();
    const {id} = router.query;

    const [item, setItem] = useState([]);

    const fetchProduct = async (id) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            //convert data to json
            const product = await response.json();
            console.log('THIS IS IT ', product);
            setItem(product);
        } catch (err) {
            console.log(err)
        }    
    }

    useEffect(() => {
        fetchProduct(id);
    }, []);

    return (
        <Container sx={{ width: 900, color: 'white' }}>
            <Typography variant="h3" component="h1" marginTop={3}>
                {item.title}
            </Typography>
            <Box marginTop={3} sx={{ display: "flex"}}>
                <picture>
                    <img    
                        src={item.image}
                        alt={item.title}
                        height={625}
                    />
                </picture>
            </Box>
            <Box>
                <Typography variant="h6" component="h4" marginTop={3}>
                    Price: ${item.price}
                </Typography>
                <Typography variant="paragraph" component="p" marginTop={3}>
                    {item.description}
                </Typography>
                <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                    Category: {item.category}
                </Typography>
                <Link href={'/shop'} variant='outlined' sx={{margin: 1, color: 'black', backgroundColor: '#FF1414'}}>Close</Link>
                <Button variant='outlined' sx={{margin: 1, color: 'black', backgroundColor: '#FF1414'}}>Add to Cart</Button>
            </Box>
        </Container>
    )
}

export default Product