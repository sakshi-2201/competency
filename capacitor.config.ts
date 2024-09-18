import { CapacitorConfig } from '@capacitor/cli';
import { PushNotifications } from '@capacitor/push-notifications';

const config: CapacitorConfig = {
  appId: 'push.notification.test',
  appName: 'firebaseAuthApp',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
};

export default config;
