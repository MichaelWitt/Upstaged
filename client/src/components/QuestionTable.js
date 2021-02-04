import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';

import { Button } from 'react-bootstrap';

export class QuestionTable extends Component {
    render() {
         return (
           <div>
             <div>Jeopardy</div>
             <table>
             <thead>
              <tr>
               <th>Theatre Lingo</th>
               <th>Name the Show</th>
               <th>Who Wrote It</th>
               <th>Starts With the Letter ''</th>
               <th>One More Category</th>
              </tr>
            </thead>
            <tbody>
      <tr>
        <td><Button variant="outline-primary">$200</Button>{' '}</td>
        <td>$200</td>
        <td>$200</td>
        <td>$200</td>
        <td>$200</td>
      </tr>
      <tr>
        <td>$400</td>
        <td>$400</td>
        <td>$400</td>
        <td>$400</td>
        <td>$400</td>
      </tr>
      <tr>
        <td>$600</td>
        <td>$600</td>
        <td>$600</td>
        <td>$600</td>
        <td>$600</td>
      </tr>
      <tr>
        <td>$800</td>
        <td>$800</td>
        <td>$800</td>
        <td>$800</td>
        <td>$800</td>
      </tr>
      <tr>
        <td>$1000</td>
        <td>$1000</td>
        <td>$1000</td>
        <td>$1000</td>
        <td>$1000</td>
      </tr>
    </tbody>
             </table>
           </div>
        )
    }
}

export default QuestionTable
