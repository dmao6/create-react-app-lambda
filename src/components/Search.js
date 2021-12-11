import React from "react";

import { SearchInput } from 'evergreen-ui';

export default function Search({ query, onChange }) {
    return (
     <SearchInput placeholder="Enter ticket number, for example: 1637524170275"
       width="80%"
       autoFocus
       value={query} 
       onChange={onChange}
     />
    );
}