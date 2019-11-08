# Praxent CRM Package

This package is to assist in the sending of information to your specified CRM. Right now this package is only built out for HubSpot but future iterations could expand that scope.

## How to Use

### HubSpot Integration

These are currently the functions that can be used:
* createContact
* createDeal

You can use the package as follows:

```
const hubspotIntegration = require('@praxent/praxent-crm')

async exampleFunction() => {
  try {
    const response = await hubspotIntegration({ action: 'createContact', data })
    return {
      success: true,
      data: hubspotIntegration,
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
