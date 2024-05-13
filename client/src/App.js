import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
} from "reactstrap";
import axios from 'axios';
// import './App.css';
import { useAxios } from './useAxios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }
  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then((response) => {
        this.setState({
          players: response.data
        })
        console.log(response.data)
      })
      .catch((err) => console.log(err));
  }




  render() {
    return (
      <div>
        <h1 className='text-center mb-3'>Women's World Cup Players</h1>
        <section className="d-flex flex-wrap justify-content-evenly">
          {this.state.players.map(player => {

            return (
              <Card
                className="my-2"
                style={{
                  width: '18rem'
                }}
              >
                <CardHeader tag="h5">
                  {player.name}
                </CardHeader>
                <CardBody>
                  <CardTitle className='m-0'>
                    Country: {player.country}
                  </CardTitle>
                  <CardText>
                    Searches: {player.searches}
                  </CardText>
                </CardBody>
              </Card>

            )
          })}

        </section>
      </div >
    );
  }
}

export default App;
