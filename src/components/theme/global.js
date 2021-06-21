import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
	

	background-color: ${(props) =>
		props.theme.mode === "light" ? "#f4f4f8" : "#121721"};
		transition: background-color .3s ease-in;

	.form-contents, .location input, .description input {
			background-color: ${(props) =>
				props.theme.mode === "light" ? "#ffffff" : "#19202d"};
					transition: background-color .3s ease-in;
		}
			
			.location input::placeholder, .description input::placeholder {
				color: ${(props) => (props.theme.mode === "light" ? "" : "#9daec2")}
			}

			.location input, .description input {
				color: ${(props) => (props.theme.mode === "light" ? "" : "#9daec2")}
			}
			
			.location::after, .description::after {
				background-color: ${(props) => (props.theme.mode === "light" ? "" : "#6e8098")};
				opacity: ${(props) => (props.theme.mode === "light" ? "" : "0.2")}
			}
			
			.jobtype label {
				color: ${(props) => (props.theme.mode === "light" ? "" : "#ffffff")}
			}
			
			.card {
				background-color: ${(props) => (props.theme.mode === "light" ? "" : "#19202d")};
				transition: background-color .3s ease-in;
			}
			
			.card-content__items--jobTitle {
				color: ${(props) => (props.theme.mode === "light" ? "" : "#ffffff")}
			}

	.cardDetails-heading {
		background-color: ${(props) => (props.theme.mode === "light" ? "" : "#19202d")};
		transition: background-color .3s ease-in;
	}

	.cardDetails-heading__name h2 {
		color: ${(props) => (props.theme.mode === "light" ? "" : "#ffffff")};
		transition: color .3s ease-in;
	}

	.cardDetails-heading a {
		background-color: ${(props) => (props.theme.mode === "light" ? "" : "#6e8098")};
		color: ${(props) => (props.theme.mode === "light" ? "#5964e0" : "#ffffff")};
	}

	.cardDetails-heading a:hover {
		background-color: ${(props) => (props.theme.mode === "light" ? "" : "#9daec2")};
	}

	.cardDetailsBody {
		background-color: ${(props) => (props.theme.mode === "light" ? "" : "#19202d")};
		transition: background-color .3s ease-in;
	}

	.cardDetailsBody__heading--title {
		color: ${(props) => (props.theme.mode === "light" ? "" : "#ffffff")};
	}

	.cardDetailsBody-footer {
		background-color: ${(props) => (props.theme.mode === "light" ? "" : "#19202d")};
	}

	.cardDetailsBody-footer__wrapper--title h3 {
		color: ${(props) => (props.theme.mode === "light" ? "" : "#ffffff")};
	}

	.cardDetailsBody-footer__wrapper--title p {
		color: ${(props) => (props.theme.mode === "light" ? "" : "#9daec2")};
	}

	.cardDetailsBody-description p {
		color: ${(props) => (props.theme.mode === "light" ? "" : "#9daec2 !important")};
	}
	
	.cardDetailsBody-description p:nth-child(6)::before {
		color: ${(props) => (props.theme.mode === "light" ? "" : "#ffffff !important")};
	}

	.cardDetailsBody-description p > strong {
		color: ${(props) => (props.theme.mode === "light" ? "" : "#ffffff !important")};
	}

	.cardDetailsBody-description h1 {
		color: ${(props) => (props.theme.mode === "light" ? "" : "#ffffff !important")};
	}

	.cardDetailsBody-description .h3 {
		color: ${(props) => (props.theme.mode === "light" ? "" : "#ffffff !important")};
	}

	.noJobs {
		color: ${(props) => (props.theme.mode === "light" ? "" : "#9daec2")}
	}

	.modal {
		background-color: ${(props) =>
			props.theme.mode === "light" ? "#ffffff" : "#19202d"};
		transition: background-color .3s ease-in;
	}

	.modal-jobType__checkbox label {
		color: ${(props) => (props.theme.mode === "light" ? "" : "#ffffff")}
	}

	.modal-location, .modal-location input {
		background: ${(props) => (props.theme.mode === "light" ? "" : "#19202d")}
	}

	.modal-location input::placeholder {
		color: ${(props) => (props.theme.mode === "light" ? "" : "#9daec2")}
	}
}


	`;
