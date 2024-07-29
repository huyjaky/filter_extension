import React from "react";

import BackgroundBorderHV from "../components/BackgroundBorderHV";
import Label from "../components/Label"
import ResultSquareHV from "../components/ResultSquareHV";
import Volume from "../components/Volume"

const HanVietPage = () => {
	return (
		<div style={{ height: "320px", width: "600px" }}>
			<div>
				<BackgroundBorderHV>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between"
						}}>
						<ResultSquareHV />
						<ResultSquareHV />
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							position: "absolute",
							bottom: "0",
							width: "100%"
						}}>
						<ResultSquareHV />
						<ResultSquareHV />
					</div>
				</BackgroundBorderHV>
			</div>

			<div
				style={{
					position: "absolute",
					backgroundColor: "#FEF8E8",
					inset: "10px",
					backgroundImage:
						"linear-gradient(to top, #FFE4A4, #FEF8E8)",
					borderRadius: "10px",
					height: "300px"
				}}>
				<div style={{ height: "325px" }}>
					<div
						style={{
							display: "flex",
							gap: "10px",
							height: "30%",
						}}>
						<div style={{padding: '15px'}}>
							<Label textAlign={'center'} text={"Bò"} height={'70px'} fontSize={'45px'} alignContent={'center'} color={'#FFDB5A'} width={'400%'} />
						</div>
						<div style={{ height: "70px", padding: '15px', paddingLeft: '200px' }}>
							<Volume />
						</div>
					</div>
					<div style={{ height: "65.5%", padding: '15px' }}>
						<Label text={"Di chuyển bằng cách dùng tay và đầu gối."} height={'150px'} width={'95%'} fontPadding={'10px'} fontSize={'20px'} color={'#FFFFFF'} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HanVietPage;