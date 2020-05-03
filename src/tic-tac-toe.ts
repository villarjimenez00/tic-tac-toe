import { customElement, LitElement, css } from 'lit-element'
import { html } from 'lit-html'
import { general } from './general'

@customElement('tic-tac-toe')
export class TicTacToe extends LitElement {
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

  render() {
    return html`
      <main class="game">
        <section class="board">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>

          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>

          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </section>
      </main>
    `
  }
}
