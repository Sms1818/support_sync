"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";
import { BackgroundGradient } from "./Background";
import ChatInterface from "./ChatInterface";
import TicketDetails from "./TicketDetails";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";

interface Ticket {
  id: number;
  platform: string;
  projectKey: string;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  assignedBy: string;
  assignedDate: string;
}

const tickets: Ticket[] = [
  {
    id: 1,
    platform: "Jira",
    projectKey: "ABC123",
    title: "Update user authentication",
    description: "Implement two-factor authentication for enhanced security",
    priority: "High",
    assignedBy: "John Doe",
    assignedDate: "2023-05-15",
  },
  {
    id: 2,
    platform: "Salesforce",
    projectKey: "ABC123",
    title: "Fix responsive layout issues",
    description: "Address layout problems on mobile devices for the dashboard",
    priority: "Medium",
    assignedBy: "Jane Smith",
    assignedDate: "2023-05-16",
  },
  {
    id: 3,
    platform: "ClickUp",
    projectKey: "ABC123",
    title: "Optimize database queries",
    description: "Improve performance of slow-running database queries",
    priority: "Low",
    assignedBy: "Mike Johnson",
    assignedDate: "2023-05-17",
  },
  {
    id: 4,
    platform: "Zendesk",
    projectKey: "ABC123",
    title: "Upgrade API integration",
    description: "Upgrade the API integration to handle larger data sets",
    priority: "High",
    assignedBy: "Alice Lee",
    assignedDate: "2023-06-10",
  },
  {
    id: 5,
    platform: "Jira",
    projectKey: "DEF123",
    title: "Fix login page bugs",
    description: "Resolve issues preventing users from logging in",
    priority: "Medium",
    assignedBy: "David Kim",
    assignedDate: "2023-07-05",
  },
  // Add more tickets as needed
];

const platforms = ["Jira", "Salesforce", "ClickUp", "ServiceNow", "Zendesk"];

// Inside your Dashboard component

const Dashboard: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [projectKey, setProjectKey] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [tempProjectKey, setTempProjectKey] = useState<string>("");
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null); // New state for selected ticket

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.platform === selectedPlatform && ticket.projectKey === projectKey
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-500 hover:bg-red-600";
      case "Medium":
        return "bg-yellow-500 hover:bg-yellow-600";
      case "Low":
        return "bg-green-500 hover:bg-green-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  const handleProjectKeySubmit = () => {
    setProjectKey(tempProjectKey);
    setIsDialogOpen(false);
  };

  const handlePlatformSelect = (platform: string) => {
    // Reset state when a new platform is selected
    setSelectedPlatform(platform);
    setTempProjectKey(""); // Clear previous input
    setProjectKey(null); // Reset project key
    setSelectedTicket(null); // Reset selected ticket
    setIsDialogOpen(true); // Open dialog to enter project key
  };

  const handleBackToTickets = () => {
    setSelectedTicket(null); // Reset selected ticket
  };

  return (
    <>
      <div className="relative z-20 flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white flex flex-col">
          <div className="flex items-center justify-center h-16 bg-gray-900 border-b border-gray-700">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="text-white bg-transparent !border-none p-0 shadow-none hover:bg-transparent">
                  Select Platform
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gray-800 text-white">
                <DropdownMenuSeparator />
                {platforms.map((platform) => (
                  <DropdownMenuItem
                    key={platform}
                    onClick={() => handlePlatformSelect(platform)} // Call the new handler
                    className="hover:bg-gray-700 hover:text-white"
                  >
                    {platform}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Selected platform display */}
          {selectedPlatform && (
            <div className="flex items-center justify-center h-16 bg-gradient-to-r from-gray-800 to-gray-700 text-sm text-white font-semibold shadow-md border-b border-gray-600 rounded-md mx-4 mt-4 px-6">
              <span className="text-gray-300">Selected Platform:</span>
              <span className="ml-2 text-blue-400">{selectedPlatform}</span>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <BackgroundGradient
          blur={15}
          waveWidth={60}
          waveOpacity={0.6}
          colors={["#fbcfe8", "#e9d5ff", "#f3e8ff", "#f9f5ff", "#f0abfc"]}
        />
        <div className="flex-grow flex flex-col">
          <main className="flex-grow p-6 overflow-hidden">
            {!selectedTicket && selectedPlatform && projectKey && (
              <>
                <h1 className="text-2xl font-bold mb-6 text-gray-800">
                  {selectedPlatform}/{projectKey}
                </h1>

                <ScrollArea className="h-[calc(100vh-12rem)] pr-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTickets.length > 0 ? (
                      filteredTickets.map((ticket) => (
                        <Card
                          key={ticket.id}
                          className="bg-white/30 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-white/20 rounded-lg"
                          onClick={() => setSelectedTicket(ticket)} // Set selected ticket
                        >
                          <CardHeader>
                            <CardTitle className="text-lg font-semibold text-gray-800">
                              {ticket.title}
                            </CardTitle>
                            <Badge
                              className={`${getPriorityColor(
                                ticket.priority
                              )} text-white`}
                            >
                              {ticket.priority}
                            </Badge>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 mb-4">
                              {ticket.description}
                            </p>
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>Assigned by: {ticket.assignedBy}</span>
                              <span>Date: {ticket.assignedDate}</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <p className="text-gray-600">
                        No tickets for this platform/project.
                      </p>
                    )}
                  </div>
                </ScrollArea>
              </>
            )}

            {/* 50-50 Split Layout when a ticket is selected */}
            {selectedTicket && (
              <div className="flex h-full">
                <div className="w-1/2 pr-4">
                  <TicketDetails ticket={selectedTicket} />
                </div>
                <div className="w-1/2 pl-4">
                  <ChatInterface />
                </div>
              </div>
            )}
          </main>

          {/* Dialog for project key input */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter Project Key</DialogTitle>
              </DialogHeader>
              <Input
                value={tempProjectKey}
                onChange={(e) => setTempProjectKey(e.target.value)}
                placeholder="Enter project key"
              />
              <DialogFooter>
                <Button onClick={handleProjectKeySubmit}>Submit</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
