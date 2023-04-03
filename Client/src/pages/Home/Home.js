import React, { useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import"./home.scss";
import { useSelector } from "react-redux";
import { Button, Col, Form, Row } from "react-bootstrap";
import Picker from 'emoji-picker-react';
import {ReactEmojiEditor} from 'react-emotor';




function Home() {
  const user = useSelector((state) => state.user);
   

  const emotor = useRef();

  function contentOnChange(content)
  {
    console.log(content);
  }

  function myClean()
  {
    console.log("clean");
    emotor.current.onFocus();
  }
    return (
      <div className="content">
        <div className="row">
        <div className="col-4">
        <div className="lb">
        {user &&(<div className="photoFrame"> 
        <img src={user.picture} style={{ width: 80, height: 80, marginRight: 10, objectFit: "cover", borderRadius: "50%" }} /> <div>{user.name}</div>
        </div>)} 
           
            
            <ReactEmojiEditor className="chatbox" ref={emotor} defaultValue="default" onChange={content=>contentOnChange(content)}/>
            <div className="icons">
              <span><i class="bi bi-image"></i></span>
              <span><i class="bi bi-camera-video"></i></span>
              <span><i class="bi bi-geo-alt"></i></span>
              <span><i class="bi bi-cloud-upload"></i></span>
              <span><i class="bi bi-emoji-smile"></i></span></div>

              <div className="inputBtn">
                 <input class="btn btn-secondary " id="postBtn" type="submit" value="Post"></input>
                 </div> 
                 </div>
                <div className="lb2">
                  <div>Layers</div>





                  <div className="layerBox"><p>Layer Category</p></div>
                  <div className="layerBox"><p>Layer Category</p></div>
                  <div className="layerBox"><p>Layer Category</p></div>
                  <div className="layerBox"><p>Layer Category</p></div>
                  <div className="layerBox"><p>Layer Category</p></div>
                  <div className="layerBox"><p>Layer Category</p></div>
                 </div>                        
        </div>
        <div className="col-8">
           <div className="rb">
           <nav class="nav nav-pills flex-column flex-sm-row">
            <a class="flex-sm-fill text-sm-center nav-link" aria-current="page" href="#">For You</a>
            <a class="flex-sm-fill text-sm-center nav-link" href="#">Following</a></nav>
           </div>

           <div className="rcard"> 
           <div class="row g-0">
           <div class="col-md-7">
             <img src={require('./image-placeholder.jpg')} class="img-fluid rounded-start" style={{ height:350, borderRadius: "5%"}} alt="IMAGE"/>
             </div>
             <div class="col-md-5">
             <div class="card-body">
             <div className="userInfo">
                    <div className="avatar">
                      <img src={require('./avatar.png')} style={{ width: 60, height: 60, marginRight: 10, objectFit: "cover", borderRadius: "50%"}} />
                       </div>
                       <div className="userdescrip">
                        <div><b>User Name</b></div>
                        <div>User Description</div></div>
             </div>

             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">#posttag #posttag</small></p>
              <div className="icons">
                <span><i class="bi bi-heart"></i></span>
                <span><i class="bi bi-send"></i></span>
                <span><i class="bi bi-box-arrow-up-right"></i></span>
                </div>

                <div class="input-group mb-3">
                   <input type="text" class="form-control" placeholder="Add a Comment" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                   <button class="btn" type="button" id="button-addon2"><i class="bi bi-chat"/></button></div>    
             </div>
             </div>
           </div>
           </div>
        

           <div className="rcard"> 
           <div class="row g-0">
           <div class="col-md-7">
             <img src={require('./image-placeholder.jpg')} class="img-fluid rounded-start" style={{ height:350, borderRadius: "5%"}} alt="IMAGE"/>
             </div>
             <div class="col-md-5">
             <div class="card-body">
             <div className="userInfo">
                    <div className="avatar">
                      <img src={require('./avatar.png')} style={{ width: 60, height: 60, marginRight: 10, objectFit: "cover", borderRadius: "50%"}} />
                       </div>
                       <div className="userdescrip">
                        <div><b>User Name</b></div>
                        <div>User Description</div></div>
             </div>

             <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">#posttag #posttag</small></p>
              <div className="icons">
                <span><i class="bi bi-heart"></i></span>
                <span><i class="bi bi-send"></i></span>
                <span><i class="bi bi-box-arrow-up-right"></i></span>
                </div>

                <div class="input-group mb-3">
                   <input type="text" class="form-control" placeholder="Add a Comment" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                   <button class="btn" type="button" id="button-addon2"><i class="bi bi-chat"/></button></div>    
             </div>
             </div>
           </div>
           </div>




        </div>
        </div>              
       </div> 
    );
}

export default Home;

