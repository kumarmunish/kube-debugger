// Self-check for the decision tree in index.html. Run: node check.js
const html = require('fs').readFileSync(__dirname + '/index.html', 'utf8');
const N = eval('(' + html.match(/const N = (\{[\s\S]*?\n\});/)[1] + ')');
const KINDS = ['fix', 'pass', 'unknown', 'end'];
const reach = new Set(['d_ready','p_pending', 's_endpoints', 'i_backends']);
const qs = [];

for (const [id, n] of Object.entries(N)) {
  if (n.done) {
    console.assert(KINDS.includes(n.kind), `${id}: unknown kind ${n.kind}`);
    console.assert(n.t && n.d, `${id}: conclusion needs a title and detail`);
    continue;
  }
  console.assert(n.opts && n.opts.length >= 2, `${id}: needs at least 2 options`);
  qs.push(n.q);
  for (const [, target] of n.opts) {
    console.assert(N[target], `${id} -> ${target} does not exist`);
    reach.add(target);
  }
}
const orphans = Object.keys(N).filter(k => !reach.has(k));
console.assert(!orphans.length, `unreachable nodes: ${orphans}`);
// undo() finds the previous node by its question text, so those must be unique
console.assert(new Set(qs).size === qs.length, 'duplicate question text breaks undo()');
console.log(`ok — ${Object.keys(N).length} nodes, ${qs.length} questions, ${Object.keys(N).length - qs.length} conclusions`);
