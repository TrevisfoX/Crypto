import React from "react";
import {
	Backdrop,
	Box,
	Modal,
	Fade,
	Typography,
	TextField,
	Button,
} from "@mui/material";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 500,
	bgcolor: "background.paper",
	boxShadow: 24,
	p: 4,
	borderRadius: 3,
};

const ModalWindow = ({ open, handleClose }) => {
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<Typography
							variant="h4"
							component="h4"
							sx={{
								mb: 3,
								fontWeight: "bold",
								textAlign: "center",
							}}
						>
							Log in
						</Typography>
						<Box
							component="form"
							sx={{
								"& > :not(style)": { m: 1, width: "25ch" },
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
							}}
							noValidate
						>
							<TextField type="email" label="Email" />
							<TextField
								label="Password"
								type="password"
								autoComplete="current-password"
							/>
							<Button variant="contained">Submit</Button>
						</Box>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
};
export default ModalWindow;
