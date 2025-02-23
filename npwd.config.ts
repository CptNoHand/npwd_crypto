import App from './src/App';
import { AppIcon } from './icon';

const defaultLanguage = 'en';
const localizedAppName = {
  en: 'Crypto Exchange',
};

interface Settings {
  language: 'en';
}

export default (settings: Settings) => ({
  id: 'CRYPTO',
  nameLocale: localizedAppName[settings?.language ?? defaultLanguage],
  color: '#fff',
  backgroundColor: '#ff7300',
  path: '/crypto',
  icon: AppIcon,
  app: App,
});
