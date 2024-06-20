import { HookCallbacks } from "async_hooks";

export const HamburgerX = ({
  setNavOpen,
  navOpen,
}: {
  setNavOpen: any;
  navOpen: boolean;
}) => {
  return (
    <button
      className="rounded text-white outline-none"
      onClick={() => {
        setNavOpen(!navOpen);
      }}
    >
      <svg
        className="w-9 h-9"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {navOpen ? (
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
};
