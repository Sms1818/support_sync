'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusIcon } from "lucide-react";
import React, { useState } from "react";
import { BackgroundGradient } from "./Background";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";

interface Ticket {
  id: number;
  platform: string;
  projectKey:string;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High';
  assignedBy: string;
  assignedDate: string;
}

const tickets: Ticket[] = [
  {
    id: 1,
    platform: "Jira",
    projectKey:"ABC123",
    title: "Update user authentication",
    description: "Implement two-factor authentication for enhanced security",
    priority: "High",
    assignedBy: "John Doe",
    assignedDate: "2023-05-15"
  },
  {
    id: 2,
    platform: "Salesforce",
    projectKey:"ABC123",
    title: "Fix responsive layout issues",
    description: "Address layout problems on mobile devices for the dashboard",
    priority: "Medium",
    assignedBy: "Jane Smith",
    assignedDate: "2023-05-16"
  },
  {
    id: 3,
    platform: "ClickUp",
    projectKey:"ABC123",
    title: "Optimize database queries",
    description: "Improve performance of slow-running database queries",
    priority: "Low",
    assignedBy: "Mike Johnson",
    assignedDate: "2023-05-17"
  },
  {
    id: 4,
    platform: "Zendesk",
    projectKey:"ABC123",
    title: "Upgrade API integration",
    description: "Upgrade the API integration to handle larger data sets",
    priority: "High",
    assignedBy: "Alice Lee",
    assignedDate: "2023-06-10"
  },
  {
    id: 5,
    platform: "Jira",
    projectKey:"DEF123",
    title: "Fix login page bugs",
    description: "Resolve issues preventing users from logging in",
    priority: "Medium",
    assignedBy: "David Kim",
    assignedDate: "2023-07-05"
  },
  // Add more tickets as needed
];

const platforms = [
  "Jira",
  "Salesforce",
  "ClickUp",
  "ServiceNow",
  "Zendesk",
];

const Dashboard: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [projectKey, setProjectKey] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [tempProjectKey, setTempProjectKey] = useState<string>("");

  // Get tickets associated with the selected platform and project key
  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.platform === selectedPlatform &&
      ticket.projectKey === projectKey
  );

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-500 hover:bg-red-600';
      case 'Medium':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'Low':
        return 'bg-green-500 hover:bg-green-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  // Handle project key submission
  const handleProjectKeySubmit = () => {
    setProjectKey(tempProjectKey);  // Save the project key
    setIsDialogOpen(false);  // Close the dialog
  };

  return (
    <>
      {/* Main container for content with relative positioning */}
      <div className="relative z-20 flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white flex flex-col">
          <div className="flex items-center justify-center h-16 bg-gray-800">
            {/* Logo/Icon with Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <PlusIcon className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select Platform</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {platforms.map((platform) => (
                  <DropdownMenuItem
                    key={platform}
                    onClick={() => {
                      setSelectedPlatform(platform);  // Select the platform
                      setIsDialogOpen(true);  // Open dialog for project key input
                    }}
                  >
                    {platform}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Display selected platform */}
          {selectedPlatform && (
            <div className="flex items-center justify-center h-16 bg-gray-800 text-sm">
              Selected: {selectedPlatform}
            </div>
          )}

          {/* Navigation Links */}
          <nav className="flex-grow">
            <ul className="px-4 py-2">
              <li className="py-2">
                <a
                  href="#"
                  className="flex items-center space-x-2 hover:bg-gray-700 rounded-md p-2"
                >
                  <span className="text-lg">&#8962;</span>
                  <span>Dashboard</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="mt-auto p-4">
            <a
              href="#"
              className="flex items-center space-x-2 hover:bg-gray-700 rounded-md p-2"
            >
              <span>&#9881;</span>
              <span>Settings</span>
            </a>
          </div>
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
            {/* Only show heading and tickets if platform and project key are selected */}
            {selectedPlatform && projectKey && (
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
                          className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                          <CardHeader>
                            <CardTitle className="text-lg font-semibold text-gray-800">
                              {ticket.title}
                            </CardTitle>
                            <Badge className={`${getPriorityColor(ticket.priority)} text-white`}>
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
                      <p className="text-gray-600">No tickets for this platform/project.</p>
                    )}
                  </div>
                </ScrollArea>
              </>
            )}
          </main>
        </div>

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
    </>
  );
};
export default Dashboard;
