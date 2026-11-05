import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../tokens';
import {
  ScreenContainer,
  AppText,
  AppTextInput,
  AppButton,
} from '../../components/common';

export interface ForgotPasswordFormData {
  email: string;
}

export interface ForgotPasswordScreenProps {
  onSubmit?: (data: ForgotPasswordFormData) => void | Promise<void>;
  onNavigateToLogin?: () => void;
  isLoading?: boolean;
}

export const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({
  onSubmit,
  onNavigateToLogin,
  isLoading = false,
}) => {
  const { spacing, colors } = useTheme();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const validate = (): boolean => {
    if (!email.trim()) {
      setError('Email address is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Enter a valid email address');
      return false;
    }
    setError(undefined);
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    await onSubmit?.({ email });
    setSubmitted(true);
  };

  return (
    <ScreenContainer contentContainerStyle={[styles.container, { padding: spacing.xl }]}>
      <View style={[styles.header, { marginBottom: spacing['2xl'] }]}>
        <AppText variant="titleLarge" style={styles.title}>
          Reset Password
        </AppText>
        <AppText variant="bodyMedium" color={colors.textSecondary} style={styles.subtitle}>
          Enter your email and we'll send you instructions to reset your password.
        </AppText>
      </View>

      {submitted ? (
        <View style={styles.successContainer}>
          <View
            style={[
              styles.badge,
              { backgroundColor: colors.surfaceVariant, marginBottom: spacing.lg },
            ]}
          >
            <AppText variant="bodyMedium" color={colors.success} style={{ fontWeight: '600' }}>
              Check your inbox
            </AppText>
          </View>
          <AppText
            variant="bodySmall"
            color={colors.textSecondary}
            style={{ textAlign: 'center', marginBottom: spacing.xl }}
          >
            If an account exists for {email}, a password reset link has been dispatched.
          </AppText>
          <AppButton
            title="Back to Sign In"
            variant="outline"
            onPress={() => onNavigateToLogin?.()}
          />
        </View>
      ) : (
        <View style={styles.form}>
          <AppTextInput
            label="Email Address"
            placeholder="name@example.com"
            value={email}
            onChangeText={(val) => {
              setEmail(val);
              if (error) setError(undefined);
            }}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            errorMessage={error}
          />

          <AppButton
            title="Send Instructions"
            variant="primary"
            onPress={handleSubmit}
            loading={isLoading}
            style={{ marginTop: spacing.md, marginBottom: spacing.lg }}
          />

          <View style={styles.footer}>
            <AppButton
              title="Return to Sign In"
              variant="text"
              onPress={() => onNavigateToLogin?.()}
              style={styles.inlineButton}
            />
          </View>
        </View>
      )}
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
  successContainer: {
    alignItems: 'center',
    width: '100%',
  },
  badge: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  inlineButton: {
    minHeight: 36,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});

