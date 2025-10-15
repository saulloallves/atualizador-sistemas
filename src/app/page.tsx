import { WebhookButton } from "@/components/webhook-button";

const systems = [
  {
    label: "Atualizar Sistema Matriz",
    webhookUrl: "https://n8n.girabot.com.br/webhook/att-sistema-matriz",
  },
  {
    label: "Atualizar Sistema Treinamento",
    webhookUrl: "https://n8n.girabot.com.br/webhook/att-sistema-treinamento",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-full max-w-md flex-col items-center gap-6 text-center">
        <div className="mb-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Painel de Acionamento
          </h1>
          <p className="text-muted-foreground">
            Selecione um sistema para iniciar a atualização.
          </p>
        </div>

        <div className="w-full space-y-4">
          {systems.map((system) => (
            <WebhookButton
              key={system.label}
              label={system.label}
              webhookUrl={system.webhookUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}