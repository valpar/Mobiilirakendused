import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton
} from '@ionic/react';

const Items: React.FC<{
  title: string;
  description: string;
  id: string;
}> = props => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
        <IonCardSubtitle>
          {props.description}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="ion-text-right">
          <IonButton
            fill="clear"
            color="secondary"
            routerLink={`/notes/${props.id}`}
          >View description</IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default Items;
