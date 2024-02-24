import './App.css';
import Button from '@mui/material/Button';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='header-menu'>
          <h1 className='logo'>MR</h1>
            <ul className='list-itens'>
              <li className='nav-item'>
                <a href='#'>Sobre Mim</a>
              </li>
              <li className='nav-item'>
                <a href='#'>Projetos</a>
              </li>
              <li className='nav-item'>
                <a href='#'>Experiencia</a>
              </li>
              <li className='nav-item'>
               <a href='#'>Contato</a>
              </li>
            </ul>
        </nav> 
      </header>
      <body>
        <div>
          <input type='checkbox' className='checkbox' id='chk'/>

          <label className='label' for='chk'>

          </label>
        </div>
                    

        <script src='script.js'></script>

        


      </body>


      <div></div>
    </div>
  );
}

export default App;
