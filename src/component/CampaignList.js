import React from "react";
import GetCampaign from "../hooks/GetCampaign";

const campaignList =() => {
    const campaign = GetCampaign();

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