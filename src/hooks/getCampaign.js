import { useEffect, useState } from "react";

const GetCampaign = (campaignId) => {
    const [campaign, setCampaign] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchCampaign = async () => {
            try {
                const response = await fetch(`/api/campaign/${campaignId}`);
                if(!response.ok) {
                    throw new Error(`Failed to fetch campaign data: ${response.status}`);
                }

                const data = await response.json()

                setCampaign(data);
                setLoading(false);
                setError(null);
            }  catch (error) {
                setError(error);
                setLoading(false)
            }
        };

        fetchCampaign();
    }, [campaignId])

    return [campaign, loading, error ];
}

export default GetCampaign;