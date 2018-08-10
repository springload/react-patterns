import React from "react";
import Patterns from "../src/index";
import renderer from "react-test-renderer";

it("renders correctly", async () => {
  // FIXME. CSS isn't working.
  global.document = {
    styleSheets: [
      {
        rules: ["b", "c"]
      }
    ]
  };

  const PatternBook = (
    <Patterns>
      <h1>test</h1>
    </Patterns>
  );

  const createNodeMock = elem => {
    return {
      innerHTML: "<h1>test</h1>",
      childNodes: ["a", "b"]
    };
  };
  const tree = renderer.create(PatternBook, { createNodeMock });

  const instance = tree.getInstance();
  // console.log(tree.toJSON().children[3].props.onClick());
  // console.log(tree.toJSON().children[4].props.onClick());

  const htmlButton = tree.toJSON().children[2].props;
  htmlButton.onClick();
  const cssButton = tree.toJSON().children[3].props;
  cssButton.onClick();
  // tree.props.onClick();

  expect(tree.toJSON()).toMatchSnapshot();
});
