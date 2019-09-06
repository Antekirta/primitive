import UIButton from "./ui-button";
import React from "react";
import { create } from "react-test-renderer";

describe("ui-button component", () => {
  test("Matches the shapshot", () => {
    const uiButton = create(<UIButton></UIButton>);

    expect(uiButton.toJSON()).toMatchSnapshot();
  });
});
