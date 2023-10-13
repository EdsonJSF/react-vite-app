test("Is a test without fails", () => {
  if (1 === 0) {
    throw new Error("An error");
  }
});
