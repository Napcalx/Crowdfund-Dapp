import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useConnection } from "../context/connection";

const GetCampaign = () => {
    const [campaign, setCampaign] = useState(null);
    const { provider, contractAddress } = useConnection();
  
    useEffect(() => {
        const fetchCampaign = async () => {
            try {
                const campaign = await ethers.getContractAt(contractAddress, provider);
                const response = await fetch(`/api/campaign/${campaign}`);
                if(!response.ok) {
                    throw new Error(`Failed to fetch campaign data: ${response.status}`);
                }

                const data = await response.json()
                setCampaign(campaign);
            }  catch (error) {
                console.error(`Error fetching campaign ID ${error}`)
            }
        };

        fetchCampaign();
    }, [provider, contractAddress])

    return campaign;
}

export default GetCampaign;