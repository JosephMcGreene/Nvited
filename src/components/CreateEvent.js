import { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateEvent({ addEvent }) {
	const [eventName, setEventName] = useState("");
	const [hostName, setHostName] = useState("");
	const [eventDate, setEventDate] = useState("");
	const [location, setLocation] = useState("");
	const [hasSubmitted, sethasSubmitted] = useState(false);
	const [photo, setPhoto] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		let submitData = {
			eventName,
			hostName,
			eventDate,
			location,
			// Photo upload would go here as well, but I've just used the birthday cake photo provided by Envited
		};

		addEvent(submitData);

		sethasSubmitted(true);
	}

	return (
		<div className="create-event-page">
			<h2 className="heading">My Event</h2>

			<form className="create-form" onSubmit={(e) => handleSubmit(e)}>
				<div className="input-container">
					<label htmlFor="eventName">Event Name:</label>
					<input
						type="text"
						name="eventName"
						value={eventName}
						placeholder="What are we doing?"
						onChange={(e) => setEventName(e.target.value)}
					/>
				</div>

				<div className="input-container">
					<label htmlFor="hostName">Your Name:</label>
					<input
						type="text"
						name="hostName"
						value={hostName}
						placeholder="Name of the Host"
						onChange={(e) => setHostName(e.target.value)}
					/>
				</div>

				<div className="input-container">
					<label htmlFor="eventDate">Date:</label>
					<input
						type="date"
						name="eventDate"
						value={eventDate}
						onChange={(e) => setEventDate(e.target.value)}
					/>
				</div>

				<div className="input-container">
					{/* <label>Location:</label> */}
					<label htmlFor="street-number">Location:</label>
					<input
						type="text"
						name="street-number"
						value={location}
						placeholder="Street Address"
						onChange={(e) => setLocation(e.target.value)}
					/>
					<input
						type="text"
						name="street-number2"
						value={location}
						placeholder="Street Address line 2"
						onChange={(e) => setLocation(e.target.value)}
					/>
					<input
						type="text"
						name="city-state"
						value={location}
						placeholder="City, State, Zip"
						onChange={(e) => setLocation(e.target.value)}
					/>
				</div>

				<div className="input-container">
					<label htmlFor="photo">Photo (Optional):</label>
					<input type="file" name="photo" value={photo} accept="image/*" />
				</div>
				<button type="submit" className="btn">
					Submit
				</button>
				<Link to="/event" className="btn">
					<button type="button" className="form-btn">
						See My Event
					</button>
				</Link>
			</form>
		</div>
	);
}
