import { ComponentFilter } from "../atoms/Filter";
import { ComponentSearch } from "../atoms/Search";

const SearchBar = () => {
    return (
        <div className="grid grid-cols-3 gap-5 mt-3">
            <div className="col-span-1 ml-10">
                <ComponentFilter />
            </div>
            <div className="col-span-1">
                <ComponentSearch />
            </div>
            <div className="col-span-1">
        
            </div>
        </div>
    );
};

export default SearchBar;
