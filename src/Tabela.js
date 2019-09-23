import React, { Component } from 'react';


const TableHead = () => {
    return(
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Rua</th>
            <th>Compl</th>
            <th>Cidade</th>
            <th>CEP</th>
            <th>Telefone</th>
          </tr>
        </thead>
    );
}

const TableBody = props =>{
    
    const linhas = props.usuarios.map((linha, index)=> {
       return( 
       <tr  key={index}>
            <td class="id">{linha.id}</td>
            <td class="name">{linha.name}</td>
            <td class="email">{linha.email}</td>
            <td class="street" key={index}>{linha.street}</td>
            <td class="suite" key={index}>{linha.suite}</td>
            <td class="city" key={index}>{linha.city}</td>
            <td class="zipcode" key={index}>{linha.zipcode}</td>
            <td class="phone">{linha.phone}</td>
            <td><button onClick={ () => props.removeAutor(index)} className="waves-effect waves-light indigo lighten-2 btn">Remover</button></td>
            <td><button onClick={ () => props.atualizaUsuario(index)} className="waves-effect waves-light indigo lighten-2 btn">Editar</button></td>
        </tr>
       );
    });

    return(
        <tbody>
          {linhas}
        </tbody>
    );
}


class Tabela extends Component{
    

    render(){
        const { usuarios, removeAutor, atualizaUsuario} = this.props;
        
        return(
        <table className="centered highlight">
        <TableHead />
        <TableBody usuarios={usuarios} removeAutor = { removeAutor } atualizaUsuario = { atualizaUsuario } />
        </table>
        );
    }

}
export default Tabela;