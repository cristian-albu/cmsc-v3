import FocusControl from "@/lib/utils/focusControl";
import { KeyboardEvent, RefObject } from "react";

export function handleArrows(
  event: KeyboardEvent<HTMLElement>,
  refs: {
    homeBtnRef: RefObject<HTMLAnchorElement | null>;
    langBtnRef: RefObject<HTMLButtonElement | null>;
  }
) {
  switch (event.key) {
    case "ArrowDown": {
      event.preventDefault();
      const nextElement = FocusControl.getNextFocusableElement(document.activeElement);
      if (nextElement instanceof HTMLElement) {
        nextElement.focus();
      }
      return;
    }
    case "ArrowUp": {
      event.preventDefault();
      const prevElement = FocusControl.getPreviusFocusableElement(document.activeElement);
      if (prevElement instanceof HTMLElement) {
        prevElement.focus();
      }
      return;
    }
    case "ArrowLeft": {
      event.preventDefault();
      refs.homeBtnRef.current?.focus();
      return;
    }
    case "ArrowRight": {
      event.preventDefault();
      refs.langBtnRef.current?.focus();
      return;
    }
    default:
      return;
  }
}

export function handleTabs(
  event: KeyboardEvent<HTMLElement>,
  isMenuOpen: boolean,
  refs: { langBtnRef: RefObject<HTMLButtonElement | null>; menuBtnRef: RefObject<HTMLButtonElement | null> }
) {
  const activeElement = document.activeElement;

  if (event.shiftKey) {
    const shouldJumpToMenu = activeElement === refs.langBtnRef.current;
    if (refs.menuBtnRef.current && shouldJumpToMenu) {
      event.preventDefault();
      refs.menuBtnRef.current.focus();
    }
  } else {
    const shouldJumpToLang = activeElement?.id === "last" || (activeElement === refs.menuBtnRef.current && !isMenuOpen);
    if (refs.langBtnRef.current && shouldJumpToLang) {
      event.preventDefault();
      refs.langBtnRef.current.focus();
    }
  }
}
