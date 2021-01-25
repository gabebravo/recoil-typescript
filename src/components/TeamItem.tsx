import { ReactElement } from 'react'
import { TeamType, PlayerType } from '../types/types'

export default function TeamItem({ id, name, players }: TeamType): ReactElement {
  return (
    <div>
      <h4>{name}</h4>
      <ul style={{ listStyleType: 'none' }}>
        {players.map(({ id, name }: PlayerType) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
