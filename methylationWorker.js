self.onmessage = function(e) {
  const pos = e.data.position;
  // חישוב דמה: אם הבסיס הוא C, יש מתילציה (true), אחרת false
  const methylated = (pos % 4 === 0);
  self.postMessage({ position: pos, methylated });
};
