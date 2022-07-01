import { Subject } from "rxjs";

const menuSubject = new Subject();

export const menuService = {
  setOpen,
  menuStatus,
};

function menuStatus() {
  return menuSubject.asObservable();
}

function setOpen(isOpen) {
  return menuSubject.next(isOpen);
}
