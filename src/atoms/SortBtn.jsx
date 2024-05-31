

import { Dropdown, DropdownItem } from "flowbite-react";

export function ComponentSort() {
  return (
    <div className="flex items-center gap-4 justify-center ">
       <label htmlFor="" className="mr-5 text-white font-bold text-xl">Sort :</label>
      <Dropdown label="Select" size="sm" className="bg-green-400">
        <DropdownItem  className=" font-bold">Most Popular</DropdownItem>
        <DropdownItem  className=" font-bold">Most Search</DropdownItem>
        <DropdownItem  className=" font-bold">Most Sold</DropdownItem>
      </Dropdown>
    </div>
  );
}
