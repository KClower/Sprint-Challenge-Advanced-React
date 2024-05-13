import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardText,
} from "reactstrap";
import axios from 'axios';
import { useFifaPlayers } from "./useFifaPlayers";

export default function AppFC() {

    const [players] = useFifaPlayers()

    return (
        <div>
            <h1 className='text-center mb-3'>Women's World Cup Players</h1>
            <section className="d-flex flex-wrap justify-content-evenly">
                {players.map(player => {

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
