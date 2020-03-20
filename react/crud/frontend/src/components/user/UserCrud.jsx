import React, { Component } from 'react';
import Main from '../template/Main';
headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

export default class UserCrud extends Component {
    render () {
        <Main {...headerProps}>
            Cadastro de Usuário
        </Main>
    }
}