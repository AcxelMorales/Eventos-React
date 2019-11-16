import React from 'react';

import { EventosConsumer } from '../providers/EventosContext';

import Evento from './Evento';

const ListaEventos = () => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventosConsumer>
                {value => {
                    return value.eventos.map(evt => (
                        <Evento
                          evento={evt}
                          key={evt.id}
                        />
                    ))
                }}
            </EventosConsumer>
        </div>
    );
}
 
export default ListaEventos;
