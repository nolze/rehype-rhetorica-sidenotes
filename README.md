# @rhetorica-css/rehype-sidenotes

A handler for [remark-rehype](https://github.com/remarkjs/remark-rehype) to show footnotes as sidenotes with [rhetorica-css](https://github.com/nolze/rhetorica-css).

```js
const report = require('vfile-reporter');

const remark = require('remark');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');

const rhetoricaSidenotes = require('@rhetorica-css/rehype-sidenotes');

remark()
  .data('settings', { footnotes: matter.footnotes === false ? false : true })
  .use(remark2rehype, {
    handlers: {
      footnoteReference: rhetoricaSidenotes,
    },
  })
  .use(html)
  .process(srcFile, function(err, file) {
    console.error(report(err || file));
  });
```
