import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import TodoContext from '../data/todo-context';

const TodoDetails: React.FC = () => {
  const selectedTodoId = useParams<{ noteId: string }>().noteId;
  const todosCtx = useContext(TodoContext);

  const selectedTodo = todosCtx.todos.find(c => c.id === selectedTodoId);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/'/>
          </IonButtons>
          <IonTitle>{selectedTodo ? selectedTodo.title : 'No note found!'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{selectedTodo ? selectedTodo.title : 'No note found!'}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h2>Todo Details</h2>
      </IonContent>
    </IonPage>
  );
};

export default TodoDetails;
