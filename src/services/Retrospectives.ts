import { db } from "firebase";
import { getDocs, collection } from "firebase/firestore";

export const RetrospectivesService = {
    async getRetrospectivesCard() {
        return await getDocs(collection(db, "retro-card"));
    }
};
