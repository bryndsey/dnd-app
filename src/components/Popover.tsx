import * as PopoverPrimitive from "@radix-ui/react-popover";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverContent = ({
  children,
  ...props
}: React.ComponentProps<"div">) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content {...props}>
      {children}
      <PopoverPrimitive.Arrow />
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
);
