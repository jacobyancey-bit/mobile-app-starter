import React, { useState } from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  Pressable,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { useTheme } from '../../tokens';
import { AppText } from './AppText';

export interface AppTextInputProps extends TextInputProps {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  containerStyle?: ViewStyle;
  isPassword?: boolean;
}

export const AppTextInput: React.FC<AppTextInputProps> = ({
  label,
  helperText,
  errorMessage,
  containerStyle,
  isPassword = false,
  value,
  onChangeText,
  placeholder,
  ...rest
}) => {
  const { colors, spacing, radii } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const hasError = Boolean(errorMessage);

  const getBorderColor = (): string => {
    if (hasError) return colors.error;
    if (isFocused) return colors.borderFocused;
    return colors.border;
  };

  return (
    <View style={[styles.container, { marginBottom: spacing.md }, containerStyle]}>
      {Boolean(label) && (
        <AppText
          variant="bodySmall"
          color={hasError ? colors.error : colors.textSecondary}
          style={{ marginBottom: spacing.xs, fontWeight: '500' }}
        >
          {label}
        </AppText>
      )}

      <View
        style={[
          styles.inputWrapper,
          {
            backgroundColor: colors.surface,
            borderColor: getBorderColor(),
            borderRadius: radii.md,
            paddingHorizontal: spacing.md,
          },
        ]}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          secureTextEntry={isPassword && !isPasswordVisible}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[
            styles.input,
            {
              color: colors.textPrimary,
              paddingVertical: spacing.md,
            },
          ]}
          {...rest}
        />

        {isPassword && (
          <Pressable
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            hitSlop={8}
            style={styles.actionButton}
          >
            <AppText variant="caption" color={colors.primary}>
              {isPasswordVisible ? 'HIDE' : 'SHOW'}
            </AppText>
          </Pressable>
        )}
      </View>

      {hasError ? (
        <AppText
          variant="caption"
          color={colors.error}
          style={{ marginTop: spacing.xs }}
        >
          {errorMessage}
        </AppText>
      ) : helperText ? (
        <AppText
          variant="caption"
          color={colors.textMuted}
          style={{ marginTop: spacing.xs }}
        >
          {helperText}
        </AppText>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    minHeight: 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  actionButton: {
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
});

