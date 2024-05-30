
"use client";

import { Dropdown } from "flowbite-react";

export function ComponentFilter() {
  return (
    <Dropdown label="Dropdown button" dismissOnClick={false} className="mt-52 ">
      <Dropdown.Item>Product_1</Dropdown.Item>
      <Dropdown.Item>Product_2</Dropdown.Item>
      <Dropdown.Item>Product_3</Dropdown.Item>
      <Dropdown.Item>Product_4</Dropdown.Item>
    </Dropdown>
  );
}
