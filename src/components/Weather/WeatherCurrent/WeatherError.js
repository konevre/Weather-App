import { useState, forwardRef } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const WeatherError = ({error}) => {

    const errorDescr = error.status === 404 ? 
        "Please write the name of the city without mistakes. Good luck!" : 
        "We couldn't download data for you. Please, check your connection.";

    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            sx={{
                "& .MuiDialog-paper": {
                    backgroundColor: "#383838"
                }
            }}
        >
            <DialogTitle sx={{ color: "#DEE0E4" }}>{"Ooops... Something went wrong 🫣"}</DialogTitle>
            <DialogContent >
                <DialogContentText sx={{ color: "#C3C4C3" }} id="alert-dialog-slide-description">
                    {errorDescr}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button sx={{ color: "#90CAFA" }} onClick={handleClose}>Got it</Button>
            </DialogActions>
        </Dialog>
    )
}

export default WeatherError;