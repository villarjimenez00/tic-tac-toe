import { customElement, LitElement, css, property } from 'lit-element'
import { html } from 'lit-html'
import { general } from './general'
import { Player } from './player'
import { range } from './range'

@customElement('tic-tac-toe')
export class TicTacToe extends LitElement {
  @property({ type: Array })
  cells: Player[] = []

  static get styles() {
    return [
      general,
      css`
    .game{
      display:flex;
      justify-content:center;
      aling
    }
      .board {
        display: grid;
        max-width:600px;
        grid-template-columns: repeat(3, 280px);
        grid-template-rows: repeat(3, 280px);
        grid-gap: 20px;
      }
      .cell {
        background-color: tomato;
      }
    `
    ]
  }

  private onCellClicked(_index: number) {}

  render() {
    return html`
      <main class="game">
        <section class="board">
          ${range(9).map(
            cell => html`<div class="cell" @click="${() => this.onCellClicked(cell)}"></div>`
          )}
        </section>
      </main>
    `
  }
}
