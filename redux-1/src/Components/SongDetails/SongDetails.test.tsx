import React from "react";
import SongDetails from "./SongDetails";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../../Reducers";

describe("Song List Testing Suite", () => {

  beforeEach(() => { });

  const router = (
    <Provider store={createStore(reducers)}>
      <SongDetails />
    </Provider>
  );

  describe("Song List Default Elements", () => {
    it("Should render a Default Message", () => {
      const { getByTestId } = render(router);

      const Default_Message = getByTestId("Default-Message");
      expect(Default_Message).toBeInTheDocument();
    });
  })
})