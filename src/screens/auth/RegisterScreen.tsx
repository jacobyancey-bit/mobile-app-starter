import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../tokens';
import {
  ScreenContainer,
  AppText,
  AppTextInput,
  AppButton,
} from '../../components/common';

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterScreenProps {
  onRegister?: (data: RegisterFormData) => void | Promise<void>;
  onNavigateToLogin?: () => void;
  isLoading?: boolean;
}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({
  onRegister,
  onNavigateToLogin,
  isLoading = false,
}) => {
  const { spacing, colors } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validate = (): boolean => {
    const nextErrors: typeof errors = {};

    if (!name.trim()) {
      nextErrors.name = 'Full name is required';
    }

    if (!email.trim()) {
      nextErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      nextErrors.email = 'Enter a valid email address';
    }

    if (!password) {
      nextErrors.password = 'Password is required';
    } else if (password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters';
    }

    if (password !== confirmPassword) {
      nextErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleRegisterPress = () => {
    if (!validate()) return;
    onRegister?.({ name, email, password, confirmPassword });
  };

  return (
    <ScreenContainer contentContainerStyle={[styles.container, { padding: spacing.xl }]}>
      <View style={[styles.header, { marginBottom: spacing['2xl'] }]}>
        <AppText variant="titleLarge" style={styles.title}>
          Create Account
        </AppText>
        <AppText variant="bodyMedium" color={colors.textSecondary} style={styles.subtitle}>
          Sign up to get started
        </AppText>
      </View>

      <View style={styles.form}>
        <AppTextInput
          label="Full Name"
          placeholder="John Doe"
          value={name}
          onChangeText={(val) => {
            setName(val);
            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
          }}
          autoCapitalize="words"
          autoComplete="name"
          errorMessage={errors.name}
        />

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
          placeholder="At least 8 characters"
          value={password}
          onChangeText={(val) => {
            setPassword(val);
            if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
          }}
          isPassword
          autoCapitalize="none"
          autoComplete="password-new"
          errorMessage={errors.password}
        />

        <AppTextInput
          label="Confirm Password"
          placeholder="Re-enter your password"
          value={confirmPassword}
          onChangeText={(val) => {
            setConfirmPassword(val);
            if (errors.confirmPassword) {
              setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
            }
          }}
          isPassword
          autoCapitalize="none"
          autoComplete="password-new"
          errorMessage={errors.confirmPassword}
        />

        <AppButton
          title="Sign Up"
          variant="primary"
          onPress={handleRegisterPress}
          loading={isLoading}
          style={{ marginTop: spacing.md, marginBottom: spacing.lg }}
        />

        <View style={styles.footer}>
          <AppText variant="bodySmall" color={colors.textSecondary}>
            Already have an account?{' '}
          </AppText>
          <AppButton
            title="Sign In"
            variant="text"
            onPress={() => onNavigateToLogin?.()}
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

