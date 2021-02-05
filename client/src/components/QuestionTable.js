import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';

import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap'

export class QuestionTable extends Component {
    render() {
         return (
           <div>
             <div>Jeopardy</div>
             <Table>
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
      <th><Button variant="primary">$200</Button>{' '}</th>
        <th><Button variant="primary">$200</Button>{' '}</th>
        <th><Button variant="primary">$200</Button>{' '}</th>
        <th><Button variant="primary">$200</Button>{' '}</th>
        <th><Button variant="primary">$200</Button>{' '}</th>
      </tr>
      <tr>
      <th><Button variant="primary">$400</Button>{' '}</th>
      <th><Button variant="primary">$400</Button>{' '}</th>
      <th><Button variant="primary">$400</Button>{' '}</th>
      <th><Button variant="primary">$400</Button>{' '}</th>
      <th><Button variant="primary">$400</Button>{' '}</th>
      </tr>
      <tr>
      <th><Button variant="primary">$600</Button>{' '}</th>
      <th><Button variant="primary">$600</Button>{' '}</th>
      <th><Button variant="primary">$600</Button>{' '}</th>
      <th><Button variant="primary">$600</Button>{' '}</th>
      <th><Button variant="primary">$600</Button>{' '}</th>
      </tr>
      <tr>
      <th><Button variant="primary">$800</Button>{' '}</th>
      <th><Button variant="primary">$800</Button>{' '}</th>
      <th><Button variant="primary">$800</Button>{' '}</th>
      <th><Button variant="primary">$800</Button>{' '}</th>
      <th><Button variant="primary">$800</Button>{' '}</th>
      </tr>
      <tr>
      <th><Button variant="primary">$1000</Button>{' '}</th>
      <th><Button variant="primary">$1000</Button>{' '}</th>
      <th><Button variant="primary">$1000</Button>{' '}</th>
      <th><Button variant="primary">$1000</Button>{' '}</th>
      <th><Button variant="primary">$1000</Button>{' '}</th>
      </tr>
    </tbody>
  </Table>
</div>

        )
    }
}

export default QuestionTable
