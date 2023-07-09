import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import dr_logo from './icons/doctor.png';
import vc_logo from './icons/video-call.png';
import ph_logo from './icons/pharmacy.png';
import lt_logo from './icons/research.png';

import * as React from 'react';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" in="True" ref={ref} {...props} />;
});


function NavScrollExample() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="/"><h3>Health Services(Rename)</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Nav.Link href="/Doctors_Dashboard" style={{ 'margin-left': "135px" }}>
                            <img src={dr_logo} alt="Dr" class="dr_logo" />Search Doctors</Nav.Link>
                        <div class="vr" style={{ 'color': 'white' }}></div>
                        <Nav.Link href="/VC_Doctors"><img src={vc_logo} alt="Dr" class="dr_logo" /> Video Consultations</Nav.Link>
                        <div class="vr" style={{ 'color': 'white' }}></div>
                        <Nav.Link href="/Pharmacy"><img src={ph_logo} alt="Dr" class="dr_logo" style={{ "margin-right": '5px' }} /> Pharmacy</Nav.Link>
                        <div class="vr" style={{ 'color': 'white' }}></div>
                        <Nav.Link href="/Lab_Tests"><img src={lt_logo} alt="Dr" class="dr_logo" style={{ "margin-right": '5px' }} /> Lab Tests</Nav.Link>

                        {/* <NavDropdown title="Extra" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Extra
            </Nav.Link> */}
                    </Nav>
                    {/* <a class="btn btn-outline-light login_button" onClick={handleClickOpen} role="button">Login</a>
          <a class="btn btn-outline-light login_button" href="/#" role="button">Register</a> */}

                    <div>
                        <Button variant="outline-light" onClick={handleClickOpen} style={{ 'border-radius': '10px', width: '100px', margin: '5px' }} >
                            Login
                        </Button>
                        <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}
                            keepMounted
                            aria-describedby="alert-dialog-slide-description">
                            <DialogTitle>Login</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                />
                                <TextField
                                    margin="dense"
                                    id="password"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    variant="standard"
                                />

                            </DialogContent>
                            <DialogActions>
                                <Button variant="outline-danger" onClick={handleClose}>Cancel</Button>
                                <Button variant="outline-success" onClick={handleClose}>Login</Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <div>
                        <Button variant="outline-light" onClick={handleClickOpen1} style={{ 'border-radius': '10px', width: '100px', margin: '5px' }} >
                            Register
                        </Button>
                        <Dialog open={open1} onClose={handleClose1} TransitionComponent={Transition}
                            keepMounted
                            aria-describedby="alert-dialog-slide-description">
                            <DialogTitle>Register</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Name"
                                    type="name"
                                    fullWidth
                                    variant="standard"
                                />
                                <TextField
                                    margin="dense"
                                    id="number"
                                    label="Mobile Number"
                                    type="number"
                                    fullWidth
                                    variant="standard"
                                />
                                <TextField
                                    margin="dense"
                                    id="email"
                                    label="Email Address"
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                />
                                <TextField
                                    margin="dense"
                                    id="password"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                    variant="standard"
                                />

                            </DialogContent>
                            <DialogActions>
                                <Button variant="outline-danger" onClick={handleClose1}>Cancel</Button>
                                <Button variant="outline-success" onClick={handleClose1}>Register</Button>
                            </DialogActions>
                        </Dialog>
                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;