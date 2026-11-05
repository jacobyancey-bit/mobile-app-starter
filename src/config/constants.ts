import { Platform, StatusBar } from 'react-native';

export const isAndroid = Platform.OS === 'android';

export const ANDROID_STATUS_BAR_HEIGHT = isAndroid ? StatusBar.currentHeight || 24 : 0;

export const LAYOUT = {
  MAX_CONTENT_WIDTH: 480,
  TOUCH_TARGET_MIN_SIZE: 48, // Material Design accessible touch target
};

