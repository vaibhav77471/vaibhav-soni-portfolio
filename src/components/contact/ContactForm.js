import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <section id="contact" className="p-20 bg-transparent backdrop-blur-md">
      <h2 className="text-3xl mb-5">Reach Me</h2>
      <form className="flex flex-col gap-4 max-w-md">
        <input className="bg-zinc-900/40 border border-zinc-700 rounded px-4 py-2 text-[#fff] backdrop-blur-md" placeholder="Name" />
        <input className="bg-zinc-900/40 border border-zinc-700 rounded px-4 py-2 text-[#fff] backdrop-blur-md" placeholder="Email" />
        <textarea className="bg-zinc-900/40 border border-zinc-700 rounded px-4 py-2 text-[#fff] backdrop-blur-md" placeholder="Message" rows={4} />
        <Button type="submit">Send</Button>
      </form>
    </section>
  );
}
