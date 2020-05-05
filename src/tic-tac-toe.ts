import { customElement, LitElement, css, property } from 'lit-element'
import { html } from 'lit-html'
import { general } from './general'
import { Board } from './board'
import { Game } from './game'
import { Player } from './player'

@customElement('tic-tac-toe')
export class TicTacToe extends LitElement {
  @property({ type: Array })
  private readonly game = new Game()

  @property({ type: Array })
  board: Board = this.game.board

  @property({ type: String })
  playerWon: Player | null = null

  connectedCallback(): void {
    super.connectedCallback()
    this.game.onBoardChange(board => {
      this.board = [...board]
    })
    this.game.onWon(player => {
      this.playerWon = player
    })
  }

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

  private onCellClicked(index: number) {
    this.game.play(index)
  }

  render() {
    return html`
      <main class="game">
        ${this.playerWon !== null
          ? html`<h1>Congratulations you won player ${this.playerWon}</h1>`
          : html``}
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
