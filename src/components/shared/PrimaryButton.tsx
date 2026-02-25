import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
};

export default function PrimaryButton({ variant = "primary", fullWidth, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={`rounded-xl px-5 py-3 min-h-12 font-semibold transition ${
        variant === "primary"
          ? "bg-gradient-to-r from-brand to-secondary text-white hover:opacity-90"
          : "bg-white/85 text-brand hover:bg-white"
      } ${fullWidth ? "w-full" : ""} ${className ?? ""}`}
    />
  );
}
