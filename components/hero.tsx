export default function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        <span className="font-bold">Co Task</span> – Collaborative Task
        Management for Teams
      </p>
      {/* <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" /> */}
      <section className="flex flex-col items-center gap-4 text-sm">
        <p className="font-semibold">The core of Co Task</p>
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        <p className="text-xs text-center">
          CoTask is a collaborative todo list and task management app that lets
          teams work on shared tasks, message in real time, and stay organized
          in one place.
        </p>
      </section>
    </div>
  );
}
