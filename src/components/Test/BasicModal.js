import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import _ from "lodash";
import Formdata from "./Formdata";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const BasicModal = (props) => {
	const { handleClose, data, handleChange, handleUpdate } = props;

	const dataConfig = {
		title: data.title || "",
		body: data.body || "",
	};

	const [open, setOpen] = useState(true);
	const handleCloseModal = () => {
		setOpen(false);
		handleClose();
	};

	return (
		<Modal open={open} onClose={handleCloseModal}>
			<Box sx={style}>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handleUpdate(data.id);
					}}
				>
					<label for="title">Title</label>
					<input type="text" id="title" onChange={handleChange} defaultValue={dataConfig.title} />
					<br />
					<label for="body">Body</label>
					<textarea id="body" style={{ width: "10rem", height: "10rem" }} onChange={handleChange} defaultValue={dataConfig.body}></textarea>
					<br />
					<input type="submit" value="update" />
				</form>
			</Box>
		</Modal>
	);
};
export default BasicModal;
