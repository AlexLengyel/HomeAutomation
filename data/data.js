let jsonObject = {
  "feature-types": {
    "temperature": {
      "name": "Temperature",
      "description": "Control the temperature of the home (Celsius)",
      "data-type": "integer",
      "impact": "house",
      "values": {
        "min": -10,
        "max": 60,
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
      "style-values": {
        "on-opacity-change": -0.2,
        "off-opacity-change": 0.2,
      },
    },
    "curtain": {
      "name": "Curtains",
      "description": "Draw the curtain in the room",
      "data-type": "boolean",
      "impact": "room",
      "values": {
        "true": "Open",
        "false": "Closed",
      },
      "style-values": {
        "open-opacity-change": -0.2,
        "closed-opacity-change": 0.2,
      },
    },
  },
  "home": {
    "name": "My Home",
    "house": {
      "features": {
        "temperature": {
          "id": "temperature",
          "name": "Temperature",
          "current-value": 30,
        },
      },
    },
    "rooms": [
      {
        "svg-id": "bedroom",
        "name": "Bedroom",
        "features": {
          "lights": [
            {
              "id": "bedroom-overhead-light",
              "name": "Overhead Light",
              "current-value": "Off",
            },
            {
              "id": "bedroom-beside-lamp",
              "name": "Beside Lamp",
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
              "id": "living-room-curtains",
              "name": "Curtains",
              "current-value": "Open",
            },
          ],
        },
      },
      {
        "svg-id": "bathroom",
        "name": "Bathroom",
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
    ],
  },
};
