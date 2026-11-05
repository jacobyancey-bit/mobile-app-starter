import React, { useState } from 'react';
import { AuthScreenRoute } from './types';
import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from '../screens/auth';

export interface AuthNavigatorProps {
  initialRoute?: AuthScreenRoute;
  onAuthenticated?: (userPayload?: unknown) => void;
}

export const AuthNavigator: React.FC<AuthNavigatorProps> = ({
  initialRoute = 'Login',
  onAuthenticated,
}) => {
  const [currentRoute, setCurrentRoute] = useState<AuthScreenRoute>(initialRoute);
  const [isLoading, setIsLoading] = useState(false);

  switch (currentRoute) {
    case 'Register':
      return (
        <RegisterScreen
          isLoading={isLoading}
          onRegister={async (data) => {
            setIsLoading(true);
            try {
              // Non-negotiable scaffolding: Pass to caller hook/handler
              onAuthenticated?.(data);
            } finally {
              setIsLoading(false);
            }
          }}
          onNavigateToLogin={() => setCurrentRoute('Login')}
        />
      );

    case 'ForgotPassword':
      return (
        <ForgotPasswordScreen
          isLoading={isLoading}
          onSubmit={async (_data) => {
            setIsLoading(true);
            try {
              // Scaffolding: Caller attaches auth service
            } finally {
              setIsLoading(false);
            }
          }}
          onNavigateToLogin={() => setCurrentRoute('Login')}
        />
      );

    case 'Login':
    default:
      return (
        <LoginScreen
          isLoading={isLoading}
          onLogin={async (data) => {
            setIsLoading(true);
            try {
              // Non-negotiable scaffolding: Pass to caller hook/handler
              onAuthenticated?.(data);
            } finally {
              setIsLoading(false);
            }
          }}
          onNavigateToRegister={() => setCurrentRoute('Register')}
          onNavigateToForgotPassword={() => setCurrentRoute('ForgotPassword')}
        />
      );
  }
};

