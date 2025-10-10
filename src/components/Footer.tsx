import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="px-4 py-4 md:p-6 bg-[#1a1a1a] flex md:flex-row items-center justify-between text-sm  md:text-lg gap-3 font-extrabold">
      <p className="flex flex-row items-center gap-2 font-sora">
        <Icon
          icon="material-symbols:copyright-sharp"
          className="text-xl md:text-2xl lg:text-3xl"
        />
        Kinkajou Token {new Date().getFullYear()}
      </p>

      <span className="flex flex-row items-center gap-6 md:gap-8 lg:gap-10">
        <a
          target="_blank"
          referrerPolicy="no-referrer"
          href={"https://x.com/kinka_token"}
        >
          <Icon
            icon="fa7-brands:x-twitter"
            className="text-primary-dark text-xl md:text-2xl lg:text-3xl"
          />
        </a>
        <a
          target="_blank"
          referrerPolicy="no-referrer"
          href={"https://t.me/kinkatokenofficial"}
        >
          <Icon
            icon="fa7-brands:telegram"
            className="text-primary-dark text-xl md:text-2xl lg:text-3xl"
          />
        </a>
      </span>
    </footer>
  );
}

export default Footer;
