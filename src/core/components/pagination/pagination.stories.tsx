import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { boolean, select } from '@storybook/addon-knobs';
import { Pagination } from './pagination';

const alignments: { [key: string]: Pagination['alignment'] } = {
  Centered: 'is-centered',
  Right: 'is-right',
  None: null,
};

const sizes = {
  Small: 'is-small',
  Medium: 'is-medium',
  Large: 'is-large',
  None: null,
};

storiesOf('Components|Pagination', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <b-pagination
        is-rounded=${boolean('Rounded', false)}
        alignment=${select('Alignment', alignments, null)}
        size=${select('Size', sizes, null)}
      >
      </b-pagination>
    `;
  });