import React from "react";
import "./styles.css";
//import { Component } from "react";

import { loadPosts } from "../../utils/load-posts";
import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

//import { TextInput } from "../../components/TextInput";
//CRIANDO COMPONENT DE CLASS.
//ESTADO são os dados utilizados pelo component.
//sempre que o estado for modificado, ele precisa ser renderizado novamente.
//A estrutura abaixo indica que App herda Components.
export class Home extends React.Component {
  //atribuindo state (estados)
  //props são objetos que são passadas como parâmetros.
  //construtor e props de App
  //constructor(props) {
  //herda props de component
  //super(props);
  //fazendo bind do evento.
  //this.handlePClick = this.handlePClick.bind(this);
  //this.handlePDBclick = this.handlePDBclick.bind(this);
  //adicionando props em app.
  //this.
  //o class field permite criar componentes sem construtor como abaixo.
  /*constructor(props){
    super(props);
    this.state = {
      name: "Rafael Caio",
      cargo: "Programador",
      counter: 0
    }
  }*/
  state = {
    /*name: "Rafael Caio",
    cargo: "Programador",
    counter: 0,*/
    //Usando um objeto em formato de array.
    //Utilizado também para busca de dados em APIs.
    //Vamos comentar o dados hardcode e buscar dados de uma API para o posts.
    posts: [
      /*{
        id: 1,
        title: "O título 1",
        body: "O corpo 1",
      },
      {
        id: 2,
        title: "O título 2",
        body: "O corpo 2",
      },
      {
        id: 3,
        title: "O título 3",
        body: "O corpo 3",
      },*/
    ],
    allPosts: [],
    //adicionados para paginação
    page: 0,
    postsPerPage: 4,
    //counter: 0,
    searchValue: "",
  };

  //permite ter acesso ao timeout a qualquer momento.
  //timeoutUpdate = null;

  //Quando o componente for montado na tela, eu quero que aconteça algo.
  //Para que isso aconteça utilizamos os Lifecycle methods.
  //Em methods padrões não usamos arrow function.
  //Quando for realizar uma request na APIs, posso fazer por aqui.
  //Vamos aplicar o Datafetching para buscar os dados de fora, através de uma API.
  //Mas colocaremos o fetch em outra função a loadPosts.
  async componentDidMount() {
    await this.loadPosts();
    //retorna uma promise(resposta) em seguida convertida em json.
    //.then((response) => response.json())
    //isso retorna outra promise
    //o setState esta presente, pois o state estava vazio e agora será preenchido.
    //.then(response => setState(post: response)) ou...
    //.then((posts) => this.setState({ posts }));

    //chamando o método criado para dentro do componente padrão.
    //this.handleTimeout();
  }

