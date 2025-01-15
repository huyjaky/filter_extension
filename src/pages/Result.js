import React from "react";

import BackgroundBorder from "../components/BackgroundBorder";
import Layer from "../components/Layer";
import ResultSquare from "../components/ResultSquare";

const ResultPage = (props) => {
	const { name, data } = props;

	// console.log(data)

	return (
		<div style={{ height: "500px", width: "600px" }}>
			<div>
				<BackgroundBorder>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between"
						}}>
						<ResultSquare />
						<ResultSquare />
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							position: "absolute",
							bottom: "0",
							width: "100%"
						}}>
						<ResultSquare />
						<ResultSquare />
					</div>
				</BackgroundBorder>
			</div>

			<Layer name={name} data={data} />

		</div>
	);
};

export default ResultPage;
