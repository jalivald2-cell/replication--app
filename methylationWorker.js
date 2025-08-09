const BASES = ['A','T','C','G'];

function baseAt(pos) {
  const val = (Math.sin(pos * 12.9898 + 78.233) * 43758.5453) % 4;
  const idx = Math.abs(Math.floor(val));
  return BASES[idx];
}

function isCpG(pos) {
  return baseAt(pos) === 'C' && baseAt(pos+1) === 'G';
}

onmessage = function(e) {
  const {start, length} = e.data;
  const result = new Array(length).fill(false);
  for(let i=0; i<length; i++) {
    if(isCpG(start + i)) {
      result[i] = true;
    }
  }
  postMessage({start, length, methylation: result});
}
