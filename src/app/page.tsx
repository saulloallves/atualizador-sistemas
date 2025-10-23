import { WebhookButton } from "@/components/webhook-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const systems = [
  {
    label: "Atualizar Sistema Matriz",
    webhookUrl: "https://n8n.girabot.com.br/webhook/att-sistema-matriz",
  },
  {
    label: "Atualizar Sistema Treinamento",
    webhookUrl: "https://n8n.girabot.com.br/webhook/att-sistema-treinamento",
  },
  {
    label: "Atualizar Central de Ticket",
    webhookUrl: "https://n8n.girabot.com.br/webhook/att-sistema-ticket",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 font-[family-name:var(--font-geist-sans)]">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Painel de Acionamento
          </CardTitle>
          <CardDescription>
            Selecione um sistema para iniciar a atualização.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {systems.map((system) => (
              <WebhookButton
                key={system.label}
                label={system.label}
                webhookUrl={system.webhookUrl}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}