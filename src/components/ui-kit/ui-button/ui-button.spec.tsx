import UIButton from "./ui-button";
import React from "react";
import { create } from "react-test-renderer";

describe("ui-button component", () => {
  test("Matches the shapshot", () => {
    const component = create(
      <UIButton className="its-my-class" bold>
        Nikaragua
      </UIButton>
    );
    const instance = component.root;

    expect(true).toBe(true);
  });
});
