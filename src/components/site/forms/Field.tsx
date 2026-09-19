import { useId } from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Base = {
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
};

const inputClass =
  "w-full rounded-lg border bg-background px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function Wrapper({
  id,
  label,
  error,
  required,
  hint,
  children,
}: Base & { id: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {required && (
          <span className="ml-1 text-destructive" aria-hidden="true">
            *
          </span>
        )}
        {required && <span className="sr-only"> (required)</span>}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="flex items-center gap-1.5 text-sm text-destructive">
          <AlertCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({
  type = "text",
  value,
  onChange,
  placeholder,
  ...rest
}: Base & {
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const id = useId();
  return (
    <Wrapper id={id} {...rest}>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={rest.error ? true : undefined}
        aria-describedby={rest.error ? `${id}-error` : undefined}
        className={cn(inputClass, rest.error ? "border-destructive" : "border-input")}
      />
    </Wrapper>
  );
}

export function SelectField({
  value,
  onChange,
  options,
  ...rest
}: Base & { value: string; onChange: (v: string) => void; options: readonly string[] }) {
  const id = useId();
  return (
    <Wrapper id={id} {...rest}>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={rest.error ? true : undefined}
        aria-describedby={rest.error ? `${id}-error` : undefined}
        className={cn(inputClass, rest.error ? "border-destructive" : "border-input")}
      >
        <option value="">Please select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}

export function TextAreaField({
  value,
  onChange,
  placeholder,
  ...rest
}: Base & { value: string; onChange: (v: string) => void; placeholder?: string }) {
  const id = useId();
  return (
    <Wrapper id={id} {...rest}>
      <textarea
        id={id}
        rows={4}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={rest.error ? true : undefined}
        aria-describedby={rest.error ? `${id}-error` : undefined}
        className={cn(inputClass, rest.error ? "border-destructive" : "border-input")}
      />
    </Wrapper>
  );
}
