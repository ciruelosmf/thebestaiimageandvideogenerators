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
      const response = await fetch('/api/checkBotStatus');
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
              <p><strong>Status:</strong> {status.ok ? 'Online' : 'Offline'}</p>
              {status.result && (
                <>
                  <p><strong>Bot Name:</strong> {status.result.first_name}</p>
                  <p><strong>Username:</strong> @{status.result.username}</p>
                </>
              )}
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