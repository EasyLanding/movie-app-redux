import { useState } from 'react';
import './SearchInput.css';
import UseDebounce from '../../hooks/hooks';

const SearchInput = (props: any) => {
    const [value, setValue] = useState('')
    const debounced = UseDebounce(props.searchMovie, 700);
    const onToggleInput = (e: any) => {
        const inputText = e.target.value;
        setValue(inputText)
    };
    return (
        <div className='searchInput'>
            <span className="icon"><i className="fa fa-search"></i></span>
            <input
                type={'search'}
                className='searchInput-search'
                placeholder="Type to search..."
                value={value}
                onChange={(e: any) => {
                    if (e.target.value.charAt(0) === ' ') {
                        e.target.value = '';
                    }
                    onToggleInput(e);
                    debounced(e.target.value);
                }}
            />
        </div>
    );
}
export default SearchInput