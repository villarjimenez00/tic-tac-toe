import { Game } from './game'

describe('game', () => {
  it('should not be able if there a player in that cell', () => {
    const game = new Game()
    game.setBoard(['X', 'O', 'X', null, null, null, null, null, null])

    const actual = game.canPlay(0)

    expect(actual).toBe(false)
  })

  it('should be able if there not a player in that cell', () => {
    const game = new Game()
    game.setBoard(['X', 'O', 'X', null, null, null, null, null, null])

    const actual = game.canPlay(5)

    expect(actual).toBe(true)
  })
})
