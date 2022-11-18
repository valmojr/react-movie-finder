import { useState } from "react";
import { Link } from "react-router-dom";
import { SearcherButton, SearcherForm, SearcherInput } from "./Searcher.style";

const Searcher = () => {
    const [searchQuery, setSearchQuery] = useState('');

    
    return (
        <SearcherForm>
            <SearcherInput onChange={event =>{
                setSearchQuery(event.target.value);
            }}></SearcherInput>
            <Link to={'/MovieList/'+searchQuery}>
            <SearcherButton>SEARCH</SearcherButton>
            </Link>
        </SearcherForm>
    );
}

export default Searcher;