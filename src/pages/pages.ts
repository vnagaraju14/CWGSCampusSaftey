import { ResourcesListMasterPage } from './resources-list-master/resources-list-master';
import { SettingsPage } from './settings/settings';
import { SurveyListMasterPage} from './survey-list-master/survey-list-master';
import { TabsPage } from './tabs/tabs';
import { TutorialPage } from './tutorial/tutorial';
import { HelpPage } from './help/help';

// The page the user lands on after opening the app and without a session
export const FirstRunPage = TutorialPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = ResourcesListMasterPage;
export const Tab2Root = HelpPage;
export const Tab3Root = SurveyListMasterPage;
export const Tab4Root = SettingsPage;