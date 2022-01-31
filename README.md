<h1>Home Automation (Adobe Technical Assignment)</h1>

<p>A home automation app by <a href="https://github.com/AlexLengyel" target="_blank">Alex Lengyel</a></p>

<p><a href="https://alexlengyel.github.io/HomeAutomation/" target="_blank">Link to working demo on GitHub</a></p>

<p>I built this home automation project for a technical assignment given by Adobe Systems. The goal was to create an extensible home automation app with visual effects.</p>

<h2>Official Requirements</h2>

<p>Pressing a button on a control panel would visually turn on a light, change
temperature or close the curtains.</p>

<h3>Constraints:</h3>
<ul>
  <li>Frameworks like React, Angular, Vue etc MUST NOT be used. Create
your own architecture.</li>
  <li>You are allowed to use / create a build system. ES6 and Typescript are
permitted.</li>
  <li>The solution has to be extensible and documented, so that we can
develop our own components that react to events.</li>
  <li>The application will be executed on a plain HTTP server with no
possibility to run code server side and is being viewed in 2 major
browsers of your choice.</li>
</ul>

<h2>Used technologies</h2>

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h2>How does it work?</h2>

<h3>By Features:</h3>
<ul>
  <li><b>Lights: </b>If the light's image, name or container has been clicked then it changes its:</li>
    <ul>
      <li>Light bulb icon (Switched on or switched off light bulb)</li>
      <li>Related room's color (Between dark and light)</li>
      <p><i>(Example: If a switched off overhead light has been clicked then its switched off light bulb icon change to a switched on one and the related room's color is become lighter.)</i></p>
    </ul>
  </li>
  <li><b>Curtains: </b>If the curtain's image, name or container has been clicked then it changes its:</li>
    <ul>
      <li>Curtain icon (Opened or closed curtain)</li>
      <li>Related room's color (Between dark and light)</li>
      <p><i>(Example: If a closed blackout curtain has been clicked then its closed curtain icon change to an opened one and the related room's color is become lighter.)</i></p>
    </ul>
  </li>
  <li><b>Temperature: </b>If the thermostat's up or down arrow button has been clicked then it changes:</li>
    <ul>
      <li>Thermostat's displayed value (Between min. to max. temperature)</li>
      <li>Floor plan's container's background color (Between shades of light blue and yellow)</li>
      <p><i>(Example: If the thermostat's up arrow button has been clicked then it increases the thermostat's displayed temperature value and the floor plan's container's background color is become more yellowish.)</i></p>
    </ul>
  </il>
</ul>

<h2>Feature Types</h2>

<p>All of the feature-type needs to be added to the "feature-type" object.</p>

<h3>Based on its impact:</h3>

<h3>House:</h3>

<p>These features have an impact on the whole house.</p>

<ul>
  <li><b>Temperature:</b></li>
  <ul>
    <li>By changing its "min", "max" or "modifier" values, it will modify the thermostat's nature.</li>
  </ul>
</ul>

```
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
```

<h3>Rooms:</h3>

<p>These features have an impact on a specific room.</p>

<p><i>(By swaping or changing their boolean values, it will change the features default behavior.)</i></p>

<ul>
  <li><b>Light:</b></li>
</ul>

```
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
```

<ul>
  <li><b>Curtain:</b></li>
</ul>

```
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
```

<h2>Floor Plan</h2>

<p>Multiple floor plan can be added to the page by wrapping the svg in a div which needs to have the following class names: "card-container-style floor-plan-card-container" then inserting it in the body (by default after the main title).</p>

<p>All of the rooms has to have a unique id (id="master-bedroom") and a fill opacity (fill-opacity="1") attribute.</p>

```
<!-- Floor Plan Wrapper -->
<div class="card-container-style floor-plan-card-container">
  <!-- Floor Plan SVG -->
  <svg ...
</div>
```

<h2>Rooms</h2>

<p>A room object needs to be added to the "rooms" array within the database and it needs to have the following attributes. All the automated room feature type has to be added to the "features" attribute. If a room does not have a specific feature then it still has to be added to the "features" array and its value should be an empty array.</p>

<p><i>(The "svg-id" has to have the same value as its svg room's id.)</i></p>

```
"rooms": [
  }
    "svg-id": "master-bedroom",
    "name": "Master Bedroom",
    "number-of-automations": 3,
    "features": {
      "lights": [...],
      "curtains": [...],
    },
  },
]
```

<h2>Features in a Room</h2>

<p>A feature has to be added to its feature type which is in the (above-mentioned) "features" array. It needs to have the following attributes.</p>

```
"lights": [
  {
    "id": "master-bedroom-overhead-light",
    "name": "Overhead Light",
    "current-value": "Off",
  }
]
```

<h2>Setup Flow</h2>

<p>The control panel is initialized using the "initControlPanel" method, which calls other "setup" and "add on click event handler" functions to build up the user interface with its events. All the nodes returned from these setup functions will be attached to a div with the id "control-panel-container". <i>(So it works like a snowball effect.)</i></p>

![control-panel-setup-flow](https://user-images.githubusercontent.com/45566024/151830157-d87be633-5ae6-48ca-b606-80bab172c185.png)

<h2>JavaScript File System</h2>

<h3>Helpers Folder:</h3>
<ul>
  <il><p><b>- document.js: </b> Shortcut functions built on document methods.</p></il>
  <il><p><b>- features.js: </b> Helper functions for the features.</p></il>
</ul>
<h3>On Click Functions Folder:</h3>
<ul>
  <p>It contains all the on click event handler functions, which are used as the second argument of the on click event listener, when an event listener is added to a node.</p>
</ul>
<h3>Setup Folder:</h3>
<ul>
  <p>It contains all the setup functions, which are used to create node then add it to the parent node.</p>
</ul>

```
javascript/
├─ helpers/
│  ├─ document.js
│  ├─ features.js
├─ on-click-functions/
│  ├─ curtain.js
│  ├─ light.js
│  ├─ temperature.js
├─ setup/
│  ├─ control-panel.js
│  ├─ curtain.js
│  ├─ house.js
│  ├─ light.js
│  ├─ rooms.js
│  ├─ temperature.js
```
