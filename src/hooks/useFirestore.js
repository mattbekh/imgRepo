import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect( () => {
        // Listen to data updates from database
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((snap) => {
            let documents = [];
            // access each document and push
            snap.forEach(doc => {

                documents.push({...doc.data(), id: doc.id});

            });
            setDocs(documents);
        });

    return () => unsub();
    }, [collection])

    return { docs };
} 

export default useFirestore;