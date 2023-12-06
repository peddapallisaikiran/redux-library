import React from 'react';
import { borrow_book } from '../Redux-library';
import { connect } from 'react-redux';
const BookContainer = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Library</h1>
      <br/>
      <h1>NumberofBooks {props.NumberofBooks}</h1>
    </div>
  )
}

//mapstoretoprops
const mapStoreToProps = (state)=>{
  return{
    NumberofBooks:state.NumberofBooks,
  }
}
//mapDispatchtoprops

const mapDispatchToProps=(dispatch)=>{
  return{
    borrow_book:()=>dispatch(borrow_book()),
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)
(BookContainer);
