import React from "react";
import "../scss/custom.scss";
import Container, { Navbar, Nav } from "react-bootstrap";

//import 'bootstrap/dist/css/bootstrap.min.css'

const Menu = () => (
	<Navbar
		sticky='top'
		className='bg-aaron-primary text-aaron-secondary'
		expand='lg'
	>
		<Navbar.Brand href='#home'>
			<img
				src={require("../components/images/Aaron.jpg")}
				width='30'
				height='30'
				className='d-inline-block align-top'
				alt='Web Devloper Aaron Thumbnail'
			/>
		</Navbar.Brand>
		<Nav.Link href='#home'>Home</Nav.Link>
		<Nav.Link href='#about'>About</Nav.Link>
		<Nav.Link href='#projects'>Projects</Nav.Link>
	</Navbar>
);

export default Menu;
