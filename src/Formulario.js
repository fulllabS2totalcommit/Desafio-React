import React, { Component } from 'react';
import FormValidator from './FormValidator';
import PopUp from './PopUp';

class Formulario extends Component {

    constructor(props) {
        super(props);

            this.validador = new FormValidator([
            {
              campo: 'name',
              metodo: 'isEmpty',
              validoQuando: false,
              mensagem: 'Entre com um nome'
            },
            {
                campo: 'email',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um e-mail valido'
              },
            {
                campo: 'id',
                metodo: 'isInt',
                args: [{min: 0, max: 9999}],
                validoQuando: true,
                mensagem: 'Entre com um Id'
              }
          ]);

          this.stateInicial = {
            id: '',
            name: '',
            email: '',
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            phone: '',
            validacao: this.validador.valido()
        }

        this.state = this.stateInicial;
    }

    submitFormulario = () => {
        const validacao = this.validador.valida(this.state);
        if(validacao.isValid){
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        }else {
            const { id, name, email} = validacao;
            const campos = [id, name, email];
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid
            });
            camposInvalidos.forEach(campo => {
                
                PopUp.exibeMensagem('error', campo.message);
            });
        }
        
        

    }


    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }


    render() {
        const { id, name, email, street, suite, city, zipcode, phone } = this.state;
        return (
            <form id="formUsuario">
                <div className="row">
                <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Id</label>
                        <input
                            className="validate"
                            id="id"
                            type="text"
                            name="id"
                            value={id}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input
                            className="validate"
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">E-mail</label>
                        <input
                            className="validate"
                            id="email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.escutadorDeInput} />

                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Rua</label>
                        <input
                            className="validate"
                            id="street"
                            type="text"
                            name="street"
                            value={street}
                            onChange={this.escutadorDeInput} />

                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Compl</label>
                        <input
                            className="validate"
                            id="suite"
                            type="text"
                            name="suite"
                            value={suite}
                            onChange={this.escutadorDeInput} />

                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Cidade</label>
                        <input
                            className="validate"
                            id="city"
                            type="text"
                            name="city"
                            value={city}
                            onChange={this.escutadorDeInput} />

                    </div>
                    <div className="input-field col s4">
                        <label className="input-field col s4" htmlFor="preco">CEP</label>
                        <input
                            className="validate"
                            id="zipcode"
                            type="text"
                            name="zipcode"
                            value={zipcode}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field col s4" htmlFor="preco">Telefone</label>
                        <input
                            className="validate"
                            id="phone"
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={this.escutadorDeInput} />
                    </div>
                </div>

                <button onClick={this.submitFormulario} className="btn waves-effect waves-light indigo lighten-2" type="button">Salvar
                </button>
            </form>
        );
    }
}
export default Formulario
