import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch(apiUrl) {
	const [data, setData] = useState();
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		axios
			.get(apiUrl)
			.then((res) => {
				setData(res.data);
				setIsPending(false);
			})
			.catch(() => setError('error'));
		return () => {
			setData();
			setIsPending();
		};
	}, [apiUrl]);

	return { data, isPending, error };
}
