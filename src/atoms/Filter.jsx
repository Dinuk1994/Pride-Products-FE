
import { Dropdown, DropdownItem } from "flowbite-react";

export function ComponentFilter() {
  return (
    <div className="flex items-center gap-4 justify-center ">
       <label htmlFor="" className="mr-5  text-white font-bold text-xl">Filter :</label>
      <Dropdown label="Select" size="sm" className="bg-green-400">
        <DropdownItem className=" font-bold">Tea</DropdownItem>
        <DropdownItem className=" font-bold">Spices</DropdownItem>
      </Dropdown>
    </div>
  );
}