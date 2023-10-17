describe("Test on <DemoComponent />", () => {
  test("Is a test without fails", () => {
    // 1. Insert
    const message1 = "Test";

    // 2. Stimulation
    const message2 = message1.trim();

    // 3. Check status
    expect(message1).toBe(message2);
  });
});
