"use client";
import Image from "next/image";
import { Snackbar } from "@mui/material";
import { Close, PersonRounded } from "@mui/icons-material";
import { Button } from "./Button";
import './customToast.css';

interface CustomToastPosition {
  vertical: "bottom" | "top";
  horizontal: "left" | "center" | "right";
}

type CustomToastProps = {
  open: boolean;
  title: string;
  message: string;
  avatar?: string;
  position?: CustomToastPosition;
  actionText?: string;
  onAction?: () => void;
  onClose?: () => void;
};

export const CustomToast = ({
  open,
  title,
  message,
  avatar,
  position = {
    vertical: 'top',
    horizontal: 'right',
  },
  actionText,
  onAction,
  onClose
}: CustomToastProps) => {
  const { vertical, horizontal } = position;

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose} anchorOrigin={{ vertical, horizontal }}>
      <div className="custom-toast-container" data-testid="toast-container">
        <div className="custom-toast--content">
          <div className="custom-toast--avatar">
            {!avatar &&
              <PersonRounded  sx={{ width: "100%"}} />
            }
            {avatar &&
              <Image
                src={avatar}
                alt={"User Avatar"}
                width={32}
                height={32}
              />
            }
          </div>
          <div className="custom-toast--text">
            <div className="custom-toast--title">
              { title }
            </div>
            <div className="custom-toast--message">
              { message }
            </div>
            <div className="custom-toast--action">
              <Button
                backgroundColor="#FFFF00"
                size="small"
                label={actionText || "Take action"}
                onClick={onAction}
              />
            </div>
          </div>
        </div>
        <Close sx={{ width: 20, cursor: 'pointer', color: '#6B7280' }} onClick={onClose} data-testid="close-button" />
      </div>
    </Snackbar>
  );
};
