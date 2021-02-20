
import React, { Component } from "react";
import "./playbill.css";
import $ from "jquery";

class Playbill extends Component {
  componentDidMount() {
    $(document).ready(function(){
        $("#story").hide();
        $("#play").hide();
        
        $("#btn-click").click(function(e) {

        e.preventDefault()
        
        var random = Math.floor(Math.random() * $('.tale').length);
        $('.tale').hide().eq(random).show();
    
    
      $("#story").show();
      
      $("#btn-click").hide();
      $("#play").show();
    
        // grab the values from the input boxes, then append them to the DOM
        $(".name").empty().append($("input.name").val());
        $(".country").empty().append($("input.country").val());
        $(".pluralnoun").empty().append($("input.pluralnoun").val());
        $(".city").empty().append($("input.city").val());
        $(".lastName").empty().append($("input.lastName").val());
        $(".adjective").empty().append($("input.adjective").val());
        $(".verb").empty().append($("input.verb").val());
        $(".noun").empty().append($("input.noun").val());

    
      //hide the values
      $(':input').val('');
    
      //hide questions
      $("#answerForm").hide();
      });
    
      $("#play").click(function(e) {
        $("#answerForm").show();
    
      $("#btn-click").show();
        $("#story").hide();
      });
      
    
  })}
  render() {

    return (
   
        <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <form>
            <div class="form-group">
                <h1>Create Your Own Playbill</h1>
                <label for="name"> Name </label>
                <input id="name" class="form-control name" type="text" placeholder="Enter a Name"/>
            </div>
            <div class="form-group">
                <label for="verb"> Verb </label>
                <input id="verb" class="form-control verb" type="text" placeholder="Enter a Verb"/>
            </div>
            <div class="form-group">
                <label for="adjective"> Adjective </label>
                <input id="adjective" class="form-control adjective" type="text" placeholder="Enter an adjective"/>
            </div>
            <div class="form-group">
                <label for="noun"> Noun </label>
                <input id="noun" class="form-control noun" type="text" placeholder="Enter a Noun"/>
            </div>
            <div class="form-group">
                <label for="pluralnoun"> PluralNoun </label>
                <input id="pluralnoun" class="form-control pluralnoun" type="text" placeholder="Enter a Plural Noun"/>
            </div>
            <div class="form-group">
                <label for="city"> City </label>
                <input id="city" class="form-control city" type="text" placeholder="Enter a City"/>
            </div>
            <div class="form-group">
                <label for="country"> Country </label>
                <input id="country" class="form-control country" type="text" placeholder="Enter a Country"/>
            </div>

            <button id="btn-click" type="submit" class="btn btn-primary btn-lg">Tell Me a Story!</button>
                <div id="story">
                <div class="tale">Hello, Mr <span class="name"></span>
            <br/>
            The <span class="city"></span> Auditorium
            </div>
            <div class="tale">A tale of two <span class="adjective"></span> <span class="pluralnoun"></span>
            <br/>
            The <span class="country"></span> Theatre
            </div>
            <div class="tale">The Journey to the center of <span class="country"></span>
            <br/>
            The <span class="city"></span> Theatre
            </div>
            <div class="tale">So long,  <span class="name"></span>
            <br/>
            The <span class="country"></span> Building
            </div>
            <div class="tale">How to <span class="verb"></span> a <span class="noun"> in 10 days</span>
            <br/>
            The <span class="city"></span> Center
            </div>
            <div class="tale">A <span class="adjective"></span> Sunday
            <br/>
            The <span class="country"></span> Room
            </div>
            <div class="tale">Lost in <span class="city"></span> 
            <br/>
            The <span class="country"></span> Auditorium
            </div>



        </div>
        </form>
       </div>
       </div>
       </div>
       
    );
  }
}

// render(<Playbill />, document.getElementById("root"));

 export default Playbill;