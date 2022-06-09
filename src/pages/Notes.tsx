import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, 
  IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, 
  IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import React, { useContext, useState } from 'react';
import Item from '../components/Items';

import TodosContext from '../data/todo-context';
import AddTaskModal from '../modals/AddTaskModal';

const Notes: React.FC = () => {

  const [isAdding, setIsAdding] = useState<boolean>(false);

  const todosCtx = useContext(TodosContext);

  const startAddTaskHandler = () => {
    setIsAdding(true);
  }

  const cancelAddTaskHandler = () => {
    setIsAdding(false);
  }

  const saveAddTaskHandler = (title: string, description: string) => {
    todosCtx.addTask(title, description);
    setIsAdding(false);
  }

  return (
    <React.Fragment>
      <AddTaskModal 
        show={isAdding} 
        onCancel={cancelAddTaskHandler} 
        onSave={saveAddTaskHandler}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Daily notes</IonTitle>
            {!isPlatform('android') && (
            <IonButtons slot="end">
              <IonButton onClick={startAddTaskHandler}>
                <IonIcon slot='icon-only' icon={addOutline}/>
              </IonButton>
            </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Daily notes</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonGrid>
            {todosCtx.todos.map(item => (
              <IonRow key={item.id}>
                <IonCol size-md="4" offset-md="4">
                <Item
                    title={item.title}
                    id={item.id}
                    description={item.description}
                  />
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
          {isPlatform('android') && (
            <IonFab horizontal='end' vertical='bottom' slot="fixed">
              <IonFabButton onClick={startAddTaskHandler} >
                <IonIcon icon={addOutline}/>
              </IonFabButton>
            </IonFab>
            )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Notes;
