'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-24 right-4 z-[100] animate-slide-in">
      <div className="backdrop-blur-xl bg-gradient-to-r from-green-500/90 to-emerald-500/90 text-white px-6 py-4 rounded-2xl shadow-2xl shadow-green-500/50 border border-white/20 flex items-center gap-3 min-w-[300px]">
        <CheckCircle className="w-6 h-6 flex-shrink-0" />
        <span className="flex-1 font-semibold">{message}</span>
        <button onClick={onClose} className="hover:bg-white/20 rounded-lg p-1 transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

interface ToastContextType {
  showToast: (message: string) => void;
}

import { createContext, useContext } from 'react';

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState({ message: '', show: false });

  const showToast = (message: string) => {
    setToast({ message, show: true });
  };

  const hideToast = () => {
    setToast({ ...toast, show: false });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast message={toast.message} show={toast.show} onClose={hideToast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
