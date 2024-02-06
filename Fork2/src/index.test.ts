import { toPositiveTemporal } from "./index";

describe("positiveTemporal", () => {
  test("months input", () => {
    // given
    const amount = "6";
    const unit = "M";
    const nonNegative = true;
    // when
    const result = toPositiveTemporal(amount, unit, nonNegative);
    // then
    expect(result).toStrictEqual({
      months: "6"
    });
  });
  test("months input 2", () => {
    // given
    const amount = "1";
    const unit = "M";
    const nonNegative = "nonNegative";
    // when
    const result = toPositiveTemporal(amount, unit, nonNegative);
    // then
    expect(result).toStrictEqual({
      months: "1"
    });
  });
  test("year input", () => {
    // given
    const amount = "1";
    const unit = "y";
    let nonNegative;
    // when
    const result = toPositiveTemporal(amount, unit, nonNegative);
    // then
    expect(result).toStrictEqual({
      years: "1"
    });
  });
  test("should return error when zero and nonNegative", () => {
    // given
    const amount = "0";
    const unit = "M";
    let nonNegative;
    // when
    const result = toPositiveTemporal(amount, unit, nonNegative);
    // then
    expect(result).toStrictEqual(
      "amount zero in toPositiveTemporal is invalid, unit: M"
    );
  });
  test("negative input but valid", () => {
    // given
    const amount = "0";
    const unit = "Year";
    const nonNegative = true;
    // when
    const result = toPositiveTemporal(amount, unit, nonNegative);
    // then
    expect(result).toStrictEqual({
      years: "0"
    });
  });
  test("day input", () => {
    // given
    const amount = "31";
    const unit = "day";
    let nonNegative;
    // when
    const result = toPositiveTemporal(amount, unit, nonNegative);
    // then
    expect(result).toStrictEqual({
      days: "31"
    });
  });
  test("m input", () => {
    // given
    const amount = "2";
    const unit = "m";
    const nonNegative = false;
    // when
    const result = toPositiveTemporal(amount, unit, nonNegative);
    // then
    expect(result).toStrictEqual({
      months: "2"
    });
  });
});
