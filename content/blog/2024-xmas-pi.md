---
title: "XMAS-PI 2024"
description: "PostMortem of the GlobalGameJam 2019"
cover: "/images/posts/2024-xmaspi/header.png"
date: 2024-11-25 20:00:00
tags:
    - raspberry-pi 
    - lego-toypad
---

Since the release of [Matt Parkers Video](https://www.youtube.com/watch?v=TvlpIojusBE) it became a tradition for me, that at some point in November I start tinkering
with my overly overegineered fairy lights of my christmas tree. Like the lights from the inspiring video, I am using ws2811 LED's that are controlled by a raspberry pi.

- [XMAS-PI](https://github.com/EldoranDev/xmaspi) (golang - interaction with ws2811)
- [ChristmasPortal](https://github.com/EldoranDev/ChristmasPortal) (csharp - interaction with lego toypad)

This year two additions where made to the existing infrastructure:

1. Moving away from a custom user interface and api in favor of HomeAssistant integration through MQTT ([MQTT Light](https://www.home-assistant.io/integrations/light.mqtt/))
2. Adding a Lego ToyPad as physical interface

## Replacing the Custom UI with HomeAssistant

The last two years, I used a [nuxt](https://nuxtjs.org/) based frontend application that ran on the same pi as the xmaspi go application (and communicated through grpc) to control the lights.

To remove complexity from the application, while also allowing for automations, scenes and easy control I decided trying to integrate my service with HomeAssistant, which I have running for some simple automations and data collection anyway.

This caused a major rewrite of the application as a very big chunk of the current code could get removed in favor of a much leaner alternative. Everything related to interaction with the service (`grpc`, `rest-api`) got replaced by  the [AutoPaho](https://github.com/eclipse-paho/paho.golang/tree/master/autopaho) MQTT client, which handles connection, automatic reconnection and subscriptions. Adding discovery messages according to the [HomeAssistant documentation](https://www.home-assistant.io/integrations/mqtt/#mqtt-discovery) allows the service to automatically show up in the managed devices without any extra configuration.

<!--
![screenshot from homeassistant device overview](images/posts/2024-xmaspi/mqtt-discovery.png)
-->

This already allows full control through home assistant, like automaticly turning the leds on/off based on some conditions.

## Adding a Lego ToyPad as Phyical Interface

For an even simpler interaction with the service I decided to use one of the Lego Dimensions ToyPad, that I recieved from [Tom Wendel](https://github.com/tomwendel) as part of his [ToypadChallenge](https://github.com/Wendelpunkt/ToypadChallenge), as a switch for the lights.

For this I implemented a small service in csharp using the [LegoDimensions](https://www.nuget.org/packages/LegoDimensions) and [MQTTnet](https://www.nuget.org/packages/MQTTnet) NuGet packages. Currently the service is fully targeted towards the xmaspi software and sends messages directly to the mqtt topic that controls it, leading to the following architecture right now:

![structure of the software](images/posts/2024-xmaspi/structure.png)

## Future Improvements

One of the next steps, even if not directly related to this project, will be the generalization of the ToyPad as its own MQTT Device that will send and receive messaes through MQTT and could therefore be integrated into HomeAssistant. This would allow the ToyPad to be part of
automations, and simply reconfiguring the actions on the pads as it would not require a recompilation and redeployment of the software to take effect.
