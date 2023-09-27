import React from "react";
import getCampaign from "../hooks/getCampaign";

const campaignList =() => {
    const campaign = getCampaign();

    return (
        <div>
            <h1>Campaigns</h1>
            <ul>
                {campaign.map((campaign) => (
                    <li key={campaign.id}>
                        {campaign.name} - {campaign.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default campaignList;