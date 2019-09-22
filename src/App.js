import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Tabela from './Tabela';
import Formulario from './Formulario';
import Header from './Header';


class App extends Component {

  state = {
    usuarios: [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@gmail.com",
        "street": "Av. das Américas, 5500",
        "suite": "Apto 403",
        "city": "Rio de Janeiro",
        "zipcode": "12456-789",
        "phone": "(99)99999-9999"
        },
        {
          "id": 2,
          "name": "Leonardo Nunes",
          "email": "lnunesvalle@gmail.com",
          "street": "Av. das Américas, 8788",
          "suite": "Apto 409",
          "city": "Rio de Janeiro",
          "zipcode": "99999-999",
          "phone": "(99)99999-9999"
          }
    ],
  }

  removeAutor = index => {

    const { usuarios } = this.state;

    this.setState({
      usuarios: usuarios.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    })

  }
 
  atualizaUsuario = index => {

    const { usuarios } = this.state;

    document.getElementById("id").value = usuarios[index].id;
    document.getElementById("name").value = usuarios[index].name;
    document.getElementById("email").value = usuarios[index].email;
    document.getElementById("street").value = usuarios[index].street;
    document.getElementById("suite").value = usuarios[index].suite;
    document.getElementById("city").value = usuarios[index].city;
    document.getElementById("zipcode").value = usuarios[index].zipcode;
    document.getElementById("phone").value = usuarios[index].phone;
  }

  escutadorDeSubmit = autor => {
    this.setState({ usuarios: [...this.state.usuarios, autor] });
  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Usuários App</h1>
          <Tabela usuarios={this.state.usuarios} removeAutor={this.removeAutor} atualizaUsuario={this.atualizaUsuario} />
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;