import { useEffect, useState } from "react";

const GetCampaign = (campaignId) => {
    const [campaign, setCampaign] = useState(null);
  


    useEffect(() => {
        const fetchCampaign = async () => {
            try {
                const response = await fetch(`/api/campaign/${campaignId}`);
                if(!response.ok) {
                    throw new Error(`Failed to fetch campaign data: ${response.status}`);
                }

                const data = await response.json()
                setCampaign(data);
            }  catch (error) {
                console.error(``)
            }
        };

        fetchCampaign();
    }, [campaignId])

    return [campaign];
}

export default GetCampaign;