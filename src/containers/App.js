import  React, { Component } from 'react';
import {connect} from 'react-redux'
import MainPage from '../components/MainPage';
import {setSearchField, requestImages} from '../actions';

   const mapStateToProps = (state) => {
     return {
       searchField: state.searchImages.searchField,
       images: state.requestImages.images,
       isPending: state.requestImages.isPending,
       error: state.requestImages.error
     }
   }

   const mapDispatchToProps = (dispatch) => {
     return{
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
      onRequestImages: () => dispatch(requestImages())
     }
   }

   
    class App extends Component {

      render(){
       return  <MainPage {...this.props}/>
      }
      
    }

    export default connect(mapStateToProps, mapDispatchToProps)(App);