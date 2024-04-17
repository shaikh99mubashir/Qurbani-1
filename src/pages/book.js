import React, { useState } from 'react'
import '../App.css';
import Header from '../components/header';
import Footer from '../components/footer';
import Tabs from '../components/tabs';
import Tab_1 from '../components/tab_1';
import Tab_2 from '../components/tab_2';
import Tab_3 from '../components/tab_3';

const Book = () => {

    const [myBool, setmyBool] = useState(1);
    let component;
    let activate = false;
    let activate2 = false;
    let activate3 = false;
    function toggleBool() {
      setmyBool(2)
    }
    function toggleBool2() {
      setmyBool(3)
    }
    if(myBool == 1){
      component =  <Tab_1 toggleBool={toggleBool} />;
      activate = true;
    }else if(myBool == 2){
      component =  <Tab_2 toggleBool2={toggleBool2}/>;
      activate2 = true;
    }else if(myBool == 3){
      component =  <Tab_3 />;
      activate3 = true;
    }
  
  


  return (
    <>
      <Header />
      <main className="book">
        <div className="container breadcrumb">
          <div className="container">
            <p><a href="">Home</a> / Create Order</p>
          </div>
        </div>
        <div className="create_order">
          <h3 style={{ textAlign: "center" }}>Book your Qurbani using <span>simple steps.</span></h3>
        </div>
        <Tabs activate={[activate,activate2,activate3]}/>
        {component}
      </main>
      <Footer />
    </>
  )
}

export default Book