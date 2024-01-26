import { Badge } from "@/components/ui/badge";

export default function History() {
  return (
    <div className="animate-in fade-in zoom-in duration-500 flex items-center gap-3">
      <h1 className="text-4xl font-bold tracking-tight ">History</h1>
      <Badge className="border-green-200 border bg-gradient-to-r from-green-400 via-blue-500 to-black/50">
        Comming Soon
      </Badge>
    </div>
  );
}
