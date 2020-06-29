import React from 'react'
import { Form } from 'react-bootstrap'

const Inquire = () => (
	<div style={{ align: "center" }}>
		<h3>What can I help you with?</h3>
		<Form>
			<Form.Group controlId="inquireForm">
				<Form.Label>First Name</Form.Label>
				<Form.Control type="text" placeholder="First Name" />
				<Form.Label>Last Name</Form.Label>
				<Form.Control type="text" placeholder="Last Name" />
			</Form.Group>
			<Form.Group controlId="formService">
				<Form.Label>What service are you intrested?</Form.Label>
				<Form.Control type="dropdown"/>
				<select>
					<option value="website">Website Creation</option>
					<option value="app">App development</option>
					<option value="IT">Network Setup consultation</option>
					<option value="other">Other Tech related service</option>
				</select>
			</Form.Group>
		</Form>
	</div>
	
)

export default Inquire