import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      mensagem: ''
    };
  }

  login = (e) => {
    e.preventDefault();
    const { email, senha } = this.state;
    if (email === 'eduardo.lino@pucpr.br' && senha === '123456') {
      this.setState({ mensagem: 'Acessado com sucesso!' });
    } else {
      this.setState({ mensagem: 'Usuário ou senha incorretos!' });
    }
  };

  render() {
    const { email, senha, mensagem } = this.state;
    return (
      <div className='App'>
        <div className='form-container'>
          <form onSubmit={this.login}>
            <h1 className='login'>LOGIN</h1>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <div>
              <label>Senha:</label>
              <input
                type="senha"
                value={senha}
                onChange={(e) => this.setState({ senha: e.target.value })}
              />
            </div>
            <div className='mensagem'>{mensagem}</div>
            <button type="submit" className='btn-login'>Acessar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
