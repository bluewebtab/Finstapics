import  React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import axios from 'axios';

import 'tachyons';

    class App extends Component {

      state = {
        imgs: [],
        searchfield: ''
      }

      componentDidMount() {
        axios
            .get(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`)
            .then(data => {
                this.setState({ imgs: data.data });
            })
            .catch(err => {
                console.log('Error happened during fetching!', err);
            });
      }


      
      onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
      }

      render(){
        //destructured this.state object in order to use it's properties conveniently
        const {imgs, searchfield} = this.state;
        //filter function is used filter the names in order to find an item
        const filteredImages = imgs.filter(image => {
        return image.user.first_name.toLowerCase().includes(searchfield.toLowerCase())

        })
         if(!imgs.length)
         {
            return <h1>Loadig</h1>
         }else{
           return (
          <div>
            <h1 className="title">Finstapics</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
              <CardList data={filteredImages}/>
              </Scroll>
          </div>
           )
         
         }
         
        
        
      }
      
    
    }

    export default App;