import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  income: {
    borderTop: '10px solid rgba(0, 255, 0, 0.5)',
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    borderLeft: '10px solid rgba(0, 255, 0, 0.5)',
    borderRight: '10px solid rgba(0, 255, 0, 0.5)',
  },
  expense: {
    borderTop: '10px solid rgba(255, 0, 0, 0.5)',
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
    borderLeft: '10px solid rgba(255, 0, 0, 0.5)',
    borderRight: '10px solid rgba(255, 0, 0, 0.5)',
  },
}));