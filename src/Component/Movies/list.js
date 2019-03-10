import React from 'react';
import MovieCard from './card';
import { FormControl, InputGroup } from 'react-bootstrap';

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            isChecked: false,
            inputValue: ''
        }
    }
    handleInputChange = (e) => {
        // const inputValue = e.target.value;
        // const checkValue = e.target.checked;
        let { isChecked, inputValue } = this.state;
        if (e.target.type === 'checkbox') {
            isChecked = e.target.checked;
        }
        else {
            inputValue = e.target.value;
        }
        const newData = this.props.data.filter(d => (d.Title.toLowerCase().includes(inputValue.toLowerCase()) && d.watched === isChecked));
        this.setState({ data: newData, isChecked: isChecked, inputValue: inputValue });
        console.log(this.state.query);
        console.log(this.state.filterData);
    }
    // handleCheck = (e) => {
    //     const checkValue = e.target.checked;
    //     console.log(checkValue);
    //     if (checkValue === true) {
    //         const newData = this.props.data.filter(d => (d.watched));
    //         this.setState({ data: newData });
    //     }
    //     else {
    //         this.setState({ data: this.props.data});
    //     }
    // }
    render() {
        // const { data } = this.props;
        return (
            <>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={this.handleInputChange} />
                <div>
                    <InputGroup.Checkbox aria-label="Checkbox" onChange={this.handleInputChange} />
                </div>
                {
                    this.state.data.map(m => <MovieCard key={m.imdbID} {...m} />)
                }
            </>
        )
    }
}
export default MoviesList;