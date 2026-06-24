export default function Logo({ size = 44 }) {
  // Faithful recreation of the Vault & Vantage monogram:
  // a thin gold ring enclosing an interlocking serif "V" with an
  // integrated ampersand. Transparent background, crisp at any size.
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Vault & Vantage"
      role="img"
    >
      <circle
        cx="60"
        cy="60"
        r="55"
        stroke="var(--gold)"
        strokeWidth="2"
      />
      {/* Large serif V */}
      <text
        x="48"
        y="80"
        textAnchor="middle"
        fontFamily="var(--serif)"
        fontSize="58"
        fontWeight="500"
        fill="var(--gold)"
        style={{ letterSpacing: "-2px" }}
      >
        V
      </text>
      {/* Integrated ampersand nestled in the right arm of the V */}
      <text
        x="74"
        y="74"
        textAnchor="middle"
        fontFamily="var(--serif)"
        fontStyle="italic"
        fontSize="36"
        fontWeight="500"
        fill="var(--gold)"
      >
        &amp;
      </text>
    </svg>
  );
}
