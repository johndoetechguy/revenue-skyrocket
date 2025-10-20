import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Sparkles, TrendingUp, Users, Map } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const suggestedPrompts = [
  {
    icon: TrendingUp,
    text: "Which routes have highest upgrade potential?",
    category: "Revenue",
  },
  {
    icon: Users,
    text: "Show me low-converting customer segments",
    category: "Segments",
  },
  {
    icon: Map,
    text: "Predict next quarter's premium cabin demand",
    category: "Forecasting",
  },
  {
    icon: Sparkles,
    text: "What's the best upsell strategy for families?",
    category: "Strategy",
  },
];

const Assistant = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI analytics assistant. I can help you analyze customer behavior, predict trends, and optimize revenue strategies. What would you like to know?",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    setChatHistory([...chatHistory, { role: "user", content: message }]);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Based on the latest data, I can provide insights on that. This is a demo response - in production, this would connect to real AI analytics.",
        },
      ]);
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div className="h-full flex flex-col p-8">
        {/* Header */}
        <div className="space-y-2 mb-6">
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            AI Analytics Assistant
          </h1>
          <p className="text-muted-foreground">
            Ask questions about your data and get AI-powered insights
          </p>
        </div>

        {/* Suggested Prompts */}
        {chatHistory.length === 1 && (
          <div className="mb-6">
            <p className="text-sm font-medium text-foreground mb-3">Suggested questions:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {suggestedPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start text-left h-auto p-4 hover:border-primary hover:bg-primary/5"
                  onClick={() => setMessage(prompt.text)}
                >
                  <div className="flex items-start gap-3 w-full">
                    <prompt.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{prompt.text}</p>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {prompt.category}
                      </Badge>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Chat History */}
        <Card className="flex-1 overflow-auto p-6 shadow-card mb-4 space-y-4">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"} animate-slide-up`}
            >
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-4 rounded-xl ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-secondary-foreground" />
                </div>
              )}
            </div>
          ))}
        </Card>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            placeholder="Ask me anything about your analytics data..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button onClick={handleSend} className="px-6">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Assistant;
