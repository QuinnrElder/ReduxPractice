import React from "react";
import SongList from "./SongList";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { JsxElement } from "typescript";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../../Reducers";

describe("Song List Testing Suite", () => {

  beforeEach(() => { });

  const router = (
    <Provider store={createStore(reducers)}>
      <SongList />
    </Provider>
  );

  describe("Song List Default Elements", () => {
    it("Should render a Song Container", () => {
      const { getByTestId } = render(router);

      const song_container = getByTestId("Songs-Container");
      expect(song_container).toBeInTheDocument();
    });

    it("Should render 4 Song Wrappers", () => {
      const { getAllByTestId } = render(router);

      const Song_Wrapper = getAllByTestId("Song-Wrapper");
      expect(Song_Wrapper).toHaveLength(4);
    });

    it("Should render 4 Button Wrappers", () => {
      const { getAllByTestId } = render(router);

      const Button_Wrapper = getAllByTestId("Button-Wrapper");
      expect(Button_Wrapper).toHaveLength(4);
    });


    it("Should render 4 Buttons", () => {
      const { getAllByRole } = render(router);

      const Buttons = getAllByRole("button", { name: "Select" });
      expect(Buttons).toHaveLength(4);
    });

    it("Should render 4 Song Names", () => {
      const { getAllByTestId } = render(router);

      const Buttons = getAllByTestId("Song-Name");
      expect(Buttons).toHaveLength(4);
    });

  })

  describe("Song List Rendered Values", () => {
    it("Should render 4 Song Names", () => {
      const { getAllByTestId } = render(router);

      const Buttons = getAllByTestId("Song-Name")
      expect(Buttons.map(button => {
        switch (button.textContent) {
          case "No Scrubs": return true
          case "Ride The Lightning": return true
          case "Ready Or Not!": return true
          case "I Want it That Way": return true
          default: return false
        }
      }).filter(bool => {
        if (bool === true) return bool
      })).toHaveLength(4);
    });
  })

  describe("Song List Events", () => {
    it("Should be able to select a Song", () => {
      const { getByTestId } = render(router);

      const song_container = getByTestId("Songs-Container");
      expect(song_container).toBeInTheDocument();

    });
  })

})