//Task 2
async function fetchUnresolvedTickets() {
    try 
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }
        const tickets = await response.json();
        if (!tickets || tickets.length === 0) {
            throw new Error('No unresolved tickets found');
        }
        console.log(`Successfully retrieved ${tickets.length} tickets`);
        return tickets;
    }
    .catch(error) {
        if (error.name === 'TypeError') {
            throw new Error('Failed to connect to the API');
        }
    }
    //Task 3
      import React, { useState, useEffect } from 'react';
      import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
      import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
      import { Loader2 } from 'lucide-react';

      const UnresolvedTickets = () => {
      const [tickets, setTickets] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

  useEffect(() => {
    fetchTickets();
  }, []);
}
//Task 4
finally {
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
    }
    console.log('Reset');
}