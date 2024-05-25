import { getDatabase, ref, onValue, set } from 'firebase/database';
import firebaseApp from '../firebase/realtimeDataBase'; 

const database = getDatabase(firebaseApp);

const fetchData = (callback) => {
  const dbRef = ref(database, 'Mutuales/');
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const items = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      callback(items);
    } else {
      callback([]); 
    }
  });
};

const saveUserData = async (userId, userData) => {
  try {
    const userRef = ref(database, 'users/' + userId);
    await set(userRef, userData);
    console.log('Datos de usuario guardados correctamente');
  } catch (error) {
    console.error('Error al guardar datos de usuario:', error);
  }
};

export { fetchData, saveUserData };
