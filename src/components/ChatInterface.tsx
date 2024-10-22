import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Message {
    text: string
    isUser: boolean
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { text: input, isUser: true }]);
            setMessages(prev => [...prev, { text: "AI response placeholder", isUser: false }]);
            setInput("");
        }
    };

    return (
        <Card className="h-full flex flex-col backdrop-blur-md bg-white/40 shadow-lg border border-white/30">
            <CardHeader>
                <CardTitle className="text-gray-800">Chat with AI</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
                <ScrollArea className="flex-grow mb-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`mb-4 ${message.isUser ? "text-right" : "text-left"}`}
                        >
                            <div
                                className={`inline-block p-2 rounded-lg ${message.isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                                    }`}
                            >
                                {message.text}
                            </div>
                        </div>
                    ))}
                </ScrollArea>
                <div className="flex space-x-2">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        onKeyPress={(e) => e.key === "Enter" && handleSend()}
                        className="bg-white border border-gray-300"
                    />
                    <Button onClick={handleSend} className="bg-blue-500 hover:bg-blue-600 text-white">
                        Send
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

