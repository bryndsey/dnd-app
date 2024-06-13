import { Popover } from "@/components/Popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

export function CookieDialog() {
  return (
    <Popover>
      <PopoverTrigger>Cookies</PopoverTrigger>
      <PopoverContent>
        <div className="p4">
          This is a fake cookies popup. This website doesn't store any cookies,
          so I just want to know if you like to eat cookies.
        </div>
      </PopoverContent>
    </Popover>
  );
}
