import { u } from "unist-builder";

function footnoteReferenceHandler(state, node) {
  const identifier = String(node.identifier);

  const footnote = state.footnoteById.get(identifier);

  return [
    h(
      // node.position,
      "span",
      {
        id: "fnref-" + identifier,
        className: ["sidenote-number"],
      },
      [
        h(
          // node.position,
          "a",
          { href: "#fn-" + identifier, className: ["footnote-ref"] },
          [u("text", node.label || identifier)],
        ),
      ],
    ),
    h(
      // node.position,
      "span",
      { id: "fn-" + identifier, className: "sidenote" },
      [
        h(
          // node.position,
          "span",
          {
            id: "fnref-" + identifier,
            className: ["sidenote-number"],
          },
          [
            h(
              // node.position,
              "a",
              {
                href: "#fnref-" + identifier,
                className: ["footnote-ref"],
              },
              [u("text", node.label || identifier)],
            ),
          ],
        ),
        ...(footnote ? footnote.children[0].children : []),
      ],
    ),
  ];
}

export default footnoteReferenceHandler;
