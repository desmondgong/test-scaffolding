import { BaseCSSProperties } from '@material-ui/styles';

export interface StyleProps {
  root: BaseCSSProperties;
  favRestrContainer: BaseCSSProperties;
}

const styles = (): StyleProps => ({
  root: {},
  favRestrContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});
export default styles;
