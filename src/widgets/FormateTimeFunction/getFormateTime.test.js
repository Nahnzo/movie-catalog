import getFormateTime from "./getFormateTime";

test("Должно быть 1 час 52 минуты", () => {
  expect(getFormateTime(112)).toBe("1 час 52 минуты");
});

test("Должна быть пустая строка при undefined", () => {
  expect(getFormateTime(undefined)).toBe("");
});

test("Должна быть пустая строка 0", () => {
  expect(getFormateTime(0)).toBe("");
});
