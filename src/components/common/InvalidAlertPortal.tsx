import React, { useEffect, useState } from 'react';
import { AlertPortalProps } from '../../types/common/AlertPortalProps.ts';
import { createPortal } from 'react-dom';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert.tsx';
import { AlertCircle } from 'lucide-react';


const InvalidAlertPortal: React.FC<AlertPortalProps> = ({ isOpen, onClose, title, description }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsClosing(true);
        setTimeout(() => {
          onClose();
          setIsClosing(true);
        }, 1000);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-x-0 top-10 flex justify-center items-start pt-4 z-50">
      <div className={`fixed bg-white ${isOpen ? 'animate-in fade-in-0 slide-in-from-top-10' : 'animate-out fade-out-10 slide-out-to-bottom-10'}`}>
        <Alert variant="destructive" className="">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle className="font-medium">{title}</AlertTitle>
          <AlertDescription className="font-normal">{description}</AlertDescription>
        </Alert>
      </div>
    </div>,
    document.getElementById('myKittenMain') || document.body,
  );
};

export default InvalidAlertPortal;