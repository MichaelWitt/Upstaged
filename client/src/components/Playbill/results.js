import React, { Component } from "react";

function Results(props) {
console.log("in results", props)
    function randomGenerator() {
        console.log("form array", props.formNumber)
    }
    return (

        <div className={props.className + ' resultForm '}>
         
            {props.formNumber === 1 ?
                <form>
                  
                 <div className="unique">
                            Good evening, Mr. <span>{props.word5}</span>.
				    </div>
                    <div className="phrase">
                       The {props.word6} Theatre <br /> 
                    </div>
                    <a href="#" className="align-right" onClick={props.doParentReset}>Generate a new story</a>
                </form>
                : props.formNumber === 2 ?
                    <form>
                          <div className="unique">
                                A tale of two  <span>{props.word4}</span>  <span>{props.word3}</span>
                         </div>
                        <div className="phrase">
                            The  {props.word5} Auditorium <br />
                        </div>
                        <a href="#" className="align-right" onClick={props.doParentReset}>Generate a new story</a>
                    </form>
                    : props.formNumber === 3 ?
                        <form>
                            <div className="unique">
                              The Journey to the center of  <span>{props.word6}</span>
                         </div>
                        <div className="phrase">
                              {props.word5}'s Theatre <br />
                        </div>
                            <a href="#" className="align-right" onClick={props.doParentReset}>Generate a new story</a>
                        </form>
                           : props.formNumber === 4 ?
                           <form>
                               <div className="unique">
                                Four  <span>{props.word3}</span> lost in <span>{props.word6}</span>
                            </div>
                           <div className="phrase">
                              The <span> {props.word5}</span> Theatre <br />
                           </div>
                               <a href="#" className="align-right" onClick={props.doParentReset}>Generate a new story</a>
                           </form>
                        : props.formNumber === 5 ?
                            <form>
                            
                            <div className="unique">
                              How to  <span>{props.word2}</span><br/>
                               with a <span> {props.word1} </span> in 10 days
                         </div>
                         
                        <div className="phrase">
                             The {props.word6} Room <br />
                        </div>
                                <a href="#" className="align-right" onClick={props.doParentReset}>Generate a new story</a>
                            </form>
                            : null
            }
        </div>

    )
}




export default Results;