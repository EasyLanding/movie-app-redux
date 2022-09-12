import { Component } from 'react';
import './SearchInput.css';
import UseDebounce from '../../hooks/hooks';

export default class SearchInput extends Component {
    state = {
        value: '',
    };

    onToggleInput = (e: any) => {
        const inputText = e.target.value;
        this.setState(() => {
            return {
                value: inputText,
            };
        });
    };

    render() {
        return (
            <div className='searchInput'>
                <span className="icon"><i className="fa fa-search"></i></span>
                <Input
                    text={this.state.value}
                    onToggleInput={this.onToggleInput}
                    searchMovie={this.props.searchMovie}
                />
            </div>
        )
    }
}
//{ text, onToggleInput, searchMovie }
function Input(props: any) {
    const debounced = UseDebounce(props.searchMovie, 700);
    return (
        <input
            type={'search'}
            className='searchInput-search'
            placeholder="Type to search..."
            value={props.text}
            onChange={(e) => {
                if (e.target.value.charAt(0) === ' ') {
                    e.target.value = '';
                }
                props.onToggleInput(e);
                debounced(e.target.value);
            }}
        />
    );
}