import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import CreateEvent from "./components/CreateEvent";
import Event from "./components/Event";

function App() {
	const [eventDetails, setEventDetails] = useState({
		eventName: "",
		hostName: "",
		eventDate: "",
		location: "",
	});

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route
					path="/create"
					element={
						<CreateEvent
							addEvent={(eventDetails) => setEventDetails(eventDetails)}
						/>
					}
				/>
				<Route path="/event" element={<Event eventDetails={eventDetails} />} />
			</Routes>
		</div>
	);
}

export default App;
