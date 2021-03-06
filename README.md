# Praxent CRM Package

This package is to assist in the sending of information to your specified CRM. Right now this package is only built out for HubSpot but future iterations could expand that scope.

## How to Use

### HubSpot Integration

You can use the package as follows:

```
const HubspotIntegration = require('@praxent/praxent-crm')

async exampleFunction() => {
  try {
    const hubspotIntegration = HubspotIntegration({ apiKey }) // appId required for webhooks

    const response = await hubspotIntegration.fetch({ action: 'createContact', data })
    return {
      success: true,
      data: response,
    }
  } catch(error) {
    console.warn(error)
    return {
      success: false,
      error,
    }
  }
}
```

The data variable is whatever data you want to send to HubSpot formatted for your specific project.

Actions Types:

`createContact`
* Hubspot Reference: https://developers.hubspot.com/docs/methods/contacts/create_contact
```
{
  properties: [
    {
      property: string,
      value: any,
    }
    ...
  ]
}
```

`createDeal`
* Hubspot Reference: https://developers.hubspot.com/docs/methods/deals/create_deal
```
{
  associations: {
    associatedVids: [int],
  },
  properties: [
    {
      name: string,
      value: any,
    }
    ...
  ]
}
```

`searchContactByEmail`
* Hubspot Reference: https://developers.hubspot.com/docs/methods/contacts/get_contact_by_email
```
{
  email: string,
}
```

`viewSettings`
* Hubspot Reference: https://developers.hubspot.com/docs/methods/webhooks/webhooks-overview
```
{}
```

`updateSettings`
* Hubspot Reference: https://developers.hubspot.com/docs/methods/webhooks/webhooks-overview
```
{
  webhookUrl: string, // requires https
  maxConcurrentRequests: int, // greater than 5
}
```

`createSubscriptions`
* Hubspot Reference: https://developers.hubspot.com/docs/methods/webhooks/webhooks-overview
```
{
  subscriptionDetails: {
    subscriptionType: string,
    propertyName: string,
  },
  enabled: bool,
}
```

`getSubscriptions`
* Hubspot Reference: https://developers.hubspot.com/docs/methods/webhooks/webhooks-overview
```
{}
```

`updateSubscriptions`
* Hubspot Reference: https://developers.hubspot.com/docs/methods/webhooks/webhooks-overview
```
{
  subscriptionId: int,
  data: {
    enabled: bool,
  }
}
```

`deleteSubscriptions`
* Hubspot Reference: https://developers.hubspot.com/docs/methods/webhooks/webhooks-overview
```
{}
```
