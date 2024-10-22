import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

interface Message {
    text: string;
    isUser: boolean;
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, isUser: true }]);
            setMessages((prev) => [...prev, { text: "AI response placeholder", isUser: false }]);
            setInput("");
        }
    };

    return (
        <Card className="flex flex-col h-full bg-white/30 backdrop-blur-md shadow-2xl border border-white/20 rounded-lg p-6 transition-transform transform hover:scale-105">
            <CardHeader>
                <CardTitle className="text-gray-800 font-bold text-2xl text-center">
                    Chat with AI
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col space-y-4"> {/* Flex-grow to occupy remaining height */}
                <ScrollArea className="flex-grow mb-4 overflow-y-auto p-4 bg-white/40 backdrop-blur-lg rounded-lg shadow-inner">
                    {messages.map((message, index) => (
                        <div key={index} className={`mb-4 flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`inline-block px-4 py-2 rounded-lg shadow-lg backdrop-blur-lg bg-white/30 border border-white/20 transform transition-transform ${
                                    message.isUser
                                        ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:scale-105"
                                        : "bg-white/40 text-gray-800 hover:scale-105"
                                }`}
                            >
                                {message.text}
                            </div>
                        </div>
                    ))}
                </ScrollArea>
                <div className="flex space-x-2 items-center">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        onKeyPress={(e) => e.key === "Enter" && handleSend()}
                        className="flex-grow bg-white/60 backdrop-blur-lg p-3 rounded-lg shadow-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    <Button
                        onClick={handleSend}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg px-6 py-3 backdrop-blur-lg border border-white/20 hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-transform"
                    >
                        Send
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
