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
          Description{' '}
          {props.description.toString}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="ion-text-right">
          <IonButton
            fill="clear"
            color="secondary"
            routerLink={`/courses/${props.id}`}
          >View description</IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default Items;
