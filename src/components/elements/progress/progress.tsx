import { Component, Prop, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-progress',
})
export class Progress {
  @Prop() class: string;
  @Prop() value: number;
  @Prop() max: number = 100;
  @Prop() color: 'is-primary' | 'is-link' | 'is-info' | 'is-success' | 'is-warning' | 'is-danger';
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  render(): JSX.Element {
    const progressClass = classNames('progress', this.color, this.size, this.class);

    return (
      <progress class={progressClass} value={this.value} max={this.max}>
        {this.value && `${this.value}%`}
      </progress>
    );
  }
}