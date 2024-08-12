import React from "react";


export default function Form(props) {  // КОМПОНЕНТ "Форма"
  
  const { labelSrc } = props;
  console.log(labelSrc);
  
  return (
    <form className="form">
      <img className="img_ya" src="Yandex.svg" alt=""/>
      <input className="input_ya" id = "srch" type="text" size="100"/>
      <button className="st">Найти</button>
    </form>
  );
};


