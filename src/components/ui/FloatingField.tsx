"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

const fieldShell =
  "peer w-full rounded-lg border border-border bg-white px-4 text-sm text-text outline-none transition-all duration-300 placeholder:text-transparent focus:border-primary focus:ring-4 focus:ring-primary/10";

const labelBase =
  "pointer-events-none absolute left-3 origin-left px-1 text-sm text-text-muted transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

const labelFloated =
  "top-0 -translate-y-1/2 scale-[0.82] bg-white font-medium tracking-wide text-primary";

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
          "peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-[0.82] peer-focus:bg-white peer-focus:font-medium peer-focus:tracking-wide peer-focus:text-primary",
          "peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:scale-[0.82] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-primary",
        )}
      >
        {label}
        {required ? " *" : ""}
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
          "peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-[0.82] peer-focus:bg-white peer-focus:font-medium peer-focus:tracking-wide peer-focus:text-primary",
          "peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:-translate-y-1/2 peer-[:not(:placeholder-shown)]:scale-[0.82] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:font-medium peer-[:not(:placeholder-shown)]:tracking-wide peer-[:not(:placeholder-shown)]:text-primary",
        )}
      >
        {label}
        {required ? " *" : ""}
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
          "h-14 appearance-none pr-10",
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
            : "top-1/2 -translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:scale-[0.82] peer-focus:bg-white peer-focus:font-medium peer-focus:tracking-wide peer-focus:text-primary",
        )}
      >
        {label}
        {required ? " *" : ""}
      </label>
      <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted transition-colors peer-focus:text-primary">
        ▾
      </span>
    </div>
  );
}
