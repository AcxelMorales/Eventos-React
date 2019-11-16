import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {

    token = 'ROUFBQIAS2OLLKIFB4XN';
    orden = 'date';

    state = {
        eventos: []
    }

    getEventos = async (busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.orden}&token=${this.token}&locale=es_ES`;

        const eventos = await axios.get(url);
        this.setState({
            eventos: eventos.data.events
        });
    }

    render() { 
        return (
            <EventosContext.Provider
                value={{
                    eventos: this.state.eventos,
                    getEventos: this.getEventos
                }}
            >
                {this.props.children}
            </EventosContext.Provider>
        );
    }

}
 
export default EventosProvider;