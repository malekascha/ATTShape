#LIFELINE
===========================================

This repository is a hackathon project focusing on public and personal safety utlizing the ATT Digital Life, ATT M2X IoT Services, IBM Watson APIs and Qualcomm hardware.

Scriptr was used to interact with the AT&T M2X and Digital Life APIs. The scripts used to interact with them can be found in the scripts directory. For each set of scripts, there were utility functions used across them. [Click here](./blob/master/scripts/digitallife/digitallife) to see the Digital Life utility functions, and [click here](./blob/master/scripts/m2x/m2x) to see the M2X utility functions.

To install locally:

`git clone https://github.com/malekascha/ATTShape.git`

`cd ATTShape`

`cd Watson_service`

`npm install`

The objectives for this project were to increase public and home safety by utilizing microphones connected to via the IoT. 

When certain safe words are uttered by a user/subscriber Lifeline has the ability to notify the relevant authorities:
Ex. in the case of 'fire' being uttered x amount of times, the fire department would be notified via ATT Digital Life

To be able to traslate the spoken word to text and make a readable stream to process, IBM Watson Speech to Text was utilized.

The preset keywords can be updated and altered by the client, and are stored with an ATT M2X IoT database.

Audio is picked up via a Qualcomm microphone.
