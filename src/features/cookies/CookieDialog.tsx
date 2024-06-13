import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useState } from "react";
import { Cookie } from "lucide-react";
import "./cookieDialog.css";

// This component was made to show some basic state management

// Use Jotai to store the cookie-related data and get those values via hooks
const cookiePreference = atomWithStorage("cookiePreference", true, undefined, {
  getOnInit: true,
});

// This atom determines whether to show the dialog on page load
const hasSubmittedCookiePreference = atomWithStorage(
  "hasSubmittedCookiePreference",
  false,
  undefined,
  { getOnInit: true },
);

// Stateful component
export function CookieDialog() {
  const [submitted, setSubmitted] = useAtom(hasSubmittedCookiePreference);
  const [isOpen, setIsOpen] = useState(!submitted);
  const [savedPreference, setSavedPreference] = useAtom(cookiePreference);
  const [isChecked, setIsChecked] = useState(savedPreference);

  return (
    <ControlledCookieDialog
      isOpen={isOpen}
      isChecked={isChecked}
      onCheckedChange={() => setIsChecked(!isChecked)}
      onSubmit={() => {
        setSavedPreference(isChecked);
        setSubmitted(true);
        setIsOpen(false);
      }}
      onTriggerClicked={() => {
        setIsOpen(!isOpen);
      }}
    />
  );
}

interface ControlledCookieDialogProps {
  isOpen: boolean;
  isChecked: boolean;
  onCheckedChange: () => void;
  onSubmit: () => void;
  onTriggerClicked: () => void;
}

// Pure/stateless component
function ControlledCookieDialog({
  isOpen,
  isChecked,
  onCheckedChange,
  onSubmit,
  onTriggerClicked,
}: ControlledCookieDialogProps) {
  return (
    <Popover open={isOpen}>
      <PopoverTrigger
        onClick={onTriggerClicked}
        aria-label="Cookie preferences"
      >
        <Cookie fill="white" className="transition-all hover:-translate-y-1" />
      </PopoverTrigger>
      <PopoverContent
        sideOffset={8}
        collisionPadding={16}
        onOpenAutoFocus={(e) => e.preventDefault()}
        aria-label="Cookie preference dialog"
        align="end"
        className="PopoverContent"
      >
        <div className="max-w-xs space-y-3 rounded-lg border bg-white p-6 shadow-xl">
          <p className="font-bold">This is a fake cookies popup</p>
          <p>
            This website doesn't store any cookies. I just want to know if you
            like to eat cookies?
          </p>
          <p className="text-xs">
            (By continuing to use this site without submitting your preference,
            you agree that you like to eat cookies.)
          </p>
          <div className="space-x-2">
            <input
              aria-labelledby="preferenceLabel"
              type="checkbox"
              checked={isChecked}
              onChange={onCheckedChange}
            />
            <label id="preferenceLabel">Cookies... yum!</label>
          </div>
          <button
            onClick={onSubmit}
            className="rounded bg-blue-600 p-2 text-white transition-all hover:-translate-y-1 active:translate-y-0"
          >
            Submit
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