  //criando function para armazenar o fetch.
  //A lógica será armazenada em outra função, na pasta utils.
  loadPosts = async () => {
    //chamando os state para dentro da função.
    const { page, postsPerPage } = this.state;
    //esperando o post e photos do loadPost.
    const postsAndPhotos = await loadPosts();
    //setando o posts.
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage), //o valor de fim não é incluso.
      allPosts: postsAndPhotos,
    });
  };

  //Criando função para chamar novos posts
  //Não vai ser async, pois não vai buscar nada de uma API.
  loadMorePosts = () => {
    //chamando os states
    const { page, postsPerPage, allPosts, posts } = this.state;
    //determinando o nextPage
    const nextPage = page + postsPerPage;
    //determinando o próximo posts e fatiando, determinando inicio, fim
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    //enviando os nextPosts para dentro dos posts.
    //o spread(...) determina que todos os nextPosts estão espalhados no posts.
    //sem o spread retornaria um novo array a cada click.
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });

    //console.log(page, postsPerPage, nextPage, nextPage + postsPerPage);
  };

  //Outro Lifecycle methods.
  //Sempre que o componentDidMount for ativado, ocorre mudança no state.
  //Com esta mudança ocorre novamente o render()
  //Esta mudança é uma atualização que ativa o componentDidUpdate.
  //Mas a cada update(atualização) o reder() é executado novamente, repetindo o componentDidUpdate.
  //Criando assim um loop infinito.
  //Vemos esta mudança no counter, sendo somado + 1 a cada render().
  /*componentDidUpdate() {
    //this.handleTimeout();
  }

  //Outro Lifecycle methods.
  //Sempre que os componentes forem desmontados da página, limpamos o lixo(resíduo) deixado.
  componentWillUnmount() {
    //sempre que atualizar, limpar o timeout para não deixar resíduo.
    //clearTimeout(this.timeoutUpdate);
  }

  //Transferência do conteúdo do método padrão componentDidMount para outro método criado.
  //Por padrão no React iniciamos o nome do método como handle...
  //Podemos utilizar arrow function,pois não é um método padrão do react.
  handleTimeout = () => {
    const { posts, counter } = this.state;
    //indicando o índice do elemento que queremos mudar.
    posts[0].title = "o título mudou";
    //console.log("componentDidMount chamado");
    //função usada para esperar um pouco.
    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
      //console.log("Atualizando estado");
    }, 1000); //tempo de espera do timeout.
  };

  para chamar a variável name no evento, precisamos fazer
  um bind do evento dentro da class, mas utilizarmos a arrow function,
  não precisamos fazer o bind.
  handlePClick = () => {
    const { name, cargo } = this.state;
    para concatenar variáveis usa template string,
    como na tag<p></p> crase(`), Dollar($) e chaves {}.
    //console.log(`${name} ${cargo}`, "é isso aii! :)");
    //setState muda o estado(valor da variável).
    this.setState({ cargo: "Mestre em Programação" });
    console.log(name, cargo);
  };

  handlePDBclick = () => {
    const { name } = this.state;
    this.setState({ cargo: "Desenvolvedor" });
  };

  //USANDO ARROW FUNCTION NÃO  PRECISA FAZER BIND.
  //o event como parâmetro permiti fazer alterar ações DEFAULT por exemplo.
  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    //const nextCounter = counter + 1;
    this.setState({ counter: counter + 1 });
  };*/

  //método criado para aplicar ações ao digitar no campo.
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value });
  };

  //tem que ter o método render retornado jsx.
  render() {
    //const name = this.state.name;
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state; //o mesmo de acima, mas com destructuring

    //determina que se page for maior que a quant de posts, não tem mais posts.
    const noMorePosts = page + postsPerPage >= allPosts.length;

    //Aplicando filtragem para pesquisa de posts e operador ternário.
    //? é como o if ou = e : é como else ou !=.
    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          //converte o valo para diminutivo e inclui o searchValue no diminutivo.
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    //retorno jsx.
    //para colocar elementos javascript em jsx(html) ficam entre {}.
    return (
      <section className="container">
        <div className="search-container">
          {/*saber se o search esta vazio ou cheio. 
          As duas !! representa if.
          O título aparece caso o campo seja preenchido.*/}
          {!!searchValue && <h1>Search value: {searchValue}</h1>}
          <TextInput
            searchValue={searchValue}
            handleChange={this.handleChange}
          />
        </div>

        {/*Caso tenha posts*/}
        {filteredPosts.length > 0 && (
          <>
            {/*Passa o objeto post completo como uma única prop.*/}
            <Posts posts={filteredPosts} />
          </>
        )}
        {/*Caso não tenha posts*/}
        {filteredPosts.length === 0 && <p>Não existem posts!</p>}
        <div className="button-container">
          {/*Se não tiver busca o button aparece, com busca o button desaparece*/}
          {!searchValue && (
            <Button
              text="Load More Posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}

//export default Home;
/*    
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    /*aplicando diretamente o syntheticEvent usando o onClick, 
    mas vamos criar o método handlePClick e chamar este
    método no onClick. 
    <p onClick={this.handlePClick} onDoubleClick={this.handlePDBclick}>
      {`${name} ${cargo} ${counter}`}
    </p>
    <a
      onClick={this.handleAClick}
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      O LINK!
    </a>
  </header>
*/
