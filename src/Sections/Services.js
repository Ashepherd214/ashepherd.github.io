import React from "react";
import Tilt from "react-parallax-tilt";
import "../scss/custom.scss";
import { Card, CardGroup, Jumbotron } from "react-bootstrap";

const Services = () => (
	<div>
		<Jumbotron
			className='bg-aaron-primary text-aaron-secondary'
			style={{
				opacity: 1,
				marginBottom: 0,
				textAlign: "center",
			}}
		>
			<h3>Services</h3>
		</Jumbotron>
		<CardGroup>
			<Card style={{ width: "100%", opacity: 0.9, textAlign: "center" }}>
				<Card.Img
					variant='top'
					style={{ width: "20%", height: "8vw", alignSelf: "center" }}
					src={require("../components/images/webdevscreen.png")}
					alt='Website development icon'
				/>
				<Card.Body>
					<Card.Title>Website Development</Card.Title>
					<Card.Text style={{ color: "black" }}>
						Need a new website or an overhaul for your current site? Information
						for the site is collected and rapidly developed using current
						designs and web technologies. This includes review processes to lead
						to a website you can be proud of.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card
				style={{
					width: "100%",
					opacity: 0.9,
					justifyContent: "right",
					textAlign: "center",
				}}
			>
				<Card.Img
					style={{ width: "20%", height: "8vw", alignSelf: "center" }}
					src={require("../components/images/networking.png")}
					alt='Networking Assistance icon'
				/>
				<Card.ImgOverlay></Card.ImgOverlay>
				<Card.Body>
					<Card.Title>Networking Assistance</Card.Title>
					<Card.Text style={{ color: "black" }}>
						Whether you need new network lines dropped, need assistance getting
						your network up and running or need help with getting your hardware
						updated allow me to take care of things for you.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card
				style={{
					width: "100%",
					opacity: 0.9,
					justifyContent: "right",
					textAlign: "center",
				}}
			>
				<Card.Img
					style={{ width: "20%", height: "8vw", alignSelf: "center" }}
					src={require("../components/images/appdev.png")}
					alt='App Development icon'
				/>
				<Card.ImgOverlay></Card.ImgOverlay>
				<Card.Body>
					<Card.Title>App Development</Card.Title>
					<Card.Text style={{ color: "black" }}>
						One of the best features you can offer your customers is a mobile
						application. I can work on OS specific apps as well as multiplatform
						apps. A free consultation is available to make sure an app is right
						for you or your business.
					</Card.Text>
				</Card.Body>
			</Card>
		</CardGroup>
		<CardGroup>
			<Card style={{ width: "100%", opacity: 0.9, textAlign: "center" }}>
				<Card.Img
					style={{ width: "20%", height: "10vw", alignSelf: "center" }}
					src={require("../components/images/consult.png")}
					alt='Consultation icon'
				/>
				<Card.ImgOverlay></Card.ImgOverlay>
				<Card.Body>
					<Card.Title>Consultation</Card.Title>
					<Card.Text style={{ color: "black" }}>
						I offer free introductory consultations to discuss what you need in
						general. If you decide you'd like more help I offer more detailed
						info such as recommended computer systems, recommendations on
						service providers, items needed to repair your electronics and
						technology you can use to optomize, scale and grow your business.
					</Card.Text>
				</Card.Body>
			</Card>
			<Card style={{ width: "100%", opacity: 0.9, textAlign: "center" }}>
				<Card.Img
					style={{ width: "20%", height: "10vw", alignSelf: "center" }}
					src={require("../components/images/repair.png")}
					alt='Electronics Repair icon'
				/>
				<Card.ImgOverlay></Card.ImgOverlay>
				<Card.Body>
					<Card.Title>Electronics Repair</Card.Title>
					<Card.Text style={{ color: "black" }}>
						I'm also a handyman when it comes to fixing electronics whether you
						need to bring your cellular phone back to life, need to get your
						companies tablets and computers fixed or you have another piece of
						technology you'd like me to attempt to fix. Just contact me for a
						free diagnoses and determine if the equipment is repairable.
					</Card.Text>
				</Card.Body>
			</Card>
		</CardGroup>
	</div>
);

export default Services;
