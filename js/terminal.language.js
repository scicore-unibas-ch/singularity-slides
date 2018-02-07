/*
  Language: terminal console
  Author: Josh Bode <joshbode@gmail.com>
*/

var hljs = remark.highlighter.engine;

hljs.registerLanguage('terminal', function() {
  return {
    contains: [
      {
        className: 'string',
        begin: '^(([\\w.]+)@([\\w.]+)\\:(\\S+) ?)?\\$|^(([\\w.]+)@([\\w.]+)\\:(\\S+) ?)?\\#'
      },
      {
        className: 'type',
        begin: '^Singularity (\\S+)\\:(\\S+)>'
      },
      /*{
        className: 'constant',
        begin: '(:(.*) )?\\$ '
      },*/
      {
        className: 'ansi',
        begin: '<span style\\="([^"]+)">',
        end: '<\\/span>'
      }
    ]
  }
});
