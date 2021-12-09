import React from "react";
import SongList from "./SongList";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { JsxElement } from "typescript";


describe("Song List Testing Suite", () => {

  let component: JSX.Element

  beforeEach(() => {
    component = <SongList />
  });

  describe("Song List Default Elements", () => {
    it("Should render a Song Container", () => {
      const { getByText, getByRole } = render(component);

      // const formHeader = getByText("Check Room Availability");
      // const filter = getByText("Filter By Room-Type");
      // const submit = getByRole("button");
      // expect(formHeader).toBeInTheDocument();
      // expect(filter).toBeInTheDocument();
      // expect(submit).toBeInTheDocument();
    });

  })
})