import { createComponent } from "@lit/react";
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import React from "react";

type Priority = "primary" | "secondary";

@customElement("lit-button")
class LitButton extends LitElement {
  @property()
  priority: Priority = "primary";

  render() {
    return html`<button class=${this.priority}><slot /></button>`;
  }

  static styles = css`
    button {
      padding: 8px 16px;
      border-radius: 4px;
      color: white;
      cursor: pointer;
    }
    .primary {
      background-color: blue;
      border: solid 1px blue;
    }
    .secondary {
      background-color: green;
      border: solid 1px green;
    }
  `;
}

export const Button = createComponent({
  react: React,
  tagName: "lit-button",
  elementClass: LitButton,
  events: {
    onClick: "click",
  },
});
