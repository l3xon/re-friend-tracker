export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "BloodyElbows Associates Tracker",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [
					
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
						{ "id": "nickname", 
						"type": "text", 
						"name": "Nickname", 
						"width": 2, 
						"required": true 
						},
												{ 
						"id": "activity",
						"type": "autocomplete",
						"name": "Activities",
						"url": "/activity",
						"form": "ActivityForm",
						"width": 2 
						},
						{ 
						"id": "group",
						"type": "autocomplete",
						"name": "Group",
						"url": "/group",
						"form": "GroupForm",
						"width": 2 
						},
                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        },

                    ]
                },
				{ "id": "GroupForm",
				"title": "Group",
				"url": "/group",
				"formFieldList": [ 
				{ "id": "name",
				"type": "text",
				"name": "GroupName",
				"width": 2, "required": true
				},
										   {
                            "id": "creationDate",
                            "type": "date",
                            "name": "CreationDate",
                            "width": 2
                        },
						                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
				{ 
				"type": "deleteButton", 
				"name": "Delete" 
				}, 
				{ 
				"type": "cancelButton",
				"name": "Cancel" 
				}, 
				{
					"type": "okButton",
					"name": "Ok" 
					} 
					] 
					}
					,
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
						                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
				{ 
				"id": "ActivityForm", 
				"title": "Activity", 
				"url": "/activity", 
				"formFieldList": 
				[ 
				{ 
				"id": "name", 
				"type": "text", 
				"name": "Activity",
				"width": 2,
				"required": true 
				}, 
				                        {
                            "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 1
                        },
						   {
                            "id": "date",
                            "type": "date",
                            "name": "Date",
                            "width": 2
                        },
						                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
				{ 
				"type": "deleteButton",
				"name": "Delete" },
				{ 
				"type": "cancelButton",
				"name": "Cancel"
				}, 
				{ 
				"type": "okButton",
				"name": "Ok" 
				} 
				]
				},
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-users",
                            "color": "red",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-steam",
                            "color": "midnight blue",
                            "page": "locationspage",
                        },
						{ 
						"type": "button",
						"name": "Groups",
						"icon": "fa-dollar",
						"color": "purple", 
						"page": "groupspage", 
						},
						{ 
						"type": "button",
						"name": "Activities",
						"icon": "fa-crosshairs",
						"color": "yellow", 
						"page": "activitiespage", 
						},
						
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "clouds",
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "red",
                            "search": true,
                            "url": "/friend",
						"page": "friendsactivitiespage", 
                        },

                    ]
                },
				{
                    "id": "friendsactivitiespage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
							{
                            "type": "button",
                            "name": "EditFriend",
                            "icon": "fa-user",
                            "color": "red",
							"url": "/friend",
                            "form": {
                                "form": "FriendForm"
                            },
							},
							 {
                            "type": "button",
                            "name": "AddActivity",
                            "icon": "fa-crosshairs",
                            "color": "yellow",
                            "form": {
                                "form": "AddActivityForm"
                            },
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "red",
                            "search": true,
                            "url": "/friend/:friendKey/activity",
                        },

                    ]
                },
				
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-steam",
                            "color": "clouds",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-steam",
                            "color": "blue",
                            "search": true,
                            "url": "/location",
                            "page": "locationsactivitiespage", 
                        },
                    ]
                },
				{
                    "id": "locationsactivitiespage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
							{
                            "type": "button",
                            "name": "EditLocation",
                            "icon": "fa-steam",
                            "color": "blue",
							"url": "/location",
                            "form": {
                                "form": "LocationForm"
                            },
							},

                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "red",
                            "search": true,
                            "url": "/location/:locationKey/activity",
                        },

                    ]
                },

							{ 
			"id": "groupspage", 
			"elementList": [ 
			{ 
			"type": "backbutton",
			}, 
			{ "type": "newButton",
			"name": "NewGroup",
			"icon": "fa-dollar",
			"color": "clouds",
			"form": { 
			"form": "GroupForm"
			}
			},
			{
				"type": "list",
				"icon": "fa-weixin",
				"color": "purple",
				"search": true,
				"url": "/group",
				"form": 
				{
					"form": "GroupForm"
}
},
			] 
			},
						{
				"id": "activitiespage", 
				"elementList": [
				{
					"type": "backbutton",
					},
					{ 
					"type": "newButton",
					"name": "NewActivity",
					"icon": "fa-crosshairs",
					"color": "clouds",
					"form": {
						"form": "ActivityForm"
						}
						},
						{
"type": "list",
"icon": "fa-crosshairs",
"color": "yellow",
"search": true,
"url": "/activity",
"page": "activityfriendsspage", 
},
						]
						},
					{
                    "id": "activityfriendsspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
							{
                            "type": "button",
                            "name": "EditActivity",
                            "icon": "fa-crosshairs",
                            "color": "yellow",
							"url": "/activity",
                            "form": {
                                "form": "ActivityForm"
                            },
							},

                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "red",
                            "search": true,
                            "url": "/activity/:activityKey/friend",
                        },

                    ]
                },	
						
			
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}