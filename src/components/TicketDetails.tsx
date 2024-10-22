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
        <Card className="flex flex-col h-full bg-white/30 backdrop-blur-lg shadow-2xl border border-white/20 rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden">
            <CardHeader>
                <CardTitle className="text-3xl font-extrabold text-gray-800 mb-4 tracking-wide">
                    {ticket.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-6 text-gray-900">
                <div>
                    <p className="bg-white/40 backdrop-blur-md p-4 rounded-lg shadow-lg text-gray-600 leading-relaxed">
                        <h3 className="font-bold text-lg text-gray-700">Description:</h3>
                        {ticket.description}
                    </p>
                </div>
                
                <div>
                    <p className="bg-white/40 backdrop-blur-md p-2 rounded-lg shadow-lg text-gray-600">
                        <h3 className="font-bold text-lg text-gray-700">Assigned Date:</h3>
                        {ticket.assignedDate}
                    </p>
                </div>
                
                <div className="h-64 overflow-y-auto"> {/* Set a fixed height and enable scrolling */}
                    <p className="bg-white/40 backdrop-blur-md p-4 rounded-lg shadow-lg text-gray-600 leading-relaxed">
                        <h3 className="font-bold text-lg text-gray-700">Initial Solution:</h3>
                        Here's an initial solution to the issue... (This is a placeholder. You would typically generate or retrieve this content based on the ticket details.)
                        {/* Repeat the text to simulate a long content for demonstration */}
                        {Array(20).fill("Here's an initial solution to the issue... (This is a placeholder. You would typically generate or retrieve this content based on the ticket details.)").join(' ')}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}


