import landingImage from "../img/Landing page image.svg";
import { Link } from "react-router-dom";

export default function LandingPage() {
	return (
		<div className="landing-page">
			<div className="heading-container">
				<h1 className="heading">
					Imagine if
					<br />
					<strong>Snapchat</strong>
					<br />
					had events.
				</h1>

				<span className="tag-line">
					Easily host and share events with your friends across any social
					media.
				</span>
			</div>

			<img src={landingImage} alt="event example" className="landing-img" />

			<Link to="/create" className="btn">
				<button>🎉Create my event</button>
			</Link>
		</div>
	);
}
