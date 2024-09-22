//esta função não é construtora, não é componente e nem class...
//por isso se inicia com letra minúscula.
export const loadPosts = async () => {
  //usando o Fetch
  //url do json post do Placeholder API.
  const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts");
  const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");
  //esperando toda resposta usando o array postsResponse.
  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
  //esperando a conversão em json.
  const postsJson = await posts.json();
  const photosJson = await photos.json();

  //aplicando uma função ZIPPER, pois queri unir os arrays.
  //Dessa forma quero garantir que cada posts tenha uma photo.
  //Inicia o map pelo menor array no caso posts, de cada post queremos o índice(index).
  const postsAndPhotos = postsJson.map((post, index) => {
    //retorna spreed post e o cover da photo.
    //de cada index da foto quero sua url.
    return { ...post, cover: photosJson[index].url };
  });
  return postsAndPhotos;
};
