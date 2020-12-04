import React, { Component } from 'react';
import Header from './component/header';
import Category from './component/category';
import Footer from './component/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component{

  constructor(props){
    super(props);

    this.state={
        product:[]
    };
  }

  componentDidMount(){

    this.getData();

  }

  getData(){
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              
              

            console.log(json);

              this.setState({


                product:json.reduce((unique, o) => {
                if(!unique.some(obj => obj.category === o.category)) {
                  unique.push(o);
                }
                return unique;
            },[])
              
              
              
              });
            

            })
  }


  render(){
    
    return (

      
      <Router>
        <Header/>
        <div className="clearfix container-web relative">
          <div className=" container relative">
           <div className="row">
            <div className=" relative menu-slide col-lg-12 clear-padding">
             
              <div className=" menu-web relative">
                  <ul>



{this.state.product.map((element,index) => {

return <Category eventClick={this.datacategory} urut={element.id} category={element.category} key={index}/>

  })
}


                
                  </ul>

              </div>
            
              <div className=" slide-box-home slide-v2 relative">
                  <div className=" slide-home owl-carousel owl-theme">
                      <div className="item"><img src="img/banner_v2.png" alt="Banner Home V2"/></div>
                      <div className="item"><img src="img/banner_v2_2-min.png" alt="Banner Home V2"/></div>
                  </div>
              </div>
              <div className=" box-banner-small-v2 box-banner-small">
                  <div className="relative effect-layla zoom-image-hover">
                      <img src="img/banner_small_home_v2__1-min.png" alt=""/>
                      <a href="#"></a>
                  </div>
                  <div className="relative effect-layla zoom-image-hover">
                      <img src="img/banner_small_v2_1-min.png" alt=""/>
                      <a href="#"></a>
                  </div>
              </div>
          </div>
         
      </div>
  </div>
</div>
        <Footer/>
   
      </Router>
     );
  }


datacategory(){
  
}

}


export default App;
