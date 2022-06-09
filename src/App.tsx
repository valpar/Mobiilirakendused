import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { checkbox, ellipse, list, pencil, square } from 'ionicons/icons';
import Todo from './pages/Todo';
import Notes from './pages/Notes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import TodoContextProvider from './data/TodoContextProvider';
import NoteDetails from './pages/NoteDetails';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <TodoContextProvider>
      <IonTabs>
        <IonRouterOutlet id="main">
          <Route exact path='/Todo'>
            <Todo />
          </Route>
          <Route exact path='/notes'>
            <Notes />
          </Route>
          <Route path="/notes/:noteId">
            <NoteDetails />
          </Route>
          <Redirect path="" to="/Todo" exact />
        </IonRouterOutlet>

        <IonTabBar slot='bottom'>
          <IonTabButton tab='Todo' href='/Todo'>
            <IonIcon icon={checkbox} />
            <IonLabel>To-do</IonLabel>
          </IonTabButton>
          <IonTabButton tab='Notes' href='/notes'>
            <IonIcon icon={list} />
            <IonLabel>Notes</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      </TodoContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
