import { FormularioCriacao } from "@/components/addProgression/AddProgressionForm";
import { ProgressionsTable } from "@/components/ProgressionsTable";

export default function Home() {
  return (
    <div className="gap-2 flex flex-row p-4 py-6">
      <ProgressionsTable /> <FormularioCriacao />
    </div>
  );
}
