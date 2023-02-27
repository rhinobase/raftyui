import { describe, expect, test } from "@jest/globals";
import { classNames } from "./classNames";

describe("String Test", () => {
  test("passing single String", () => {
    expect(classNames("str")).toBe("str");
  });
  test("passing two Strings", () => {
    expect(classNames("str1", "str2")).toBe("str1 str2");
  });
  test("passing multiple Strings", () => {
    expect(classNames("str1", "str2", "str3", "str4")).toBe("str1 str2 str3 str4");
  });
});

describe("Boolean test", () => {
  test("Single Boolean value for true", () => {
    var test = true;
    expect(classNames(test ? "true" : "false")).toBe("true");
  });
  test("Single Boolean value for false", () => {
    var test = false;
    expect(classNames(test ? "true" : "false")).toBe("false");
  });
  test("Single Boolean value and String", () => {
    var test = true;
    expect(classNames(test ? "true" : "false", "string")).toBe("true string");
  });
  test("Two Strings and a Boolean value", () => {
    var test = true;
    expect(classNames("string 1", test ? "true" : "false", "string 2")).toBe(
      "string 1 true string 2",
    );
  });
});

describe("Mixed Values Test", () => {
  test("Boolean, String and Number", () => {
    var test = true;
    expect(classNames(test ? "true" : "false", "string", 1)).toBe(
      "true string 1",
    );
  });
});
