import { useState, forwardRef } from 'react';

import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import "./weatherCurrent.scss"

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const WeatherCurrentSkeletonError = () => {
    const [open, setOpen] = useState(true);
    console.log("error")
    const handleClose = () => {
        setOpen(false);
    };

    return (

        <div className="weather__current">
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                sx={{
                    "& .MuiDialog-paper" : {
                        backgroundColor: "#383838"
                    }
                }}
            >
                <DialogTitle sx={{color: "#DEE0E4"}}>{"Ooops... Are sure? 🫣"}</DialogTitle>
                <DialogContent >
                    <DialogContentText sx={{color: "#C3C4C3"}} id="alert-dialog-slide-description">
                        Please write the name of the city without mistakes. Good luck!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button sx={{color: "#90CAFA"}} onClick={handleClose}>Got it</Button>
                </DialogActions>
            </Dialog>
            <div className="weather__current-wrapper">
                <div className="weather__current-city"><Skeleton sx={{ fontSize: "5vh", bgcolor: '#101B2B', width: "80%" }} /></div>
                <div className="weather__current-rain"><Skeleton sx={{ fontSize: "2vh", bgcolor: '#101B2B', width: "80%" }} /></div>
            </div>
            <div className="weather__current-temp"><Skeleton sx={{ fontSize: "7vh", bgcolor: '#101B2B', width: "30%", height: "100%" }} /></div>
            <div className="weather__current-img">
                <Skeleton variant="circular" sx={{ marginTop: "5vh", marginRight: "2vh", height: "20vh", width: "11vw", bgcolor: '#101B2B' }} />
            </div>
        </div>
    )
}

export default WeatherCurrentSkeletonError;