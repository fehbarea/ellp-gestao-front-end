import { useState } from "react";
import style from './InputPesquisa.module.css'

function InputPesquisa() {
  const [texto, setTexto] = useState('');

  return (
    <div className={style.InputPesquisa}>
      <input 
        type="text"
        placeholder="Pesquisar"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
    </div>
  );
}

export default InputPesquisa;