import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Ticket {
  id: number
  platform: string
  projectKey: string
  title: string
  description: string
  priority: 'Low' | 'Medium' | 'High'
  assignedBy: string
  assignedDate: string
}

interface TicketDetailsProps {
  ticket: Ticket
}

export default function TicketDetails({ ticket }: TicketDetailsProps) {
  return (
    <Card className="h-full overflow-auto">
      <CardHeader>
        <CardTitle>{ticket.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">Description:</h3>
          <p>{ticket.description}</p>
        </div>
        <div>
          <h3 className="font-semibold">Priority:</h3>
          <p>{ticket.priority}</p>
        </div>
        <div>
          <h3 className="font-semibold">Assigned By:</h3>
          <p>{ticket.assignedBy}</p>
        </div>
        <div>
          <h3 className="font-semibold">Assigned Date:</h3>
          <p>{ticket.assignedDate}</p>
        </div>
        <div>
          <h3 className="font-semibold">Initial Solution:</h3>
          <p>Here's an initial solution to the issue... (This is a placeholder. You would typically generate or retrieve this content based on the ticket details.)</p>
        </div>
      </CardContent>
    </Card>
  )
}