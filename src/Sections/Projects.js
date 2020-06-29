import React from 'react'
import Tilt from 'react-parallax-tilt'
import '../scss/custom.scss'
import { Card, CardGroup, Jumbotron } from 'react-bootstrap'

const Projects = () => (
	<div>
		<Jumbotron className="bg-aaron-primary text-aaron-secondary"  style={{ opacity: 0.5, textAlign: "center"}} >
			<h3>
				Projects
			</h3>
		</Jumbotron>
		{/* <CardGroup> */}	
			<Card style={{ width: '100%', opacity: 0.5, marginBottom: 50, textAlign: "center" }}>
				<Tilt>
					<Card.Img style={{ width: '40%', float: "left" }} src={require("../components/images/SL Logo 250 px.png")} alt="Project 1 Avatar"  />
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
			<Card style={{ width: '100%', opacity: 0.5, marginBottom: 50, justifyContent: "right", textAlign: "center" }}>
				<Tilt>
					<Card.Img style={{ width: '40%', float: "right" }} src={require("../components/images/SL Logo 250 px.png")} alt="Project 1 Avatar" />
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
			<Card style={{ width: '100%', opacity: 0.5, textAlign: "center" }}>
				<Tilt>
					<Card.Img style={{ width: '40%', float: "left" }} src={require("../components/images/SL Logo 250 px.png")} alt="Project 1 Avatar" />
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