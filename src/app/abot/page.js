"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function BotStatus() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBotStatus = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://telegram-bot-vercel-three-inky.vercel.app/api/bot');
      if (!response.ok) {
        throw new Error('Failed to fetch bot status');
      }
      const data = await response.json();
      setStatus(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBotStatus();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <h1 className="text-2xl font-bold">Telegram Bot Status</h1>
        </CardHeader>
        <CardContent>
          {isLoading && <p>Loading...</p>}
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {status && (
            <div>
              <p><strong>Message:</strong> {status.message}</p>
 s
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={fetchBotStatus} disabled={isLoading}>
            Refresh Status
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}