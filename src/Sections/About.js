import React from "react";
import "../scss/custom.scss";
import { Container, Col, Row, Image } from "react-bootstrap";

const About = () => {
	return (
		// <div className="mt-md-5 mb-md-5">

		<Container>
			<Row>
				<Col xs={4}>
					<img
						src={require("../components/images/ElectronicAaron.jpg")}
						alt='Profile Avatar'
						className='responsive'
					/>
				</Col>
				<Col>
					<p>
						My name is Aaron Shepherd and I am here for your technical needs. I
						am an Alumni of Oklahoma State with a Bachelors of Science in
						Electrical Engineering Technology. In the course of my university
						career I learned a couple of prominent programming languages such as
						Java and C. Since graduating I have expanded on that knowledge by
						adding Web development languages such as HTML, CSS and React as well
						as other useful languages such as PHP and Python. I am also an App
						developer that makes use of languages such as React Native and
						Flutter to build apps for both Android and iOS at a quicker pace. I
						also have experience using Google's Firebase platform and a small
						amount of experience using Microsoft Azure and AWS. My github
						profile can be found at{" "}
						<a
							style={{ cursor: "pointer" }}
							onClick={() => window.open("https://github.com/Ashepherd214")}
						>
							https://github.com/Ashepherd214
						</a>
						. Inquire below to schedule a consultation and see what I can do for
						you.
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
