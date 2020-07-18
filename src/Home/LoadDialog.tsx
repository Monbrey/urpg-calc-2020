import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import React from "react";

interface LoadDialogProps {
    open: boolean;
    handleClose: () => void;
}

function LoadDialog(props: LoadDialogProps) {
    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogContent>
                <TextField autoFocus margin="dense" id="battle-code" label="Battle Code" type="text" fullWidth />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Load
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LoadDialog;