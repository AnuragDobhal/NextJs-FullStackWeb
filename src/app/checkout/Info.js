import React from 'react';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const products = [
  {
    id: 1,
    name: 'Professional plan',
    desc: 'Monthly subscription',
    price: '₹15.00',
  },
  {
    id: 2,
    name: 'Dedicated support',
    desc: 'Included in the Professional plan',
    price: 'Free',
  },
  {
    id: 3,
    name: 'Hardware',
    desc: 'Devices needed for development',
    price: '₹69.99',
  },
  {
    id: 4,
    name: 'Landing page template',
    desc: 'License',
    price: '₹49.99',
  },
];

function Info({ totalPrice }) {
  return (
    <React.Fragment>
      <Typography variant="subtitle2" color="text.secondary">
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        {totalPrice}
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={`${product.name} - ${product.desc}`}
              secondary={
                <Typography variant="body1" fontWeight="medium">
                  {product.price}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}

Info.propTypes = {
  totalPrice: PropTypes.string.isRequired,
};

export default Info;
