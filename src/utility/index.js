export const checkWinner = (state) => {
  const winnerLogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let logic of winnerLogic) {
    const [a, b, c] = logic;
    console.log(a, b, c);
    let check =
      state[a] != null && state[a] === state[b] && state[a] === state[c];
    if (check) {
      return state[a];
    }
  }
  return false;
};
