import {sortRecords} from "./App"

describe("sortRecords", () => {
  test("should return the correctly sorted array", () => {
    const sortedRecords = sortRecords([
      {
        id: 1,
        priority: 3,
        lead: 1,
        name: "bob"
      },
      {
        id: 3,
        priority: 2,
        name: "suzy"
      },
      {
        id: 4,
        priority: 0,
        name: "rick"
      },
      {
        id: 5,
        priority: 1,
        name: "cody"
      },
      {
        id: 2,
        priority: 3,
        lead: 1,
        name: "zach"
      },
      {
        id: 9,
        priority: 3,
        lead: 1,
        name: "tina"
      },
      {
        id: 7,
        priority: 3,
        name: "james"
      }
    ])
  });

  expect(sortRecords).toEqual([
    expect.objectContaining({
      name: "bob",
    }),
    expect.objectContaining({
      name: "tina",
    }),
    expect.objectContaining({
      name: "zach",
    }),
    expect.objectContaining({
      name: "cody",
    }),
    expect.objectContaining({
      name: "james",
    }),
    expect.objectContaining({
      name: "rick",
    }),
    expect.objectContaining({
      name: "suzy",
    }),
  ])
});
