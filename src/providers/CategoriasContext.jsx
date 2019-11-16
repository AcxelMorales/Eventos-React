import React, { Component } from 'react';
import axios from 'axios';

// Crear el context
const CategoriasContext = React.createContext();

// Consumer
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

    token = 'ROUFBQIAS2OLLKIFB4XN';

    componentDidMount() {
        this.getCategorias();
    }

    getCategorias = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
        let categorias = await axios.get(url);
        
        this.setState({
            categorias: categorias.data.categories
        });
    };

    state = {
        categorias: []
    }

    render() {
        return (
            <CategoriasContext.Provider
                value={{
                    categorias: this.state.categorias
                }}
            >
                { this.props.children }
            </CategoriasContext.Provider>
        );
    }

}

export default CategoriasProvider;