import { customElement, LitElement, css, property } from 'lit-element'
import { html } from 'lit-html'
import { general } from './general'
import { Board } from './board'
import { Game } from './game'

@customElement('tic-tac-toe')
export class TicTacToe extends LitElement {
  @property({ type: Array })
  board: Board = ['X', 'O', 'X', null, null, null, null, null, null]

  static get styles() {
    return [
      general,
      css`
        .game {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .board {
          display: grid;
          max-width: 600px;
          grid-template-columns: repeat(3, 280px);
          grid-template-rows: repeat(3, 280px);
          grid-gap: 20px;
        }
        .cell {
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 32px;
          background-color: tomato;
        }
      `
    ]
  }

  private readonly game = new Game()

  private onCellClicked(index: number) {
    if (this.game.canPlay(index)) {
      this.board[index] = 'X'
      this.game.setBoard(this.board)
      this.requestUpdate()
    }
  }

  render() {
    return html`
      <main class="game">
        <section class="board">
          ${this.board.map(
            (cell, index) =>
              html`<div class="cell" @click="${() => this.onCellClicked(index)}">${cell}</div>`
          )}
        </section>
      </main>
    `
  }
}
