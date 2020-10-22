import React, { Component } from 'react';
import api from './api';



class App extends Component{
  state = {
    arquivos: [],
  }
  async componentDidMount(){
    const response = await api.get('/clientes');

    //console.log(response.data);

    this.setState({arquivos: response.data});
  }

  render (){
    const {arquivos} = this.state;
      return(

        <table>
          <thead>
            <tr>
              <th class="col-md-auto">ID</th>
              <th class="col-md-auto">Banco</th>
              <th class="col-md-auto">Tipo</th>
              <th class="col-md-auto">Arquivo</th>
              <th class="col-md-auto">Data Geração</th>
              <th class="col-md-auto">Gerado Por</th>
              <th class="col-md-auto">Data Envio</th>
              <th class="col-md-auto">QTD Linhas</th>
              <th class="col-md-auto">Carteira</th>
              <th class="col-md-auto">Valor Total</th>
              <th class="col-md-auto">TXT</th>
            </tr>
          </thead>
          {arquivos.map(arq =>
            <tbody class="border-dark">
              <tr>
                  <th class="col-md-auto">{arq.id}</th>
                  <th>{arq.banco}</th> 
                  <th class="col-md-auto">{arq.tipo}</th>
                  <th>{arq.arquivo}</th>
                  <th class="col-md-auto">{arq.dt_geracao}</th>
                  <th class="col-md-auto">{arq.ger_por}</th>
                  <th>{arq.dt_envio}</th>
                  <th class="col-md-auto">{arq.qtd_linhas}</th>
                  <th class="col-md-auto">{arq.carteira}</th>
                  <th class="col-md-auto">{arq.vl_total}</th>
                  <th>{arq.txt}</th>         
                </tr>
              </tbody>
          )}
        </table>
      
    )
    
  }
}

export default App;
