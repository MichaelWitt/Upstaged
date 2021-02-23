import React, { Component } from "react";
 import Alley from "../../imgs/alley.png";
 import playbilllogo from "../../imgs/playbilllogo.png";
 import Wives from "../../imgs/wives.png";
 import MrBlank from "../../imgs/MrBlank.png";
 import book from "../../imgs/Book.png";
 import journey from "../../imgs/journey.png";
 import City from "../../imgs/city.png";
 import Theatre from "../../imgs/theatre.png";
 import How from "../../imgs/hotwo.png";
 import Roof from "../../imgs/tinroof.png";

function Results(props) {
console.log("in results", props)
    function randomGenerator() {
        console.log("form array", props.formNumber)
    }
    return (

        <div className={props.className + ' resultForm '}>
             <img src={playbilllogo}/>
            {props.formNumber === 1 ?
                <form>
                  
                     <div className="unique">
                            Good evening, Mr. <span>{props.word5}</span>
				    </div>
                    <div className="phrase">
                       The {props.word6} Theatre
                    </div>

                    <img src={MrBlank}/><br/>
                    <a href="#" className="align-right" onClick={props.doParentReset}>Generate a new story</a>
                
                <br/>
                
                </form>
                : props.formNumber === 2 ?
                    <form>
                          <div className="unique">
                                A tale of two  <span>{props.word4}</span>  <span>{props.word3}</span>
                         </div>
                        <div className="phrase">
                              {props.word5} Auditorium
                        </div>

                    <img src={book}/><br/>
                        <a href="#" className="align-right" onClick={props.doParentReset}>Generate a new story</a>
                    </form>
                    : props.formNumber === 3 ?
                        <form>
                            <div className="unique">
                              The Journey to the center of  <span>{props.word6}</span>
                         </div>
                        <div className="phrase">
                              {props.word5}'s Theatre
                        </div>

                    <img src={journey}/><br/>
                            <a href="#" className="align-right" onClick={props.doParentReset}>Generate a new story</a>
                        </form>
                           : props.formNumber === 4 ?
                           <form>
                               <div className="unique">
                                Who's Afraid of  <span>{props.word5}</span>?
                            </div>
                           <div className="phrase">
                              The <span> {props.word6}</span> Theatre
                           </div>
                           <img src={Alley}/><br/>
                               <a href="#" className="align-right" onClick={props.doParentReset}>Generate a new story</a>
                           </form>
                            : props.formNumber === 5 ?
                            <form>
                                <div className="unique">
                                 The  <span>{props.word4}</span> Wives of <span>{props.word6}</span>
                             </div>
                            <div className="phrase">
                                <span> {props.word5}</span> Theatre <br />
                            </div>

                    <img src={Wives}/><br/>
                                <a href="#" className="align-right" onClick={props.doParentReset}>Generate a new story</a>
                            </form>
                             : props.formNumber === 6 ?
                             <form>
                                 <div className="unique">
                                  The  <span>{props.word1}</span> of the Opera
                              </div>
                             <div className="phrase">
                                 <span> {props.word6}</span> Theatre <br />
                             </div>

                    <img src={Theatre}/><br/>
                                 <a href="#" className="align-right" onClick={props.doParentReset}>Generate a new story</a>
                             </form>
                              : props.formNumber === 7 ?
                              <form>
                                  <div className="unique">
                                     A <span>{props.word4}</span>  thing happened on the way to <span>{props.word6}</span>
                               </div>
                              <div className="phrase">
                                  <span> {props.word5}</span>'s Theatre <br />
                              </div>
                              <img src={City}/><br/>
                                  <a href="#" className="align-right" onClick={props.doParentReset}>Generate a new story</a>
                              </form>

                             : props.formNumber === 8 ?
                             <form>
                                 <div className="unique">
                                   <span>{props.word3}</span> on a <span>{props.word4}</span> Roof
                              </div>
                             <div className="phrase">
                                The <span> {props.word6}</span> Theatre <br />
                             </div>
                             <img src={Roof}/><br/>
                                 <a href="#" className="align-right" onClick={props.doParentReset}>Generate a new story</a>
                             </form>
                        : props.formNumber === 9 ?
                            <form>
                            
                            <div className="unique">
                              How to  <span>{props.word2}</span><br/>
                               with a <span> {props.word1} </span> in 10 days
                         </div>
                         
                        <div className="phrase">
                             The {props.word6} Room <br />
                        </div>
                              <img src={How}/><br/>
                                <a href="#" className="align-right" onClick={props.doParentReset}>Generate a new story</a>
                            </form>
                            : null
            }
            <br /> <br />
            <br /> <br />
        </div>


    )
}




export default Results;