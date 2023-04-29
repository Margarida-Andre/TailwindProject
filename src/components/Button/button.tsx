import classNames from "classnames";
import { PropsButton } from "components";

export function Button({ variant, children }: PropsButton) {
  let bgColor = "text-black";
  if (variant === "primary")
    bgColor =
      "bg-primary text-white hover:bg-primaryLight active:bg-primaryDark transition-all";
  if (variant === "light") bgColor = "bg-primaryLight text-white";
  if (variant === "dark") bgColor = "bg-primaryDark text-white";
  return (
    <button className={classNames("py-2 px-4 rounded-md font-bold", bgColor)}>
      {children}
    </button>
  );
}
