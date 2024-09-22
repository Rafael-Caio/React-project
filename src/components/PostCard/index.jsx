import "./styles.css";
export const PostCard = ({ title, body, id, cover }) => (
  //Pegando a variável post.
  //forma 1: const post = props.post
  //forma 2: const { post } = props;
  //forma 3: export const PostCard = ({ post }) => {}
  //forma 4: export const PostCard = ({title, body, id, cover}) => {}
  /*da forma 4 teria que tirara o nome post das tags.*/
  /*Forma 5 é que estamos utilizando. trocamos as {} por () e tiramos o return.
  como na forma 4 tiramos o nome post das tags:
  antes: {post.title} depois {title}.*/

  <div className="post">
    {/*adicionando o elemento cover, para inserir as imagens.*/}
    <img src={cover} alt={title} />
    {/*key indica um identificador único.
      Sempre que usar o map, coloque o key no primeiro elemento.
      O key deve ser atribuído ao elemento que interagi diretamente com o map.
      por isso a key foi transferida para o PostCard do App.js.*/}
    <div className="post-content">
      <h2>
        {title} {id}
      </h2>
      <p>{body}</p>
    </div>
  </div>
);
