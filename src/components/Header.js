import React, {Component} from 'react';

class Header extends Component {
    // shouldComponentUpdate(nextProps, nextState){
    //     return false;
    // }
    render(){
       return (
        <div>
            <h1 className="title">Finstapics</h1>
        </div>
       )
    }
}

export default Header;