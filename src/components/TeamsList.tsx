import { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useRecoilValue } from 'recoil'
import { teamsState } from '../atoms/atoms'
import TeamItem from './TeamItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function TeamsList(): ReactElement {
  const classes = useStyles();
  const teams = useRecoilValue(teamsState);
  console.log('teams', teams);

  return (
    <div>
      <h2>Dream Teams</h2>
      {teams.length === 0 ? (
        <p>No teams built yet</p>
      ) : (
        <>
          {teams.map((team: any): ReactElement => (
            <TeamItem key={team.id} {...team} />
          ))}
        </>
      )}
    </div>
  );
}
