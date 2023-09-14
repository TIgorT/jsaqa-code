const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const result = sorting.sortByName(input);
    expect(result).toEqual(expected);
  });
});

describe("Books names test suit", () => {
  it("Book titles without sorting", () => {
    const input = ["Граф Монте-Кристо", "Шерлок Холмс", "Граф Монте-Кристо"];
    const expected = ["Граф Монте-Кристо", "Граф Монте-Кристо", "Шерлок Холмс"];
    const result = sorting.sortByName(input);
    expect(result).toEqual(expected);
  });
});
