import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-tags',
})
export class Tags implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class: string;

  /**
   * Has addons
   */
  @Prop() hasAddons = false;

  render(): JSX.Element {
    const tagsClass = classNames('tags', { 'has-addons': this.hasAddons }, this.class);

    return (
      <div class={tagsClass}>
        <slot />
      </div>
    );
  }
}
