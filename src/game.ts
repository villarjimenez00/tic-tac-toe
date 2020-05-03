import { Player } from './player'
import { range } from './range'

export class Game {
  private readonly board: Player | null = range(9).map(() => null)

  setBoard(board: (Player | null)[]) {
    this.board = board
  }

  canPlay(index: number) {
    return this.board[index] === null
  }
}
