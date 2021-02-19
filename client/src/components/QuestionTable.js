import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Form } from "react-bootstrap";

export class QuestionTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsList: {
        200: {
          "This literary term refers to the section of the plot in which tension stemming from the story’s central conflict grows(two words).": {
            btnDissabled: false,
            answer: "rising action",
          },
          "This musical is the highest grossing franchise based on the 1924 Disney animated film(three words starting with 'the').": {
            btnDissabled: false,
            answer: "the lion king",
          },
          " Based on the 1995 Gregory Maguire novel, this person wrote the music and lyrics to the 2003 show, Wicked, based on The Wizard of Oz(name, two words).": {
            btnDissabled: false,
            answer: "stephen schwartz",
          },
          "A number featuring one singer(one word).": {
            btnDissabled: false,
            answer: "solo",
          },
          "what is my favorite color": { btnDissabled: false, answer: "pink" },
        },
        400: {
          "This type of musical refers to a play where songs and dances are fully integrated into a story(two words).": {
            btnDissabled: false,
            answer: "book musical",
          },
          "This musical is based on the 1910 French novel of the same name by Gaston Leroux(five words).": {
            btnDissabled: false,
            answer: "the phantom of the opera",
          },
          "This author wrote the original novel that the 1980 show, Les Miserables is based on(name, two words).": {
            btnDissabled: false,
            answer: "victor hugo",
          },
          "A high pitched female voice(one word).": {
            btnDissabled: false,
            answer: "soprano",
          },
          "question 5:": { btnDissabled: false, answer: "answer_5" },
        },
        600: {
          "This term is used to describe a conscious division placed within a work by a playwright(one word).": {
            btnDissabled: false,
            answer: "act",
          },
          "This show is based on the songs of ABBA(two words).": {
            btnDissabled: false,
            answer: "mamma mia",
          },
          "This writer composed the music, lyrics and book for the 1996 show, Rent which is based on the opera La Boheme(name, two words).": {
            btnDissabled: false,
            answer: "jonathan larson",
          },
          "A melodic phrase which is repeated at higher or lower pitch levels(one word).": {
            btnDissabled: false,
            answer: "sequence",
          },
          "question 5:": { btnDissabled: false, answer: "answer_5" },
        },
        800: {
          "This term refers to a version or adaptation of a musical for younger age groups(one word).": {
            btnDissabled: false,
            answer: "junior",
          },
          "This show is an American musical set in Chicago during the jazz age(one word)": {
            btnDissabled: false,
            answer: "chicago",
          },
          "The show, The Book of Mormon was written by Trey Parker and Matt Stone who more famously created which popular TV show?(two words).": {
            btnDissabled: false,
            answer: "south park",
          },
          " A number performed by a soloist as if he or she is musing aloud(one word).": {
            btnDissabled: false,
            answer: "strophic form",
          },
          "question 5:": {
            btnDissabled: false,
            answer: "answer_5",
          },
        },
        1000: {
          "This term refers to a style of delivery in which a character uses ordinary speech during a song and often uses rhyme(one word).": {
            btnDissabled: false,
            answer: "recitative",
          },
          "The title of this musical is the name of the animal the show is about. In the show this type of animal makes up a tribe called 'the Jellicles'(one word).": {
            btnDissabled: false,
            answer: "cats",
          },
          "Grease is set in the 1950s and premiered in 1971. Music and lyrics for the show were written by Jim Jacobs, John Farrar, and THIS third artist(name, two words).": {
            btnDissabled: false,
            answer: "warren casey",
          },
          " A form that follows the pattern AAA(etc)(two words).": {
            btnDissabled: false,
            answer: "strophic form",
          },
          "question 5": {
            btnDissabled: false,
            answer: "answer_5",
          },
        },
      },

      currentDisplayedQuestion: "",
      totalWinnings: 0,
      userAnswer: "",
      answerSubmitted: false,
      correctAnswer: "",
    };
  }

  render() {
    // Function to set user buttn click
    const handleMoneyButtonClick = (
      question,
      questionObject,
      questionAmount
    ) => {
      console.log("-------- Button Selected --------");
      console.log("question amount", questionAmount);
      console.log("question asked: ", question);
      console.log("Question object: ", questionObject);

      //part of object mapping
      //dont have to put quotes arount the first two values but they do go around the btnDissabled because its not being passed
      // 1. = this.state.questionsLust -> part of state, this is stored locally
      // 2. = questionAmount -> no quotes because the value is being passed through the function
      // 3.question gets no quotes because its being passed through the function
      //btnDissabled gets quotes because it is not being passed through but it exists within the object
      this.state.questionsList[questionAmount][question]["btnDissabled"] = true;
      this.setState({
        currentDisplayedQuestion: question,
        correctAnswer: questionObject.answer,
        questionsList: this.state.questionsList,
      });
    };

    // Function to set user answer
    // you can use event whenever you are creating an onChange function OR onClick
    const setUserAnswer = (event) => {
      // console.log("user answer", event.target.value);
      this.setState({ userAnswer: event.target.value });
    };

    const checkAnswer = () => {
      //don't need to pass through parameters because correctAnswer, userAnswer, and currentDisplayedQuestion etc. are locally(any component on this page has access) stored state
      console.log("the correct answer is", this.state.correctAnswer);
      console.log("user answer", this.state.userAnswer);
      console.log("the question is", this.state.currentDisplayedQuestion);
      this.setState({ answerSubmitted: true });

      // Step 2:  add a set state to set the state for correct or incorrectanswer

      if (this.state.userAnswer === this.state.correctAnswer) {
        alert("correct");
      } else {
        alert("wrong");
      }

      setTimeout(function () {
        resetQuestions();
      }, 5000);
      //tertinary operaters this.state.answerSubmitted ? ths.state.useerAnwer : this.state.question
    };
    const resetQuestions = () => {
      this.setState({
        answerSubmitted: false,
        correctAnswer: "",
        userAnswer: "",
        currentDisplayedQuestion: "pick a question",
      });
    };
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Theatre Lingo</th>
              <th>Name the Show</th>
              <th>Who Wrote It</th>
              <th>Starts With the Letter 'S'</th>
              <th>One More Category</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(this.state.questionsList).map(
              //getting the entries(key value pairs) from the questionsList
              ([key, value], index) => {
                //key is equal to dollar value
                // console.log("key: ", key);
                //value is an object containing questions(key) with their corresponding answers(value)
                // using a map within a map you cannot reuse the same keys/value names
                // console.log("value: ", value);
                // console.log("index: ", index);
                return (
                  <tr key={index}>
                    {Object.entries(value).map(([qkey, qvalue], qindex) => {
                      //qkey is equal to the question string
                      console.log("qkey:", qkey);
                      //qvalue is representing the object that contains the specific question's, button disabled value, and the answer
                      console.log("qvalue:", qvalue);
                      // qvalue.answer is the answer for the specific question
                      console.log("qvalue answer:", qvalue.answer);
                      //qvalue.btnDissabled is the boolean value of the button being disabled
                      console.log("qvalue btn:", qvalue.btnDissabled);
                      console.log("qindex:", qindex);
                      console.log(
                        "button value: ",
                        this.state.questionsList[key][qkey]["btnDissabled"]
                      );
                      return (
                        <td key={qindex}>
                          <Button
                            onClick={() =>
                              handleMoneyButtonClick(qkey, qvalue, key)
                            }
                            variant="primary"
                            disabled={
                              this.state.questionsList[key][qkey][
                                "btnDissabled"
                              ]
                            }
                          >
                            {key}
                          </Button>
                        </td>
                      );
                    })}
                  </tr>
                );
              }
            )}
          </tbody>
        </Table>
        {this.state.currentDisplayedQuestion && (
          <h1>{this.state.currentDisplayedQuestion}</h1>
        )}

        <Form>
          <Form.Group controlId="formBasicImput">
            <Form.Control
              type="input"
              placeholder="What is..."
              value={this.state.userAnswer}
              onChange={setUserAnswer}
            />
            <Form.Text className="text-muted">
              Be sure to use all lower case letters.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" onClick={() => checkAnswer()}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default QuestionTable;
