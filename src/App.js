import React from "react";
import "./App.css";
import BookCart from "./components/book-cart/BookCart";
import NavBar from "./components/nav-bar/NavBar";
import Search from "./components/search-bar/Search";
import { connect } from "react-redux";

function App({ openedBookInfo }) {//nuyna vor grenq props
// let { openedBookInfo } = props  //stex nor destructuring anenq
  console.log(openedBookInfo);

  return (
    <div className="App">
      <div className="top">
        <NavBar />
        <BookCart />
        <Search />
      </div>
    </div>
  );
}
export default connect(({ openedBookInfo }) => ({ openedBookInfo }))(App);
//ete chhaskacar incha grac coonect-i mej karda =D 

//------------------------------------------------//
//karanq senc grenq
// let mapStateToProps = (state) => {
//   return { openedBookInfo: state.openedBookInfo };
// }
//------------------------------------------------//

//------------------------------------------------//
//karanq aveli karch
// let mapStateToProps = ({openedBookInfo}) => {
//karanq miangamic destructuring anenq inche vor mez petqa
// return { openedBookInfo : openedBookInfo };
//sael es6-e toxuma vor krchat grenq ete erku koxmum el nuyn anunna
//(return { openedBookInfo }) lriv nuynna return ({ openedBookInfo : openedBookInfo })
// }
//------------------------------------------------//

//------------------------------------------------//
//karanq aveli karch =)
//let mapStateToProps = ({openedBookInfo}) => ({openedBookInfo})
//qani vor mi toxa karanq chdnenq zevavor pakagcer@ u return bar@ u miangamic
//grenq mer uzac@ u inq@ return kani
//({ openedBookInfo }) => openedBookInfo --->   chi ashxati vortev connect@ objecta uzum partadir
//({ openedBookInfo }) => {openedBookInfo} ---> eli chi ashxati vortev JS '{}' haskanuma
//                                              voch te object ayl funkciayi marmin u error kta
//({ openedBookInfo }) => ({openedBookInfo})---> isk hima  "=> ()" senca tesnum u kashxati

//------------------------------------------------//
//ete mez object petq chliner ayl orinak array karaynq greynq senc  ([array]) => array
//------------------------------------------------//

// connect(mapStateToProps)(App)
// connect(({ openedBookInfo }) => ({ openedBookInfo }))(App)
//sael nuynna vor mapStateToProps popoxakani
//mej chgrenq  funkcian ayl henc connecti mej ete karcha u harmar

