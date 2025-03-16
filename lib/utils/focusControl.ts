"use client";

export default class FocusControl {
  static getFocusableElements(currentElement: Element | null, container: HTMLElement = document.body) {
    if (!currentElement) return null;
    const focusableSelectors = 'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
    return Array.from(container.querySelectorAll<Element>(focusableSelectors)).filter(
      (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
    );
  }

  static getNextFocusableElement(currentElement: Element | null, container?: HTMLElement): Element | null {
    const focusableElements = this.getFocusableElements(currentElement, container);
    if (!focusableElements || !currentElement) {
      return null;
    }

    const currentIndex = focusableElements.indexOf(currentElement);
    return focusableElements[currentIndex + 1] || null;
  }

  static getPreviusFocusableElement(currentElement: Element | null, container?: HTMLElement): Element | null {
    const focusableElements = this.getFocusableElements(currentElement, container);
    if (!focusableElements || !currentElement) {
      return null;
    }

    const currentIndex = focusableElements.indexOf(currentElement);
    return focusableElements[currentIndex - 1] || null;
  }
}
