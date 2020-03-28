'use strict';

const u = require('unist-builder');

function footnoteReferenceHandler(h, node) {
  const identifier = String(node.identifier);

  const footnote = h.footnoteById[identifier];

  return [
    h(
      node.position,
      'span',
      {
        id: 'fnref-' + identifier,
        className: ['sidenote-number'],
      },
      [
        h(
          node.position,
          'a',
          { href: '#fn-' + identifier, className: ['footnote-ref'] },
          [u('text', node.label || identifier)],
        ),
      ],
    ),
    h(
      node.position,
      'span',
      { id: 'fn-' + identifier, className: 'sidenote' },
      [
        h(
          node.position,
          'span',
          {
            id: 'fnref-' + identifier,
            className: ['sidenote-number'],
          },
          [
            h(
              node.position,
              'a',
              {
                href: '#fnref-' + identifier,
                className: ['footnote-ref'],
              },
              [u('text', node.label || identifier)],
            ),
          ],
        ),
        ...(footnote ? footnote.children[0].children : []),
      ],
    ),
  ];
}

module.exports = footnoteReferenceHandler;
