import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
  {id: 1, name: 'Shoes', description: 'Running Shoes.' },
  {id: 2, name: 'MacBook', description: 'Apple MacBook.' },
];

const Products = ({ products }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
      {products.map((data) => (
          < div style={{color:"#fff"}}>
            <h1>{data.id}</h1>
            <h1> {data.name} </h1>
            <h2>{data.description}</h2>
          </div>
        ))};
      </Grid>
    </main>
  );
};

export default Products;