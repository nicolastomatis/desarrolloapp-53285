// services/firebaseService.js
import { database } from '../firebase/realtimeDataBase';
import { ref, onValue } from 'firebase/database';

const fetchData = (callback) => {
    const dbRef = ref(database, 'Mutuales/');
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log('Data from Firebase:', data); // Añade este log para verificar los datos
      if (data) {
        const items = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        callback(items);
      } else {
        callback([]); // Retorna un array vacío si no hay datos
      }
    });
  };
  
  export { fetchData };