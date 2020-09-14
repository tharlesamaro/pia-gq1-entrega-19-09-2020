import React, { Component } from 'react';

import axios from 'axios';

export class ListaEscolas extends Component {

    constructor(props) {
        super(props);
        this.state = { escolas: [] }
    }

    componentDidMount() {
        axios
            .get('http://localhost:3001/escolas/')
            .then(resposta => this.setState({ escolas: resposta.data }))
            .catch(erro => console.log(erro))
    }

    render() {
        return (
            <div>
                <h1>Escolas</h1>

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CNPJ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.escolas.map((x) => <tr><td scope="row">
                            <a href={`/escolas/${x.id}`}>{x.id}</a></td>
                            <td>{x.nome}</td>
                            <td>{x.cnpj}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
};

export default ListaEscolas;