import { IonButton, IonCol, IonContent, IonDatetime, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonModal, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';

const AddEditTaskModal: React.FC<{
    show: boolean,
    onCancel: () => void,
    onSave: (title: string, description: string) => void
}> = (props) => {
    const [error, setError] = useState('');

    const titleRef = useRef<HTMLIonInputElement>(null);
    const descRef = useRef<HTMLIonInputElement>(null);
        
    const saveHandler = () => {
        const enteredTitle = titleRef.current!.value;
        const enteredDesc = descRef.current!.value;
    
        if (
          !enteredTitle ||
          !enteredDesc ||
          enteredTitle.toString().trim().length === 0 ||
          enteredDesc.toString().trim().length === 0
        ) {
          setError('Please enter a valid title and description.');
          return;
        }
        setError('');
    
        props.onSave(enteredTitle.toString(), enteredDesc.toString());
      };
    
    return (
        <IonModal isOpen={props.show}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Add Note</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Note Title</IonLabel>
                                <IonInput type="text" ref={titleRef}/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Description</IonLabel>
                                <IonInput type="text" ref={descRef}/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    {error && (
                        <IonRow className="ion-text-center">
                        <IonCol>
                            <IonText color="danger">
                            <p>{error}</p>
                            </IonText>
                        </IonCol>
                        </IonRow>
                    )}                    
                    <IonRow className='ion-text-center'>
                        <IonCol>
                            <IonButton fill='clear' color='dark' onClick={props.onCancel}>Cancel</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand='block' color='secondary' onClick={saveHandler}>Save</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonModal>
    );
};

export default AddEditTaskModal;
