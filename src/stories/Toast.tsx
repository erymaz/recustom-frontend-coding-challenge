"use client";
import { Box, Snackbar } from "@mui/material";
import { CheckCircle, WarningRounded, Check, NotificationsNoneOutlined, Close } from "@mui/icons-material";
import { Button } from "./Button";
import './toast.css';

export enum EToastType {
  SUCCESS = 'SUCCESS',
  SUCCESS_WITH_ACTION = "SUCCESS_WITH_ACTION",
  DANGER = 'DANGER',
  DANGER_WITH_ACTION = 'DANGER_WITH_ACTION',
};

interface ToastPosition {
  vertical: "bottom" | "top";
  horizontal: "left" | "center" | "right";
}

type ToastProps = {
  open: boolean;
  type: EToastType;
  message: string;
  position?: ToastPosition;
  actionText?: string;
  onAction?: () => void;
  onClose?: () => void;
};

export const Toast = ({
  open,
  type,
  message,
  position = {
    vertical: 'top',
    horizontal: 'right',
  },
  actionText,
  onAction,
  onClose
}: ToastProps) => {
  const { vertical, horizontal } = position;

  const typeKey = type.includes('SUCCESS')? 'success' : 'danger'
  const hasAction = type.includes('ACTION');

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose} anchorOrigin={{ vertical, horizontal }}>
      <div
        className={['toast-container', `toast-${typeKey}-border-color`].join(' ')}
      >
        <div className={`toast-${typeKey}--content`} data-testid="type-content">
          { hasAction &&
            <>
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: 1 }}
                className="toast-content--title"
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }} >
                  {typeKey === 'success' && <CheckCircle sx={{ width: 20, marginRight: 1 }} />}
                  {typeKey === 'danger' && <WarningRounded sx={{ width: 20, marginRight: 1 }} />}
                  <span>{ typeKey === 'success' ? 'Success' : 'Attention' }</span>
                </Box>
                <Close sx={{ width: 20, cursor: 'pointer' }} onClick={onClose} data-testid="close-button" />
              </Box>
              <div className="toast-content--message">
                { message }
              </div>
              <div className="toast-action--button">
                <Button
                  primary
                  backgroundColor={ typeKey === 'success'? '#00AC80' : '#FF6464' }
                  size="small"
                  label={actionText || "Take action"}
                  onClick={onAction}
                />
              </div>
            </>
          }
          { !hasAction &&
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', marginRight: 1 }}
                className="toast-content--title"
              >
                <div className={`toast-${typeKey}--icon`}>
                  {typeKey === 'success' && <Check sx={{ width: 30}} />}
                  {typeKey === 'danger' && <NotificationsNoneOutlined  sx={{ width: 30}} />}
                </div>
                <span>{ message }</span>
              </Box>
              <Close sx={{ width: 20, cursor: 'pointer' }} onClick={onClose} data-testid="close-button" />
            </Box>
          }
        </div>
      </div>
    </Snackbar>
  );
};
