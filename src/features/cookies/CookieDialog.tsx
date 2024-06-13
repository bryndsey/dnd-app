import { Popover } from "@/components/Popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

export function CookieDialog() {
  return (
    <Popover>
      <PopoverTrigger>Cookies</PopoverTrigger>
      <PopoverContent>
        <div className="m-4 max-w-sm rounded-lg border p-6 shadow-xl">
          <p className="font-bold">This is a fake cookies popup.</p>
          <p>
            This website doesn't store any cookies. I just want to know if you
            like to eat cookies?
          </p>
          <div className="space-x-2">
            <input type="checkbox" className="mt-4" />
            <label>Cookies... yum!</label>
          </div>
          <button className="mt-4 rounded bg-blue-500 p-2 text-white transition-all hover:-translate-y-1 active:translate-y-0">
            Submit
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
