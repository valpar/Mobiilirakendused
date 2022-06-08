import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCheckbox,
  IonList,
  IonItem,
  IonLabel,
  IonItemDivider,
} from '@ionic/react';

const checkboxList = [
  { val: 'Voodi tegemine', isChecked: false },
  { val: 'Hambapesu', isChecked: false },
  { val: 'Duši all käimine', isChecked: false },
  { val: 'Hommikusöök', isChecked: false },
  { val: 'Tööle/kooli minek', isChecked: false },
  { val: 'Töötamine/õppimine', isChecked: false },
  { val: 'Lõuna', isChecked: false },
  { val: 'Töötamine/õppimine', isChecked: false },
  { val: 'Koju minek', isChecked: false },
  { val: 'Kodutööd', isChecked: false },
  { val: 'Hobid', isChecked: false },
  { val: 'Hambapesu', isChecked: false },
  { val: 'Magama minek', isChecked: false },
];

export const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Daily to-do list</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {checkboxList.map(({ val, isChecked }, i) => (
            <IonItem key={i}>
              <IonLabel>{val}</IonLabel>
              <IonCheckbox
                color='success'
                slot='end'
                value={val}
                checked={isChecked}
              />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
