import "./styles.css";
import { PostCard } from "../PostCard";
//como não tem lógica, podemos trocar as {} por ().
export const Posts = ({ posts }) => (
  <div className="posts">
    {/*<h1>{counter}</h1>*/}
    {/*O método map percorre o array e cria outro array aplicando uma função,
        que colocamos dentro do map.
        Para retornar vários elementos, colocamos os () após a seta e dentro dele,
        colocamos a o root e os elementos que queremos retornar.*/}
    {posts.map((post) => (
      <PostCard
        //key identificador único para o react rastrear mudanças no elemento.
        //A key é usado sempre que utilizar o map e colocado diretamente no elemnto que...
        //interagi com o map.
        key={post.id}
        //Passa o objeto post completo como uma única prop.
        //post={post}
        //podemos passar os atributos de vez.
        //post={post} neste caso temos que abrir o obj post para ver os dados.
        //Podemos passar um atributo por vez.
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    ))}
  </div>
);
