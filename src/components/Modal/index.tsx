import React, { ReactNode, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from '@mui/material';

export type ModalProps = {
  width?: number;
  onClose?: () => void;
  title?: ReactNode;
  trigger?: JSX.Element;
  onOk?: () => void;
  children?: ReactNode;
};

export const Modal: React.FC<ModalProps> = ({
  onClose,
  title,
  trigger,
  onOk,
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {trigger &&
        React.cloneElement(trigger, {
          onClick: () => setOpen(true),
        })}
      <Dialog
        open={open}
        fullWidth
        maxWidth={'sm'}
        onClose={() => {
          setOpen(false);
          if (onClose) onClose();
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Box py={3}>{children}</Box>
        </DialogContent>
        <DialogActions>
          <Button variant={'outlined'} onClick={() => setOpen(false)}>
            cancel
          </Button>
          <Button
            variant={'contained'}
            onClick={() => {
              setOpen(false);
              if (onOk) onOk();
            }}
          >
            confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Modal.defaultProps = {
  width: 500,
};
