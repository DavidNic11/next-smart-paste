import { FormField, FormValue, SelectField } from "./action";

export type FormElement = HTMLInputElement | HTMLSelectElement;

const inputTypesToIgnore = ["button", "submit", "image", "reset", "file", "password"];

export const getFormFields = (elements: FormElement[]): FormField[] => {
  return elements
    .filter(({ name, type }) => name && !inputTypesToIgnore.includes(type))
    .map((element) => {
      const additionalSelectFields: Partial<SelectField> = {};

      if ("options" in element) {
        additionalSelectFields.options = Array.from(element.options).map(({ value }) => value);
      }

      return {
        name: element.name,
        type: element.type || "text",
        description: element?.getAttribute("data-sp-description"),
        ...additionalSelectFields,
      };
    });
};

export const updateUncontrolledForm = (
  elements: FormElement[],
  extractedFormValues: Record<string, FormValue>
): void => {
  for (const element of elements) {
    if (element.name in extractedFormValues) {
      const value = extractedFormValues[element.name];

      if (element.type === "checkbox") {
        element.checked = Boolean(value);
      } else {
        element.value = String(value);
      }
    }
  }
};
