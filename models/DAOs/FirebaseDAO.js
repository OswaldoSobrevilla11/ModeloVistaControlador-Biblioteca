import { db } from "../firebase/firebaseConfig.js";
import { collection, query, where, getDocs, addDoc, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

export default class FirebaseDAO {
    static async agregarDocumento(coleccion, datos) {
        const ref = collection(db, coleccion);
        return await addDoc(ref, datos);
    }

    static async obtenerDocumentos(coleccion) {
        const ref = collection(db, coleccion);
        const snapshot = await getDocs(ref);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    static async buscarDocumento(coleccion, campo, valor) {
        const ref = collection(db, coleccion);
        const consulta = query(ref, where(campo, "==", valor));
        const snapshot = await getDocs(consulta);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    static async actualizarDocumento(coleccion, id, datos) {
        const ref = doc(db, coleccion, id);
        return await updateDoc(ref, datos);
    }

    static async eliminarDocumento(coleccion, id) {
        const ref = doc(db, coleccion, id);
        return await deleteDoc(ref);
    }
}
