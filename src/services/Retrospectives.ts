import { db } from "firebase";
import { getDocs, collection, query, where, doc, onSnapshot } from "firebase/firestore";

export const RetrospectivesService = {
    async getRetrospectivesCard() {
        const q = query(collection(db, "retro-card"));
        const querySnapshot = await getDocs(q);

        const retroCards: RetrospectiveCard[] = [];
        querySnapshot.forEach((doc) => {
            retroCards.push({ id: doc.id, title: doc.data().title });
        });

        return retroCards;
    },

    async getIdeasByRetrospective(retroId: string) {
        const retroCardRef = doc(db, "retro-card", retroId);
        const q = query(collection(db, "ideas"), where("retro-card-id", "==", retroCardRef));
        const querySnapshot = await getDocs(q);

        const ideas: Idea[] = [];
        querySnapshot.forEach((doc) => {
            ideas.push({ id: doc.id, author: doc.data().author, title: doc.data().title, votes: doc.data().votes });
        });

        return ideas;
    },

    observeIdeasByRetrospective(callback: any) {
        const q = query(collection(db, "ideas"));
        onSnapshot(q, callback);
    }
};
