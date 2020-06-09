import React from 'react'
import Tilt from 'react-parallax-tilt'
import { Card, CardGroup, Jumbotron } from 'react-bootstrap'

const Projects = () => (
	<div>
		<Jumbotron className="bg-aaron-primary">
			<h3>
				Projects
			</h3>
		</Jumbotron>
		{/* <CardGroup> */}	
			<Card style={{ width: '100%' }}>
				<Tilt>
					<Card.Img src={require("../components/images/SL Logo 250 px.png")} alt="Project 1 Avatar" />
						<Card.ImgOverlay>	
						</Card.ImgOverlay>
				</Tilt>
				<Card.Body>
					<Card.Title>Project 1</Card.Title>
						<Card.Text>
							Placeholder text for Project 1
						</Card.Text>
				</Card.Body>
			</Card>
			<Card style={{ width: '100%' }}>
				<Tilt>
					<Card.Img src={require("../components/images/SL Logo 250 px.png")} alt="Project 1 Avatar" />
						<Card.ImgOverlay>	
						</Card.ImgOverlay>
				</Tilt>
				<Card.Body>
					<Card.Title>Project 2</Card.Title>
						<Card.Text>
							Placeholder text for Project 2
						</Card.Text>
				</Card.Body>
			</Card>
			<Card style={{ width: '100%' }}>
				<Tilt>
					<Card.Img src={require("../components/images/SL Logo 250 px.png")} alt="Project 1 Avatar" />
						<Card.ImgOverlay>	
						</Card.ImgOverlay>
				</Tilt>
				<Card.Body>
					<Card.Title>Project 3</Card.Title>
						<Card.Text>
							Placeholder text for Project 3
						</Card.Text>
				</Card.Body>
			</Card>
		{/* </CardGroup> */}
	</div>
)

export default Projects