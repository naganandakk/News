import React from 'react';
import MatModal from '@material-ui/core/Modal';

export default function Modal(props) {
    return (
        <MatModal
            aria-labelledby={props.title || "app-modal-title"}
            aria-describedby={props.description || "app-modal-description"}
            open={props.open}
            onClose={props.handleClose || null }
            onBackdropClick={props.onBackdropClick || null}
        >
            {props.children}
        </MatModal>
    )
}