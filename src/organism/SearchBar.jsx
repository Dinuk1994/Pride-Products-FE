import { ComponentFilter } from "../atoms/Filter";
import { ComponentSearch } from "../atoms/Search";
import { ComponentSort } from "../atoms/SortBtn";

const SearchBar = () => {
    return (
        <div className="grid grid-cols-3 gap-5 mt-3 mobile:grid-cols-1">
            <div className="col-span-1 mt-2 mobile:justify-center">
                <ComponentFilter />
            </div>
            <div className="col-span-1">
                <ComponentSearch />
            </div>
            <div className="col-span-1 mt-2">
                <ComponentSort/>
            </div>
        </div>
    );
};

export default SearchBar;
