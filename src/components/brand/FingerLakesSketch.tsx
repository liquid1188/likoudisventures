/** A restrained line sketch of the Finger Lakes, a secondary reference to upstate New York. */
export function FingerLakesSketch() {
  const lakes = [
    { x: 70, len: 70, lean: 4, label: '' },
    { x: 110, len: 120, lean: 8, label: 'Seneca' },
    { x: 150, len: 130, lean: 10, label: 'Cayuga' },
    { x: 190, len: 60, lean: 3, label: '' },
    { x: 220, len: 90, lean: 6, label: '' },
    { x: 255, len: 50, lean: 2, label: '' },
  ];
  return (
    <svg viewBox="40 10 260 175" className="w-full h-auto" role="img" aria-label="Sketch of the Finger Lakes">
      {lakes.map((l, i) => (
        <path key={i} d={`M ${l.x} 30 q ${l.lean} ${l.len / 2}, ${l.lean / 2} ${l.len} q -4 4, -6 -2 q ${-l.lean / 2} ${-l.len / 2}, 0 ${-l.len} q 3 -3, 6 2 Z`} stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.07" />
      ))}
      <text x="113" y="172" textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="10" fill="currentColor">Seneca</text>
      <text x="158" y="178" textAnchor="middle" fontFamily="var(--font-inter), sans-serif" fontSize="10" fill="currentColor">Cayuga</text>
      <circle cx="158" cy="163" r="2.5" fill="currentColor" />
      <text x="166" y="157" fontFamily="var(--font-cormorant), serif" fontSize="12" fontStyle="italic" fill="currentColor">Ithaca</text>
    </svg>
  );
}
