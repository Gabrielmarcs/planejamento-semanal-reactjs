import {GrLinkedinOption} from "react-icons/gr";
import {SiGmail} from "react-icons/si"

function App() {
  return (
    <div className="container">
      <h1 className="title"> Planejamento Semanal</h1>

      <table border="0" width="100%" cellPadding="10">

        <tbody>
        
          <tr>
        
            <td width="50%" valign="top">
              <div className='days'> 
                
                <h2>Segunda-feira</h2>
                <div className="segundaInput">
                  <textarea cols="40" rows="5" placeholder="Fazer..." maxLength="525"></textarea>
                </div>

                <h2><br/>Terça-feira</h2>
                <div className="tercaInput">
                  <textarea cols="40" rows="5" placeholder="Fazer..." maxLength="525"></textarea>
                </div>

                <h2><br/>Quarta-feira</h2>
                <div className="quartaInput">
                  <textarea cols="40" rows="5" placeholder="Fazer..." maxLength="525"></textarea>
                </div>

                <h2><br/>Quinta-feira</h2>
                <div className="quintaInput">
                 <textarea cols="40" rows="5" placeholder="Fazer..." maxLength="525"></textarea>
                </div>

                <h2><br/>Sexta-feira</h2>
                <div className="sextaInput">
                  <textarea cols="40" rows="5" placeholder="Fazer..." maxLength="525"></textarea>
                </div>

                <h2><br/>Sábado</h2>
                <div className="sabadoInput">
                  <textarea cols="40" rows="5" placeholder="Fazer..." maxLength="525"></textarea>
                </div>

                <h2><br/>Domingo</h2>
                <div className="domingoInput">
                  <textarea cols="40" rows="5" placeholder="Fazer..." maxLength="525"></textarea>
                </div>
              </div>
            </td>  
            
            <td width="50%" valign="top">

              <div className='actions'>
                  <div className="data">
                    <h4><br/>Data 
                      <input type="date"/><br/>
                    </h4>
                  </div>

                  <div className="afazeres">
                    <h3><br/>Afazeres: <br/></h3>
                    <textarea cols="65" rows="15" placeholder="Fazer hoje..." maxLength="525"></textarea>
                  </div>

                  <div className="fazendo">
                    <h3><br/>Em desenvolvimento: <br/></h3>
                    <textarea cols="65" rows="15" placeholder="Fazendo..." maxLength="525"></textarea>
                  </div>

                  <div className="feito">
                  <h3><br/>Finalizado(s): <br/></h3>
                    <textarea cols="65" rows="15" placeholder="Finalizei..." maxLength="525"></textarea>
                  </div>
              </div>           
            </td>

          </tr>

        </tbody>
      </table>
      <br/>
      <br/>
    <footer>
      <p className="contact">
        <a className = "linkedin" href="https://www.linkedin.com/in/gabriel-marcos-8421471aa/">
          <GrLinkedinOption size={30} color="gainsboro"/>
        </a>

        <a className="mail" href="mailto:gabriel10svm7@gmail.com">
          <SiGmail size={30} color = "gainsboro"/>
        </a>

      </p>
      <p className="from">Desenvolvido por Gabriel Marcos Lopes </p>
    </footer>
    </div>

    
  );
}

export default App;
