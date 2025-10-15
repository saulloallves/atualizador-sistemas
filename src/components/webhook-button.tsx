"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2, Rocket } from "lucide-react";

interface WebhookButtonProps {
  label: string;
  webhookUrl: string;
}

export function WebhookButton({ label, webhookUrl }: WebhookButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    toast.info(`Acionando webhook para "${label}"...`);
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast.success(`Webhook para "${label}" acionado com sucesso!`);
    } catch (error) {
      console.error("Failed to trigger webhook:", error);
      toast.error(`Falha ao acionar o webhook para "${label}".`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading}
      className="w-full max-w-sm text-lg p-8 transition-all duration-300 ease-in-out transform hover:scale-105"
      variant="secondary"
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-6 w-6 animate-spin" />
      ) : (
        <Rocket className="mr-2 h-6 w-6" />
      )}
      {label}
    </Button>
  );
}