/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var TJBot = require('tjbot');
var config = require('./config');

// obtain our credentials from config.js
var credentials = config.credentials;

// these are the hardware capabilities that our TJ needs for this recipe
var hardware = ['led', 'microphone', 'servo', 'speaker'];
var WORKSPACEID = config.conversationWorkspaceId;
// set up TJBot's configuration
var tjConfig = {
    log: {
        level: 'verbose'
    },speak: {
    speakerDeviceId: "plughw:2,0"
  }, robot:{
	name: 'Sam'

}
};

// instantiate our TJBot!
var tj = new TJBot(hardware, tjConfig, credentials);

// full list of colors that TJ recognizes, e.g. ['red', 'green', 'blue']
var tjColors = tj.shineColors();

console.log("I understand lots of colors.  You can tell me to shine my light a different color by saying 'turn the light red' or 'change the light to green' or 'turn the light off'.");
console.log(tj.configuration.robot.name);
console.log("Say Hi Watson to activate me!");
// uncomment to see the full list of colors TJ understands
// console.log("Here are all the colors I understand:");
// console.log(tjColors.join(", "));

tj.wave();