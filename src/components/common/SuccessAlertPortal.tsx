import React, { useEffect, useState } from 'react';
import { AlertPortalProps } from '../../types/common/AlertPortalProps.ts';
import { createPortal } from 'react-dom';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert.tsx';


const SuccessAlertPortal: React.FC<AlertPortalProps> = ({ isOpen, onClose, title, description }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsClosing(true);
        setTimeout(() => {
          onClose();
          setIsClosing(true);
        }, 50000);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed w-[300] mx-20 bg-white">
      <Alert className="">
        <AlertTitle className="">{title}</AlertTitle>
        <AlertDescription className="font-bold">{description}</AlertDescription>
      </Alert>
    </div>,
    document.getElementById('myKittenMain') || document.body,
  );
};

export default SuccessAlertPortal;