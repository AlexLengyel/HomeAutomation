let jsonObject = {
  "feature-types": {
    "temperature": {
      "name": "Temperature",
      "description": "Control the temperature of the home (Celsius)",
      "data-type": "integer",
      "impact": "house",
      "values": {
        "min": 0.0,
        "max": 40.0,
        "modifier": 0.5,
      },
    },
    "light": {
      "name": "Lights",
      "description": "Switch the light in the room",
      "data-type": "boolean",
      "impact": "room",
      "values": {
        "true": "On",
        "false": "Off",
      },
    },
    "curtain": {
      "name": "Curtains",
      "description": "Draw the curtains in the room",
      "data-type": "boolean",
      "impact": "room",
      "values": {
        "true": "Open",
        "false": "Closed",
      },
    },
  },
  "home": {
    "name": "My Home",
    "house": {
      "features": {
        "temperature": {
          "id": "thermostat",
          "name": "Thermostat",
          "scale": "celsius",
          "symbol": "°C",
          "current-value": 20.0,
        },
      },
    },
    "rooms": [
      {
        "svg-id": "master-bedroom",
        "name": "Master Bedroom",
        "number-of-automations": 3,
        "features": {
          "lights": [
            {
              "id": "master-bedroom-overhead-light",
              "name": "Overhead Light",
              "current-value": "Off",
            },
            {
              "id": "master-bedroom-beside-lamp",
              "name": "Beside Lamp",
              "current-value": "Off",
            },
          ],
          "curtains": [
            {
              "id": "master-bedroom-blackout-curtains",
              "name": "Blackout Curtains",
              "current-value": "Open",
            },
          ],
        },
      },
      {
        "svg-id": "bedroom",
        "name": "Bedroom",
        "number-of-automations": 2,
        "features": {
          "lights": [
            {
              "id": "bedroom-overhead-light",
              "name": "Overhead Light",
              "current-value": "Off",
            },
          ],
          "curtains": [
            {
              "id": "bedroom-blackout-curtains",
              "name": "Blackout Curtains",
              "current-value": "Open",
            },
          ],
        },
      },
      {
        "svg-id": "hallway",
        "name": "Hallway",
        "number-of-automations": 1,
        "features": {
          "lights": [
            {
              "id": "hallway-overhead-light",
              "name": "Overhead Light",
              "current-value": "Off",
            },
          ],
          "curtains": [],
        },
      },
      {
        "svg-id": "kitchen",
        "name": "Kitchen",
        "number-of-automations": 2,
        "features": {
          "lights": [
            {
              "id": "kitchen-overhead-light",
              "name": "Overhead Light",
              "current-value": "Off",
            },
          ],
          "curtains": [
            {
              "id": "kitchen-over-sink-curtains",
              "name": "Over-Sink Curtains",
              "current-value": "Open",
            },
          ],
        },
      },
      {
        "svg-id": "living-room",
        "name": "Living Room",
        "number-of-automations": 4,
        "features": {
          "lights": [
            {
              "id": "living-room-overhead-light",
              "name": "Overhead Light",
              "current-value": "Off",
            },
            {
              "id": "living-room-floor-lamp",
              "name": "Floor Lamp",
              "current-value": "Off",
            },
          ],
          "curtains": [
            {
              "id": "living-room-front-curtains",
              "name": "Front Curtains",
              "current-value": "Open",
            },
            {
              "id": "living-room-side-curtains",
              "name": "Side Curtains",
              "current-value": "Open",
            },
          ],
        },
      },
      {
        "svg-id": "bathroom",
        "name": "Bathroom",
        "number-of-automations": 3,
        "features": {
          "lights": [
            {
              "id": "bathroom-overhead-light",
              "name": "Overhead Light",
              "current-value": "Off",
            },
            {
              "id": "bathroom-lighted-mirror",
              "name": "Lighted Mirror",
              "current-value": "Off",
            },
          ],
          "curtains": [
            {
              "id": "bathroom-curtains",
              "name": "Curtains",
              "current-value": "Open",
            },
          ],
        },
      },
      {
        "svg-id": "terrace",
        "name": "Terrace",
        "number-of-automations": 1,
        "features": {
          "lights": [
            {
              "id": "terrace-overhead-light",
              "name": "Overhead Light",
              "current-value": "Off",
            },
          ],
          "curtains": [],
        },
      },
    ],
  },
};
