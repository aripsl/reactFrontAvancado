import './App.css'; 
import { lazy, Suspense } from 'react';

//import Nav from './nav';
//import Home from './home';
//import Footer from './footer';

const Home = lazy( () => import('./home'));
const Footer = lazy( () => import('./footer'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <nav class="nav">
            <a class="nav-link active" href="#">FullStackEletro</a>
            <a class="nav-link" href="#">Produtos</a>
            <a class="nav-link" href="#">Lojas</a>
            <a class="nav-link disabled" href="#">Contato</a>
        </nav>


       <Suspense fallback={<p>Carregando...</p> }>
            <Home />    
       </Suspense>

       <Suspense fallback={<p>Carregando...</p> }>
            <Home />    
       </Suspense>

       <Suspense fallback={<p> Carregando...</p> }>
           <Footer />
       </Suspense>  

      </header>
    </div>
  );
}

export default App;
