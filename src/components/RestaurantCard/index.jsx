import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);
const RestaurantCard = (props) => {
  const { name, thumb, address, url } = props;
  const classes = useStyles(props);
  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() => {
          window.open(url, '_blank');
        }}
      >
        {thumb && <CardMedia className={classes.media} image={thumb} title={name} />}
        <CardContent>
          <Typography variant="body1">{name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {address}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

RestaurantCard.propTypes = {
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string,
  address: PropTypes.string,
  url: PropTypes.string,
};
RestaurantCard.defaultProps = {
  thumb: '',
  address: '',
  url: '',
};

export default RestaurantCard;
