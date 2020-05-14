import  React, { Component } from 'react';
import {connect} from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';

import {setSearchField, requestImages} from '../actions';

   const mapStateToProps = state => {
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

      

      componentDidMount() {
       this.props.onRequestImages();
      }

     
     
      
      

      render(){
        const { onSearchChange,images, searchField, isPending} = this.props;
         console.log(images)
        
          //filter function is used filter the names in order to find an item
         const filteredImages = images.filter(image => {
          return image.user.first_name.toLowerCase().includes(searchField.toLowerCase())
          
          })
        
        
         if(isPending)
         {
            return <h1>Loading</h1>
           
         }else{
           return (
          <div>
              <Header />
              <SearchBox searchChange={onSearchChange}/>
              <Scroll>
              <ErrorBoundry>
                <CardList data={filteredImages}/>
              </ErrorBoundry>
              </Scroll>
          </div>
           )
         
         }
         
        
        
      }
      

    }

    export default connect(mapStateToProps, mapDispatchToProps)(App);