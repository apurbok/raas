"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const fieldShell =
  "peer w-full rounded-lg border-0 bg-paper px-4 text-sm text-text outline-none transition-all duration-300 placeholder:text-transparent shadow-[inset_4px_4px_8px_#c5cedd,inset_-4px_-4px_8px_#fff] focus:shadow-[inset_5px_5px_10px_#c5cedd,inset_-5px_-5px_10px_#fff]";

const labelBase =
  "pointer-events-none absolute left-3.5 origin-left bg-transparent text-sm text-text-muted transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

const labelFloated =
  "top-2 translate-y-0 scale-[0.78] font-medium tracking-wide text-primary";

function RequiredStar() {
  return <span className="ml-0.5 text-red-500">*</span>;
}

type FloatingInputProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  className?: string;
  autoComplete?: string;
};

export function FloatingInput({
  name,
  label,
  type = "text",
  required,
  className,
  autoComplete,
}: FloatingInputProps) {
  const id = useId();

  return (
    <div className={cn("relative", className)}>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder=" "
        className={cn(fieldShell, "h-14 pb-2 pt-5")}
      />
      <label
        htmlFor={id}
        className={cn(
          labelBase,
          "top-1/2 -translate-y-1/2",
          "peer-focus:top-2 peer-focus:translate-y-0 peer-focus:scale-[0.78] peer-focus:font-medium peer-focus:tracking-wide peer-focus:text-primary",
          "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:scale-[0.78] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-primary",
        )}
      >
        {label}
        {required ? <RequiredStar /> : null}
      </label>
    </div>
  );
}

type FloatingTextareaProps = {
  name: string;
  label: string;
  required?: boolean;
  className?: string;
};

export function FloatingTextarea({ name, label, required, className }: FloatingTextareaProps) {
  const id = useId();

  return (
    <div className={cn("relative", className)}>
      <textarea
        id={id}
        name={name}
        required={required}
        placeholder=" "
        rows={5}
        className={cn(fieldShell, "min-h-[140px] resize-y py-4 pt-6")}
      />
      <label
        htmlFor={id}
        className={cn(
          labelBase,
          "top-5",
          "peer-focus:top-2 peer-focus:scale-[0.78] peer-focus:font-medium peer-focus:tracking-wide peer-focus:text-primary",
          "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-[0.78] peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-primary",
        )}
      >
        {label}
        {required ? <RequiredStar /> : null}
      </label>
    </div>
  );
}

type FloatingSelectProps = {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
  className?: string;
};

export function FloatingSelect({ name, label, options, required, className }: FloatingSelectProps) {
  const id = useId();
  const [value, setValue] = useState("");
  const floated = value.length > 0;

  return (
    <div className={cn("relative", className)}>
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cn(
          fieldShell,
          "h-14 appearance-none pr-12",
          floated ? "pb-2 pt-5" : "py-4",
        )}
      >
        <option value="" disabled hidden />
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={cn(
          labelBase,
          floated
            ? labelFloated
            : "top-1/2 -translate-y-1/2 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:scale-[0.78] peer-focus:font-medium peer-focus:tracking-wide peer-focus:text-primary",
        )}
      >
        {label}
        {required ? <RequiredStar /> : null}
      </label>
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted peer-focus:text-primary"
        strokeWidth={2.25}
        aria-hidden
      />
    </div>
  );
}
