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
       <tr key={index}>
            <td>{linha.id}</td>
            <td>{linha.name}</td>
            <td>{linha.email}</td>
            <td key={index}>{linha.street}</td>
            <td key={index}>{linha.suite}</td>
            <td key={index}>{linha.city}</td>
            <td key={index}>{linha.zipcode}</td>
            <td>{linha.phone}</td>
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