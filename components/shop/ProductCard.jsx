import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Link from 'next/link';
// import { useNavigate } from "react-router-dom";
// import { ProductDetails } from '../index';




function ProductCard({product}) {

    const [isOpen, setIsOpen] = useState(false);

    // let navigate = useNavigate();

  return (
    <>
    <Grid item xs={4} sx={{margin: 2}}>
        <Paper elevation={10} sx={{width: '20rem'}}>
            <picture>
                <img src={product.image} 
                    alt={product.title}
                    // className='img'
                    style={{height: '20rem', width: '100%'}}
                />
            </picture>
            <Box paddingX={1}>
                <Typography component='h2' variant='subtitle1'>
                    {product.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 3 }}>
                    <Rating name='read-only' value={product.rating.rate} readOnly precision={0.5} size='small' />
                    <Typography variant='body2' component='p' marginLeft={0.5}>{product.rating.rate}</Typography>
                    <Typography variant='body2' component='p' marginLeft={1.5}>({product.rating.count} reviews)</Typography>
                </Box>
                <Box>
                    <Typography variant='h6' component='h3' marginLeft={0}>From ${product.price}</Typography>
                </Box>
            </Box>
            <Link href='/product/[id]' as={`/product/${product.id}`} >Details</Link>
            {/* <Button onClick={() => addToCart(product)} variant='outlined' sx={{margin: 1, color: 'black', backgroundColor: '#FF1414'}}>Add to Cart</Button> */}
        </Paper>
    </Grid>
    {/* {isOpen && <ProductDetails product={product} setIsOpen={setIsOpen} />} */}
    </>
  )
}

export default ProductCard;