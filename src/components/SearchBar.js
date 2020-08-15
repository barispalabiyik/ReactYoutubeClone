import React from "react";

import { TextField } from "@material-ui/core"

class SearchBar extends React.Component {

    state = {
        searchTerm: "",
    }

    handleChange = (event) => this.setState({ searchTerm: event.target.value })
    

    handleSubmit = (event) => {

        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit (searchTerm);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <TextField
                    onChange={this.handleChange}
                    id="outlined-full-width"
                    label="Arama Yap"
                    style={{}}
                    placeholder="Video İsmi"
                    helperText="Tıkla ve Yaz!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </form>




        )


    }
}

export default SearchBar;