import React, { Component } from 'react';

import { CategoriasConsumer } from '../providers/CategoriasContext';
import { EventosConsumer } from '../providers/EventosContext';

class Formulario extends Component {

    state = {
        nombre: '',
        categoria: ''
    }

    getDataEvent = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <EventosConsumer>
                {(value) => {
                    return(
                <form
                  onSubmit={e => {
                      e.preventDefault();
                      value.getEventos(this.state);
                  }}
                >
                    <fieldset className="uk-fieldset uk-margin">
                        <legend className="uk-legend uk-text-center">
                            Busca tu evento por nombre o categoría
                        </legend>
                    </fieldset>
                    <div className="uk-column-1-3@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input
                                type="text"
                                name="nombre"
                                className="uk-input"
                                placeholder="Nombre de Evento o Ciudad"
                                onChange={this.getDataEvent}
                            />
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <select
                                name="categoria"
                                className="uk-select"
                                onChange={this.getDataEvent}
                            >
                                <option value="">-- Seleccione Categoría --</option>
                                <CategoriasConsumer>
                                    {(value) => {
                                        return (
                                            value.categorias.map(cat => (
                                                <option
                                                    value={cat.id}
                                                    key={cat.id}
                                                    data-uk-form-select>
                                                    {cat.name_localized}
                                                </option>
                                            ))
                                        )
                                    }}
                                </CategoriasConsumer>
                            </select>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <input
                                type="submit"
                                className="uk-button uk-button-danger"
                                value="Buscar Eventos"/>
                        </div>
                    </div>
                </form>
                )
            }}
            </EventosConsumer>
        );
    }

}

export default Formulario;
