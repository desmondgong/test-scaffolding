import React, { ReactElement } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Restaurant } from '../../types';
import styles from './styles';

export interface Props extends Restaurant {}

const useStyles = makeStyles(styles);

const RestaurantCard = (props: Props): ReactElement => {
  const { name, thumb = '', address = '', url = '' } = props;
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

RestaurantCard.defaultProps = {
  thumb: '',
  address: '',
  url: '',
};

export default RestaurantCard;
