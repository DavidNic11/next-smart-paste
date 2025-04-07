"use client";

import { extractFormData, FormValue } from "./action";

import { useExecuteAsync } from "./use-execute-async";
import { FormElement, getFormFields, updateUncontrolledForm } from "./helpers";

type SmartPasteButtonProps<FormValues extends Record<string, FormValue>> = {
  onExtracted?: (input: FormValues) => void;
};

export function SmartPaste<FormValues extends Record<string, FormValue> = Record<string, FormValue>>({
  onExtracted,
}: SmartPasteButtonProps<FormValues>) {
  const { isExecuting, error, execute } = useExecuteAsync(async (event: React.MouseEvent<HTMLButtonElement>) => {
    const form = event.currentTarget.closest("form");

    if (!form) throw new Error("No form found.");

    const clipboardText = await navigator.clipboard.readText();

    const elements = Array.from(form.elements).filter(
      (element): element is FormElement => element.tagName === "INPUT" || element.tagName === "SELECT"
    );

    const fields = getFormFields(elements);

    const extracted = await extractFormData(clipboardText, fields);

    if (onExtracted) {
      onExtracted(extracted as FormValues);
    } else {
      updateUncontrolledForm(elements, extracted);
    }
  });

  return (
    <div className="mb-4">
      <button type="button" onClick={execute} disabled={isExecuting} className="p-2 rounded bg-black text-white">
        {isExecuting ? "Smart Pasting…" : "Smart Paste"}
      </button>
      {error && <p className="text-red-500 text-sm mt-2">{error?.message}</p>}
    </div>
  );
}
