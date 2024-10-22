import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Ticket {
    id: number;
    platform: string;
    projectKey: string;
    title: string;
    description: string;
    priority: 'Low' | 'Medium' | 'High';
    assignedBy: string;
    assignedDate: string;
}

interface TicketDetailsProps {
    ticket: Ticket;
}

export default function TicketDetails({ ticket }: TicketDetailsProps) {
    return (
        <Card className="flex flex-col h-full bg-white/30 backdrop-blur-lg shadow-2xl border border-white/20 rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
            <CardHeader>
                <CardTitle className="text-3xl font-extrabold text-gray-800 mb-4 tracking-wide">
                    {ticket.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-6 text-gray-900"> {/* Flex-grow to occupy remaining height */}
                <div>
                    <h3 className="font-bold text-lg text-gray-700">Description:</h3>
                    <p className="bg-white/40 backdrop-blur-md p-4 rounded-lg shadow-lg text-gray-600 leading-relaxed">
                        {ticket.description}
                    </p>
                </div>
                
                <div>
                    <h3 className="font-bold text-lg text-gray-700">Assigned Date:</h3>
                    <p className="bg-white/40 backdrop-blur-md p-2 rounded-lg shadow-lg text-gray-600">
                        {ticket.assignedDate}
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-lg text-gray-700">Initial Solution:</h3>
                    <p className="bg-white/40 backdrop-blur-md p-4 rounded-lg shadow-lg text-gray-600 leading-relaxed">
                        Here's an initial solution to the issue... (This is a placeholder. You would typically generate or retrieve this content based on the ticket details.)
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case "High":
            return "bg-gradient-to-r from-red-400 to-red-600 backdrop-blur-md";
        case "Medium":
            return "bg-gradient-to-r from-yellow-300 to-yellow-500 backdrop-blur-md";
        case "Low":
            return "bg-gradient-to-r from-green-400 to-green-600 backdrop-blur-md";
        default:
            return "bg-gray-400";
    }
};
