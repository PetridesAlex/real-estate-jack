import AgentCard from "@/components/shared/AgentCard";
import SectionTitle from "@/components/shared/SectionTitle";
import { agents } from "@/data/agents";

export default function AgentsSection() {
  return (
    <section className="mt-20">
      <SectionTitle eyebrow="Agents" title="Meet Our Team" />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </section>
  );
}
