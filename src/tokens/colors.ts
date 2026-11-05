export interface ColorTokens {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  onPrimary: string;
  
  secondary: string;
  onSecondary: string;

  background: string;
  surface: string;
  surfaceVariant: string;

  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textInverse: string;

  border: string;
  borderFocused: string;

  success: string;
  onSuccess: string;
  error: string;
  onError: string;
  warning: string;
  onWarning: string;
  info: string;
  onInfo: string;

  ripple: string;
}

export const lightColors: ColorTokens = {
  primary: '#2563EB',
  primaryLight: '#3B82F6',
  primaryDark: '#1D4ED8',
  onPrimary: '#FFFFFF',

  secondary: '#475569',
  onSecondary: '#FFFFFF',

  background: '#F8FAFC',
  surface: '#FFFFFF',
  surfaceVariant: '#F1F5F9',

  textPrimary: '#0F172A',
  textSecondary: '#475569',
  textMuted: '#94A3B8',
  textInverse: '#FFFFFF',

  border: '#CBD5E1',
  borderFocused: '#2563EB',

  success: '#16A34A',
  onSuccess: '#FFFFFF',
  error: '#DC2626',
  onError: '#FFFFFF',
  warning: '#D97706',
  onWarning: '#FFFFFF',
  info: '#0284C7',
  onInfo: '#FFFFFF',

  ripple: 'rgba(37, 99, 235, 0.12)',
};

export const darkColors: ColorTokens = {
  primary: '#3B82F6',
  primaryLight: '#60A5FA',
  primaryDark: '#1D4ED8',
  onPrimary: '#FFFFFF',

  secondary: '#94A3B8',
  onSecondary: '#0F172A',

  background: '#0F172A',
  surface: '#1E293B',
  surfaceVariant: '#334155',

  textPrimary: '#F8FAFC',
  textSecondary: '#94A3B8',
  textMuted: '#64748B',
  textInverse: '#0F172A',

  border: '#334155',
  borderFocused: '#3B82F6',

  success: '#22C55E',
  onSuccess: '#0F172A',
  error: '#EF4444',
  onError: '#FFFFFF',
  warning: '#F59E0B',
  onWarning: '#0F172A',
  info: '#38BDF8',
  onInfo: '#0F172A',

  ripple: 'rgba(59, 130, 246, 0.20)',
};

