import eventImg from "../img/Birthday cake.png";
import { ImCalendar } from "react-icons/im";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";
import CreateEvent from "./CreateEvent";

export default function Event({ eventDetails }) {
	const { eventName, hostName, eventDate, location } = eventDetails;

	return (
		<div className="event">
			{eventDetails.location !== "" ? (
				<>
					<img src={eventImg} alt="user's event" className="event-img" />

					<div className="details">
						<h2 className="event-name">{eventName}</h2>
						<span className="hosted-by">
							Hosted by <strong>{hostName}</strong>
						</span>

						<ul className="date-locale-ul">
							<li className="dl-li">
								<ImCalendar className="event-icon" />
								{eventDate}
							</li>
							<li className="dl-li">
								<ImLocation2 className="event-icon" />
								{location}
							</li>
						</ul>

						<Link to="/create" className="btn">
							<button>Go Back</button>
						</Link>
					</div>
				</>
			) : (
				<>
					<span className="tag-line">Nothing Here!</span>
					<Link to="/create" className="btn">
						<button>Create an Event</button>
					</Link>
				</>
			)}
		</div>
	);
}
