import UserStore from "../models/userStore";
import CommonStore from "./CommonStore";
import ActivityStore from "./activityStore";
import { useContext, createContext } from "react";
import ModalStore from "./modalStore";

interface Store {
  activityStore: ActivityStore;
  commonStore: CommonStore;
  userStore: UserStore;
  modalStore: ModalStore;
}

export const store: Store = {
  activityStore: new ActivityStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore(),
  modalStore: new ModalStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
