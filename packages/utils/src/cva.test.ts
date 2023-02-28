import { describe, expect, test } from "@jest/globals";
import { cartesianProduct, applyStyleToMultipleVariants } from "./cva";

const className = "className";

//Tests for applyStleTOMultipleVarients()
describe("Test for Single object", () => {
  test("Passing a Single object", () => {
    const response = expect(
      applyStyleToMultipleVariants({
        variant: ["solid", "outline"],
        className: className,
      }),
    );
    response.toHaveLength(2);
    response.toEqual([
      {
        className: className,
        variant: "solid",
      },
      { className: className, variant: "outline" },
    ]);
  });
});

describe("Test for two objects", () => {
  test("Passing two  objects", () => {
    const res = expect(
      applyStyleToMultipleVariants({
        variant: ["solid", "outline"],
        size: ["small", "medium"],
        className: className,
      }),
    );
    res.toHaveLength(4);
    res.toEqual([
      {
        className: className,
        variant: "solid",
        size: "small",
      },
      {
        className: className,
        variant: "solid",
        size: "medium",
      },
      {
        className: className,
        variant: "outline",
        size: "small",
      },
      {
        className: className,
        variant: "outline",
        size: "medium",
      },
    ]);
  });
});

describe("Test for n objects", () => {
  test("Passing threee objects", () => {
    const res = expect(
      applyStyleToMultipleVariants({
        variant: ["solid", "outline"],
        size: ["small", "medium"],
        color: ["red", "blue"],
        className: className,
      }),
    );
    res.toHaveLength(8);
    res.toEqual([
      {
        className: className,
        variant: "solid",
        size: "small",
        color: "red",
      },
      {
        className: className,
        variant: "solid",
        size: "small",
        color: "blue",
      },
      {
        className: className,
        variant: "solid",
        size: "medium",
        color: "red",
      },
      {
        className: className,
        variant: "solid",
        size: "medium",
        color: "blue",
      },
      {
        className: className,
        variant: "outline",
        size: "small",
        color: "red",
      },
      {
        className: className,
        variant: "outline",
        size: "small",
        color: "blue",
      },
      {
        className: className,
        variant: "outline",
        size: "medium",
        color: "red",
      },
      {
        className: className,
        variant: "outline",
        size: "medium",
        color: "blue",
      },
    ]);
  });
});

describe("Test for n Objects", () => {
  test("Passing Mixed valued Objects Number, Boolean and String", () => {
    const res = expect(
      applyStyleToMultipleVariants({
        className: className,
        number: [1, 2],
        boolean: [true, false],
        size: ["small", "medium"],
      }),
    );
    res.toHaveLength(8);
    res.toEqual([
      {
        className: className,
        number: 1,
        boolean: true,
        size: "small",
      },
      {
        className: className,
        number: 1,
        boolean: true,
        size: "medium",
      },
      {
        className: className,
        number: 1,
        boolean: false,
        size: "small",
      },
      {
        className: className,
        number: 1,
        boolean: false,
        size: "medium",
      },
      {
        className: className,
        number: 2,
        boolean: true,
        size: "small",
      },
      {
        className: className,
        number: 2,
        boolean: true,
        size: "medium",
      },
      {
        className: className,
        number: 2,
        boolean: false,
        size: "small",
      },
      {
        className: className,
        number: 2,
        boolean: false,
        size: "medium",
      },
    ]);
  });
});

//Tests fot cartesianProduct()
describe("Test for Single Array", () => {
  test("Passing a Single Array", () => {
    const res = expect(cartesianProduct([["a", "b"]]));
    res.toHaveLength(2);
    res.toEqual([["a"], ["b"]]);
  });
});

describe("Test for two Arrays", () => {
  test("Passing a two Arrays", () => {
    const res = expect(
      cartesianProduct([
        ["a", "b"],
        ["c", "d"],
      ]),
    );
    res.toHaveLength(4);
    res.toEqual([
      ["a", "c"],
      ["a", "d"],
      ["b", "c"],
      ["b", "d"],
    ]);
  });
});

describe("Test for n Arrays", () => {
  test("Passing a three Arrays", () => {
    const res = expect(
      cartesianProduct([
        ["a", "b"],
        ["c", "d"],
        ["e", "f"],
      ]),
    );
    res.toHaveLength(8);
    res.toEqual([
      ["a", "c", "e"],
      ["a", "c", "f"],
      ["a", "d", "e"],
      ["a", "d", "f"],
      ["b", "c", "e"],
      ["b", "c", "f"],
      ["b", "d", "e"],
      ["b", "d", "f"],
    ]);
  });
});

describe("Test for Mixed Type Values", () => {
  test("Passing Mixed Values", () => {
    const res = expect(cartesianProduct([[1, "a", true]]));
    res.toHaveLength(3);
    res.toEqual([[1], ["a"], [true]]);
  });
});
