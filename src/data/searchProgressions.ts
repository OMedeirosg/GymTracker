import { collection, getDocs, Timestamp } from "firebase/firestore";

import { Progressions } from "@/types/ProgressionsData";
import db from "@/lib/firebase/config";

export const fetchProgressions = async (): Promise<Progressions[]> => {
    const querySnapshot = await getDocs(collection(db, "progressions"));

    return querySnapshot.docs.map((doc) => {
        const data = doc.data();

        return {
            id: doc.id,
            name: data.name,
            dataCreation: data.dataCreation instanceof Timestamp ? data.dataCreation.toDate() : new Date(),
            dataStart: data.dataStart instanceof Timestamp ? data.dataStart.toDate() : new Date(),
            dataUpdated: data.dataUpdated instanceof Timestamp ? data.dataUpdated.toDate() : new Date(),
        };
    });
};
