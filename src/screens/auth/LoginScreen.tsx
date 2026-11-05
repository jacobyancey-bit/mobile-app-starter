import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../tokens';
import {
  ScreenContainer,
  AppText,
  AppTextInput,
  AppButton,
} from '../../components/common';

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginScreenProps {
  onLogin?: (data: LoginFormData) => void | Promise<void>;
  onNavigateToRegister?: () => void;
  onNavigateToForgotPassword?: () => void;
  isLoading?: boolean;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onLogin,
  onNavigateToRegister,
  onNavigateToForgotPassword,
  isLoading = false,
}) => {
  const { spacing, colors } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = (): boolean => {
    const nextErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      nextErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      nextErrors.email = 'Enter a valid email address';
    }

    if (!password) {
      nextErrors.password = 'Password is required';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleLoginPress = () => {
    if (!validate()) return;
    onLogin?.({ email, password });
  };

  return (
    <ScreenContainer contentContainerStyle={[styles.container, { padding: spacing.xl }]}>
      <View style={[styles.header, { marginBottom: spacing['3xl'] }]}>
        <AppText variant="titleLarge" style={styles.title}>
          Welcome Back
        </AppText>
        <AppText variant="bodyMedium" color={colors.textSecondary} style={styles.subtitle}>
          Sign in to access your account
        </AppText>
      </View>

      <View style={styles.form}>
        <AppTextInput
          label="Email Address"
          placeholder="name@example.com"
          value={email}
          onChangeText={(val) => {
            setEmail(val);
            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          errorMessage={errors.email}
        />

        <AppTextInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={(val) => {
            setPassword(val);
            if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
          }}
          isPassword
          autoCapitalize="none"
          autoComplete="password"
          errorMessage={errors.password}
        />

        <View style={[styles.forgotPasswordContainer, { marginBottom: spacing.xl }]}>
          <AppButton
            title="Forgot password?"
            variant="text"
            onPress={() => onNavigateToForgotPassword?.()}
            style={styles.inlineButton}
          />
        </View>

        <AppButton
          title="Sign In"
          variant="primary"
          onPress={handleLoginPress}
          loading={isLoading}
          style={{ marginBottom: spacing.lg }}
        />

        <View style={styles.footer}>
          <AppText variant="bodySmall" color={colors.textSecondary}>
            Don't have an account?{' '}
          </AppText>
          <AppButton
            title="Sign Up"
            variant="text"
            onPress={() => onNavigateToRegister?.()}
            style={styles.inlineButton}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  header: {
    alignItems: 'flex-start',
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    lineHeight: 22,
  },
  form: {
    width: '100%',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  inlineButton: {
    minHeight: 36,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});

