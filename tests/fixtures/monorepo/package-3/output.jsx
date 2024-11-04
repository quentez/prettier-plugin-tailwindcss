const a1 = tiwi`bg-red-500 sm:bg-tomato`;
const a2 = tiwi.a`bg-red-500 sm:bg-tomato`;
const a3 = tiwi(a2)`bg-red-500 sm:bg-tomato`;

const a4 = tiwi(Column)`
  bg-red-500
  sm:bg-tomato
`;

const a5 = tiwi(Column)`
  bg-red-500
  sm:bg-tomato

  ${{
    isEnabled: `
      bg-red-500
      sm:bg-tomato
    `,
  }}
`;