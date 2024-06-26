import { createContext, useContext } from "react"
import ActivityStore from "./activityStore"
import CommonStore from "./commonStrore"
import UserStore from "./userStore";
import ModalStore from "./modelStore";
import profileStore from "./profileStore";

interface Store {
    activityStore: ActivityStore;
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
    profileStore: profileStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore : new ModalStore(),
    profileStore: new profileStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}