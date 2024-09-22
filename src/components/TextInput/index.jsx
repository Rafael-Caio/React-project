import "./styles.css";
export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      /*onChange é usado para captura alterações, em capos de entrada.
          Ele recebe uma função e como parâmetro o próprio evento "e".
          o target direciona a atenção para o campo do input e o value determina,
          que queremos o valor digitado. Como queremos determinar uma ação ao digitar,
          teremos que colocar esta função aplicada ao onChange, dentro de um método,
          no caso handleChange*/
      className="text-input"
      type="search"
      value={searchValue}
      onChange={handleChange}
      placeholder="Type your search"
    />
  );
};
