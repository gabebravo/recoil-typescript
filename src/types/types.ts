export interface PlayerType {
  id: string
  name: string
}

export interface TeamType {
  id: string
  name: string
  players: [PlayerType]
}