import React, { Component } from 'react';



class Category extends Component {


    
    render(){
        return (
                      <li id={this.props.urut}><a href="#" onClick={e=>{this.props.eventClick(this.props.urut,this.props.category)}}><img src="img/icon_fashion.png" alt="Icon Fashion" /> <p>{this.props.category}</p></a></li>
                  
        );
    }

}

export default Category;