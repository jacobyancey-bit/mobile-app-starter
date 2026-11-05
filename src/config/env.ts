export interface AppConfig {
  appName: string;
  env: 'development' | 'staging' | 'production';
  apiBaseUrl: string;
  androidPackageName: string;
  enableAnalytics: boolean;
}

export const Config: AppConfig = {
  appName: 'Mobile App Starter',
  env: (process.env.APP_ENV as AppConfig['env']) || 'development',
  apiBaseUrl: process.env.API_BASE_URL || 'https://api.example.com/v1',
  androidPackageName: process.env.ANDROID_PACKAGE_NAME || 'com.starter.mobileapp',
  enableAnalytics: process.env.APP_ENV === 'production',
};

