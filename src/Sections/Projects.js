import React from "react";
import Tilt from "react-parallax-tilt";
import "../scss/custom.scss";
import { Card, CardGroup, Jumbotron } from "react-bootstrap";

const Projects = () => (
	<div>
		<Jumbotron
			className='bg-aaron-primary text-aaron-secondary'
			style={{
				opacity: 1,
				marginBottom: 0,
				marginTop: 10,
				textAlign: "center",
			}}
		>
			<h3>Projects</h3>
		</Jumbotron>
		{/* <CardGroup> */}
		<a
			style={{ cursor: "pointer" }}
			onClick={() => window.open("https://ashepherd214.github.io/robofriends/")}
		>
			<Card
				style={{
					width: "100%",
					opacity: 0.75,
					marginTop: 0,
					marginBottom: 0,
					textAlign: "center",
				}}
			>
				<Card.Body>
					<Card.Title>RoboFriends</Card.Title>
					<Card.Text style={{ color: "#000000" }}>
						Generates random robot cards with input
					</Card.Text>
				</Card.Body>
				<Tilt>
					<Card.Img
						style={{ width: "20%", height: "12vw", float: "left" }}
						src={require("../components/images/robotThumb.png")}
						alt='Robot Thumbnail'
					/>
					<Card.ImgOverlay></Card.ImgOverlay>
				</Tilt>
			</Card>
		</a>
		<a
			style={{ cursor: "pointer" }}
			onClick={() =>
				window.open("https://smart-brain-ashepherd.herokuapp.com/")
			}
		>
			<Card
				style={{
					width: "100%",
					opacity: 0.75,
					marginTop: 0,
					marginBottom: 0,
					justifyContent: "right",
					textAlign: "center",
				}}
			>
				<Card.Body>
					<Card.Title>Smart Brain</Card.Title>
					<Card.Text style={{ color: "#000000" }}>
						Takes an uploaded image and detects faces in the uploaded image
					</Card.Text>
				</Card.Body>
				<Tilt>
					<Card.Img
						style={{ width: "30%", height: "12vw", float: "right" }}
						src={require("../components/images/brain.png")}
						alt='Smart Brain Thumbnail'
					/>
					<Card.ImgOverlay></Card.ImgOverlay>
				</Tilt>
			</Card>
		</a>
		<a
			style={{ cursor: "pointer" }}
			onClick={() =>
				window.open("https://smart-brain-ashepherd.herokuapp.com/")
			}
		>
			<Card
				style={{
					width: "100%",
					opacity: 0.75,
					marginTop: 0,
					textAlign: "center",
				}}
			>
				<Card.Body>
					<Card.Title>Skyylife.io</Card.Title>
					<Card.Text style={{ color: "#000000" }}>
						The Skyylife LLC homepage
					</Card.Text>
				</Card.Body>
				<Tilt>
					<Card.Img
						style={{ width: "40%", float: "left" }}
						src={require("../components/images/SL Logo 250 px.png")}
						alt='Skyylife LLC Logo'
					/>
					<Card.ImgOverlay></Card.ImgOverlay>
				</Tilt>
			</Card>
		</a>
		{/* </CardGroup> */}
	</div>
);

export default Projects;
