import Image from "next/image";
import { Agent } from "@/types";

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-card">
      <Image src={agent.image} alt={agent.name} width={64} height={64} className="rounded-full mb-3 h-16 w-16 object-cover" />
      <p className="text-lg font-semibold text-slate-900">{agent.name}</p>
      <p className="text-slate-500">{agent.role}</p>
      <p className="text-slate-600 mt-2">{agent.bio}</p>
      <p className="text-slate-700 mt-3">{agent.phone}</p>
      <p className="text-slate-700">{agent.email}</p>
    </div>
  );
}
