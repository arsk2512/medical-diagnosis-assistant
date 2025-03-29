"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function SymptomForm() {
  const [symptoms, setSymptoms] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<null | {
    generalInfo: string;
    possibleCauses: string[];
    selfCare: string[];
    whenToSeek: string;
  }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!symptoms.trim()) return;

    setIsLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // This is mock data - in a real app, this would come from an AI model
      setResult({
        generalInfo:
          "The symptoms you've described could be associated with several common conditions. This information is provided for educational purposes only.",
        possibleCauses: [
          "Common cold or seasonal allergies",
          "Stress or anxiety",
          "Dehydration or nutritional factors",
          "Minor viral infection",
        ],
        selfCare: [
          "Rest and ensure adequate hydration",
          "Monitor symptoms for any changes",
          "Practice stress-reduction techniques if applicable",
          "Maintain a balanced diet",
        ],
        whenToSeek:
          "If symptoms persist for more than a few days, worsen suddenly, or if you experience severe pain, difficulty breathing, or other concerning symptoms, consult a healthcare professional immediately.",
      });

      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Describe Symptoms</CardTitle>
            <CardDescription>
              Enter a description of what you&apos;re experiencing for this
              demonstration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Example: I've had a headache and fatigue for the past two days..."
              className="min-h-[120px]"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full"
              disabled={!symptoms.trim() || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Get Information"
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>

      {result && (
        <div className="mt-8 space-y-6">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Demonstration Only</AlertTitle>
            <AlertDescription>
              The following information is simulated for this portfolio project
              and is not based on real medical analysis.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>General Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{result.generalInfo}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Educational Information</CardTitle>
              <CardDescription>
                Some general conditions that can sometimes be associated with
                these types of symptoms:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {result.possibleCauses.map((cause, index) => (
                  <li key={index}>{cause}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>General Wellness Information</CardTitle>
              <CardDescription>
                General wellness practices that are often recommended:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {result.selfCare.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800">
                When to Consult a Professional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-700">{result.whenToSeek}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
