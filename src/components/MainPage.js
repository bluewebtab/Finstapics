import  React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';


   
   
    class MainPage extends Component {

      

      componentDidMount() {
       this.props.onRequestImages();
       
      }

      filterImages = () => {
         //filter function is used filter the names in order to find an item
         return this.props.images.filter(image => {
          return image.user.first_name.toLowerCase().includes(this.props.searchField.toLowerCase())
        })
      }


      render(){
        const { onSearchChange, isPending} = this.props;

        return (
            <div>
              <Header />
              <SearchBox searchChange={onSearchChange}/>
              <Scroll>
           
                {isPending ? <h1>Loading</h1> : 
                    <ErrorBoundry>
                      <CardList data={this.filterImages()}/>
                    </ErrorBoundry>
                }
              </Scroll>
              
              </div>
              
         
         
         
        
             )
      
      }

    }

    export default MainPage;