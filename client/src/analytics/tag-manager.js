import TagManager from 'react-gtm-module';
import { getGTMId } from './analytics-settings';

if (typeof document !== 'undefined') {
  TagManager.initialize({ gtmId: getGTMId() });
}

export default TagManager;
