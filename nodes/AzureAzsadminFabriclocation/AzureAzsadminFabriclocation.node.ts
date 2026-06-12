import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureAzsadminFabriclocation implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Azsadmin Fabriclocation',
                name: 'N8nDevAzureAzsadminFabriclocation',
                icon: { light: 'file:./azure-azsadmin-fabriclocation.png', dark: 'file:./azure-azsadmin-fabriclocation.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Fabric location operation endpoints and objects.',
                defaults: { name: 'Azure Azsadmin Fabriclocation' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureAzsadminFabriclocationApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
