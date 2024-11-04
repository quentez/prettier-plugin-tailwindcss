const a1 = tiwi`sm:bg-tomato bg-red-500`;
const a2 = tiwi.a`sm:bg-tomato bg-red-500`;
const a3 = tiwi(a2)`sm:bg-tomato bg-red-500`;

const a4 = tiwi(Column)`
  sm:bg-tomato
  bg-red-500
`;

const a5 = tiwi(Column)`
  sm:bg-tomato
  bg-red-500

  ${{
    isEnabled: `
      sm:bg-tomato
      bg-red-500
    `
  }}
`;