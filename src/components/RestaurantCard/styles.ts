import { Theme } from '@material-ui/core';
import { BaseCSSProperties } from '@material-ui/styles';

export interface StyleProps {
  root: BaseCSSProperties;
  media: BaseCSSProperties;
}
const styles = (theme: Theme): StyleProps => ({
  root: {
    width: 280,
    margin: theme.spacing(2),
    boxShadow: '1px 1px 5px #dde1f8',
  },
  media: {
    height: 120,
  },
});
export default styles;
