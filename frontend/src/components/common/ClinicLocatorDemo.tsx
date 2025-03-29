"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Clock, Star, ExternalLink } from "lucide-react";

export default function ClinicLocatorDemo() {
  // Mock data for demonstration purposes
  const clinics = [
    {
      id: 1,
      name: "City Health Center",
      type: "Primary Care",
      address: "123 Main St, San Francisco, CA 94105",
      phone: "(415) 555-1234",
      hours: "Mon-Fri: 8am-6pm, Sat: 9am-1pm",
      distance: "0.8 miles",
      rating: 4.5,
      accepting: true,
    },
    {
      id: 2,
      name: "Bay Area Medical Group",
      type: "Multi-specialty",
      address: "456 Market St, San Francisco, CA 94105",
      phone: "(415) 555-5678",
      hours: "Mon-Fri: 7am-7pm, Sat-Sun: 9am-3pm",
      distance: "1.2 miles",
      rating: 4.8,
      accepting: true,
    },
    {
      id: 3,
      name: "Golden Gate Urgent Care",
      type: "Urgent Care",
      address: "789 Mission St, San Francisco, CA 94103",
      phone: "(415) 555-9012",
      hours: "Daily: 8am-8pm",
      distance: "1.5 miles",
      rating: 4.2,
      accepting: true,
    },
    {
      id: 4,
      name: "SF Specialty Clinic",
      type: "Specialty Care",
      address: "101 California St, San Francisco, CA 94111",
      phone: "(415) 555-3456",
      hours: "Mon-Fri: 9am-5pm",
      distance: "2.1 miles",
      rating: 4.6,
      accepting: false,
    },
  ];

  const [mapView, setMapView] = useState(true);

  return (
    <div className="space-y-6">
      <Tabs defaultValue="map" className="mb-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="map" onClick={() => setMapView(true)}>
            Map View
          </TabsTrigger>
          <TabsTrigger value="list" onClick={() => setMapView(false)}>
            List View
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {mapView ? (
        <div className="relative">
          <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-muted-foreground">
                Map visualization would appear here in a real application
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                (This is a placeholder for demonstration purposes)
              </p>
            </div>
          </div>

          <div className="absolute top-3 left-3 right-3">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-3">
                <p className="text-sm font-medium">
                  4 healthcare facilities found near San Francisco, CA
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : null}

      <div className="space-y-4">
        {clinics.map((clinic) => (
          <Card key={clinic.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{clinic.name}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <MapPin className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                    {clinic.distance} away
                  </CardDescription>
                </div>
                <Badge
                  variant={
                    clinic.type === "Urgent Care" ? "destructive" : "default"
                  }
                >
                  {clinic.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                  <span className="text-sm">{clinic.address}</span>
                </div>

                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">{clinic.phone}</span>
                </div>

                <div className="flex items-start">
                  <Clock className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                  <span className="text-sm">{clinic.hours}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    <span className="text-sm font-medium">{clinic.rating}</span>
                  </div>

                  <Badge variant={clinic.accepting ? "outline" : "secondary"}>
                    {clinic.accepting
                      ? "Accepting New Patients"
                      : "Not Accepting New Patients"}
                  </Badge>
                </div>

                <Button variant="outline" className="w-full mt-2">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center pt-4">
        <p className="text-sm text-muted-foreground italic">
          This is a demonstration with mock data. No real location data is used.
        </p>
      </div>
    </div>
  );
}
