import { Game } from './game'

describe('game', () => {
  it('should not be able if there a player in that cell', () => {
    const game = new Game()
    // prettier-ignore
    game.setBoard([
      'X', 'O', 'X', 
      null, null, null, 
      null, null, null
    ])

    game.play(0)

    const actual = game.board

    // prettier-ignore
    expect(actual).toEqual([
      'X', 'O', 'X',
      null, null, null,
      null, null, null
    ])
  })

  it('should be able if there not a player in that cell', () => {
    const game = new Game()
    // prettier-ignore
    game.setBoard([
      'X', 'O', 'X', 
      null, null, null, 
      null, null, null
    ])

    game.play(5)

    const actual = game.board

    // prettier-ignore
    expect(actual).toEqual([
      'X', 'O', 'X',
      null, null, 'X',
      null, null, null
    ])
  })

  it('should alternate players', () => {
    const game = new Game()
    // prettier-ignore
    game.setBoard([
      null, null, null,
      null, null, null,
      null, null, null
    ])

    game.play(0)
    game.play(1)
    game.play(2)

    const actual = game.board
    // prettier-ignore
    expect(actual).toEqual([
      'X', 'O', 'X',
      null, null, null,
      null, null, null
    ])
  })
})
