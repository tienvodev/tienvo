import {
  TwitterLogo,
  GithubLogo,
  LinkedinLogo,
  User,
} from "@phosphor-icons/react/dist/ssr";

export default function HomePage() {
  return (
    <div className="mx-5 sm:mx-0 flex flex-col space-y-5 max-w-xl">
      <User className="h-16 w-16 text-zinc-800" />
      <h1 className="text-5xl font-bold tracking-tighter">
        Programmer. Writer. Cat Lover.
      </h1>
      <p className="mt-6 text-base text-zinc-600">
        Hey, I'm <strong>Tien Vo Hoang</strong>. I'm a React.js developer
        passionate about building engaging web applications.
      </p>
      <p className="mt-6 text-base text-zinc-600">
        I love creating innovative projects and have experience with
        technologies like Next.js, Tailwind CSS, and Material Design. Currently,
        I'm working on a novel version of Webtoon called{" "}
        <a
          href="https://lecrel.vercel.app"
          target="_blank"
          className="underline underline-offset-4 text-zinc-800 font-semibold"
        >
          Lecrel
        </a>
        , where readers can support their favorite authors by purchasing virtual
        flowers.
      </p>
      <div className="mt-6 flex gap-6">
        <a
          href="https://twitter.com/tienvodev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterLogo className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
        <a
          href="https://github.com/tienvodev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
        <a
          href="https://linkedin.com/in/tienvodev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogo className="h-6 w-6 hover:scale-105 transition-all" />
        </a>
      </div>
    </div>
  );
}
