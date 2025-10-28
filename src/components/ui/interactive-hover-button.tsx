import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

type InteractiveHoverButtonBaseProps = {
  text?: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "white";
  asButton?: boolean;
};

type InteractiveHoverButtonProps = InteractiveHoverButtonBaseProps &
  (
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { asButton?: false })
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { asButton: true })
  );

const InteractiveHoverButton = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", icon, variant = "primary", asButton = false, className, ...props }, ref) => {
  const variantStyles = {
    primary: {
      bg: "bg-blue-600 text-white border border-blue-600",
      expandBg: "bg-blue-700"
    },
    secondary: {
      bg: "bg-slate-800/70 backdrop-blur-md text-white border border-slate-600/30",
      expandBg: "bg-slate-700/70"
    },
    white: {
      bg: "bg-white text-blue-600 border border-white",
      expandBg: "bg-blue-50"
    }
  };

  const styles = variantStyles[variant];

  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2 translate-x-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-0">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span className="truncate">{text}</span>
      </span>
      <div className="absolute top-0 z-20 flex h-full w-full items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <span className="truncate">{text}</span>
        <ArrowRight className="w-4 h-4 flex-shrink-0" />
      </div>
      <div
        className={cn(
          "absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg opacity-0 transition-all duration-300",
          "group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:opacity-100",
          styles.expandBg
        )}
      />
    </>
  );

  const sharedClassName = cn(
    "group relative cursor-pointer overflow-hidden rounded-2xl text-center font-semibold inline-flex items-center justify-center",
    styles.bg,
    "px-6 py-3.5 w-full sm:w-auto",
    className,
  );

  if (asButton) {
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={sharedClassName}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      ref={ref as React.Ref<HTMLAnchorElement>}
      className={sharedClassName}
      {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {content}
    </a>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
