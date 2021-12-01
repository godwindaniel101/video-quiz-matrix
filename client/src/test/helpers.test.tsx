import {
  timeStampToDate,
  timeStampToFullDate,
  toBtc,
} from "../utils/helpers";

describe("Test Functionallity of helpers used in the application", () => {

  it("expects to return 2019-03-45", () => {
    expect(timeStampToDate(1635096541.024)).toEqual("2021-10-24");
  });

  it("expects to return October 24 , 2021 at 6:29 PM", () => {
    expect(timeStampToFullDate(1635096541.024)).toEqual("October 24 , 2021 at 6:29 PM");
  });

  it("expects to return 12345.342", () => {
    expect(toBtc(12345342)).toEqual("12.345");
  });
});
