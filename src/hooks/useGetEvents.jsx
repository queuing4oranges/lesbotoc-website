import { useState } from 'react';
import axios from 'axios';

export default function useGetEvents() {
    const [ events, setEvents ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const getEvents = async () => {
    try {
        setLoading(true)

        const response = await axios.get("https://api.itisgoodtohave.me/events/read.php")
        const data = response.data;

        setEvents(data);
        setLoading(false);
    } catch (error) {
        setError(error);
        setLoading(false);
    }
    };

  return {
     events, loading, error, getEvents
  } 
}

