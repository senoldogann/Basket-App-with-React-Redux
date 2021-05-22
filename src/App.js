import React, { useState } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { eklemeIslemi,ısaretlemeIslemi ,temizlemeIslemi} from './actions';
const App = (props) => {

  // * Local state oluşturma
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input placeholer="listeye ekle" value={text} onChange={e => setText(e.target.value)} />
        <button onClick={() => {
          setText("");
          props.eklemeIslemi(text)}}>Ekle</button>
      </div>
      <div className="liste">
        {props.liste.map(item => (
          <div onClick={() => props.ısaretlemeIslemi(item.id)} key={item.id} className={item.tamamlandi ? "yapildi" : ""}>{item.baslik}</div>
        ))}
      </div>
      <button onClick={() => props.temizlemeIslemi()}  className="temizle">Tamamlananları Temizle</button>
    </div>
  );
}

const mapStateToProps = state =>{
  return{
    liste:state.liste
  }
}

export default connect(mapStateToProps,{eklemeIslemi,ısaretlemeIslemi ,temizlemeIslemi})(App);