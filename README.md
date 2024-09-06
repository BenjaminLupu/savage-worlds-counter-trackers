# Savage Worlds Counter Tracker [![Click for demo](https://img.shields.io/badge/Click%20for%20demo-green)](https://benjaminlupu.net/tiny-tabletop-tools/savage-worlds/counter-tracker/)
In all tabletop roleplaying games, players must keep track of indicators (e.g. hit points, number of turns a spell lasts, etc.). Most of the time, it's done with a good old sheet of paper, a pencil and an eraser. The more adventurous use dice or small counters, which you can buy online. Legend says that some players even manage to use their memory. So what is this counter tracker? **This project aims to use our smartphones for bookkeeping during IRL Savage Worlds sessions**. It's also a small side project of mine and means nothing else than having fun.

<p align="center">
  <kbd><img width="383" height="837" src="https://benjaminlupu.net/tiny-tabletop-tools/savage-worlds/counter-tracker/screenshots/en/savage-worlds-counter-tracker.jpg"></kbd>
</p>

> [!NOTE]
> If you're not familiar with **Savage Worlds**, it could well be your next **roleplaying game**. Savage Worlds is a classless game focused on a **fun, fast-paced, action-packed experience**. Savage Worlds lets you play in an infinite number of worlds. Fantasy? Espionage? Space opera? Superheroes? Savage Worlds gets you covered. [It's your next stop for adventure](https://peginc.com/savage-settings/savage-worlds/).

## How To Use _Savage Worlds Counter Tracker_
- Launch a web browser.
- Open the _Savage Worlds Counter Tracker_ link.
  - or open locally the _index.html_ file (in the _counter-tracker folder_) in a web browser.
- That' it. Happy game with your friends :smile:.
- **Want to see how it looks?** https://benjaminlupu.net/tiny-tabletop-tools/savage-worlds/counter-tracker/
### Languages
- _Savage World Counter Tracker_ is available in English and French.
- It automatically detects the current browser language.
- Players can force the language by adding a _lang_ parameter in the _Savage Worlds Counter Tracker_ link (e.g. https://mylink.com/?lang=en).
- Language codes are the standard 2 letters ISO 639-1 codes (https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes)
> [!NOTE]
> If you wish to provide a translation in your language, please don't hesitate to contact me.

<details>
  <summary>Click for more about technology and browser compatibilities</summary>
  
### A Word About Technology
- You can host _Savage Worlds Counter Tracker_ on any web server or even launch locally on your computer.
- _Savage Worlds Counter Tracker_ is lightweight mix of standard HTML, CSS and Javascript (i.e. a web page).
- It relies on no dependencies, using only standard web technologies.
- It doesn't require any server side technologies (such as PHP).
> :warning: This project was fun to develop for me. I have used bleeding edge (but standard) CSS and Javascript features. I recommend to use _Savage Worlds Counter Tracker_ with latest browser versions. Please note that I have tested _Savage Worlds Counter Tracker_ in Google Chrome both in its Windows computer and Android versions. So you might encounter issues with other browsers and OS (e.g. iOS Safari).

</details>


## Features
During a game of Savage Worlds, players track the following indicators for their characters:
- Bennies (chips that can be used to change the course of the game)
- Wounds
- Fatigue
- Power Points _if the character has any powers (e.g. a spell-casting magician)_

_Savage Worlds Counter Tracker_ provides a counter for each of these indicators. In addition to these counters, it also provides tracking of wounds and fatigue malus, as well as ready-to-use extra counters.

> [!IMPORTANT]
> _Savage Worlds Counter Tracker_ is based on Savage Worlds Adventure Edition's rules.

### Counters
#### Bennies

<p align="center">
  <kbd><img width="382" height="123" src="https://benjaminlupu.net/tiny-tabletop-tools/savage-worlds/counter-tracker/screenshots/en/savage-worlds-counter-tracker-bennies.jpg"></kbd>
</p>

- The Bennie counter has a default value of 3.
- Players can add and remove Bennies.
- They can also reset the counter.
- The counter turns red when it reaches 0.
#### Wounds

<p align="center">
  <kbd><img width="382" height="120" src="https://benjaminlupu.net/tiny-tabletop-tools/savage-worlds/counter-tracker/screenshots/en/savage-worlds-counter-tracker-wounds.jpg"></kbd>
</p>

- The Wounds counter has a default value of 0 and a maximum value of 3.
- Players can add and remove Wounds.
- They can also reset the counter.
- The counter turns red when it reaches 0.
- Each Wound results in a -1 penalty to Trait rolls (cumulative with penalties from Fatigue) and Pace.
> [!NOTE]
> In Savage Worlds, **Trait rolls** include Attribute rolls (e.g. Strength) and Skill rolls (e.g. Stealth). **Pace** represents how fast a character moves.
#### Fatigue

<p align="center">
  <kbd><img width="382" height="123" src="https://benjaminlupu.net/tiny-tabletop-tools/savage-worlds/counter-tracker/screenshots/en/savage-worlds-counter-tracker-fatigue.jpg"></kbd>
</p>

- Fatigue starts at 0 and has a maximum value of 2.
- Players can increase and decrease fatigue.
- They can also reset the counter.
- The counter turns red when it reaches 0.
- Each increase results in a -1 penalty to Trait rolls (cumulative with penalties from wounds). 
#### Power Points

<p align="center">
  <kbd><img width="391" height="313" src="https://benjaminlupu.net/tiny-tabletop-tools/savage-worlds/counter-tracker/screenshots/en/savage-worlds-counter-tracker-power-points.jpg"></kbd>
</p>

- Power Points value is 0 by default.
- Players can set the counter to the correct number by adding 1, 2, 5 or 10 points for easiness.
- Players can decrease Power Points when spending them and increase Power Points when regaining them.
- They can also reset the counter (to 0).
- The counter has no maximum value.
- It turns red when reaching 0.
#### Extra Counters

<p align="center">
  <kbd><img width="385" height="406" src="https://benjaminlupu.net/tiny-tabletop-tools/savage-worlds/counter-tracker/screenshots/en/savage-worlds-counter-tracker-extra-counters.jpg"></kbd>
</p>

- Sometimes, players need track extra indicators.
- _Savage Worlds Counter Tracker_ offers 3 extra generic counters for that.
- Extra counters have a value of 0 and no maximum value.
- Players can increase and decrease extra counters by 1.
- They can also reset extra counters.
- Extra counters turns red when reaching 0.
#### Reset All Counters

<p align="center">
  <kbd><img width="382" height="113" src="https://benjaminlupu.net/tiny-tabletop-tools/savage-worlds/counter-tracker/screenshots/en/savage-worlds-counter-tracker-reset-all-counters-button.jpg"></kbd>
</p>

- Clicking on the _Reset All Counters_ button in the header sets all counter and modifier to default values.
#### Backup Counter Values

<p align="center">
  <kbd><img width="382" height="113" src="https://benjaminlupu.net/tiny-tabletop-tools/savage-worlds/counter-tracker/screenshots/en/savage-worlds-counter-tracker-create-save-link-button.jpg"></kbd>
</p>

- Players can backup current values for later use.
- Clicking on _Create Save Link_ button generates a link with a series of parameters.
- Each parameter corresponds to a counter value.
- Store this link in a safe place for later use.
#### Recover Saved Counter Values
- To recover saved counter values, use a save link (see Backup Counter Values above on how to create one).
- Paste the save link in a browser address bar and that's it: _Savage Worlds Counter Tracker_ will be displayed with saved values.
### Modifiers

<p align="center">
  <kbd><img width="382" height="129" src="https://benjaminlupu.net/tiny-tabletop-tools/savage-worlds/counter-tracker/screenshots/en/savage-worlds-counter-tracker-modifiers.jpg"></kbd>
</p>

Alongside the counters, you'll find two fields for the malus applied to Trait rolls and Pace.
#### Trait Rolls
- When the Wounds or the Fatigue counters increase, the penalty for Trait rolls is increased by 1.
- When they decrease, the penalty for Trait rolls also decreases.
#### Pace
- When the Wounds counter increases, the penalty for Pace is increased by 1.
- When it decreases, the penalty for Pace also decreases.
 
---
<p align="center">
  <kbd></kbd><img width="120" height="80" src="https://benjaminlupu.net/tiny-tabletop-tools/savage-worlds/counter-tracker/img/peg-fan-license-logo.png"></p>
</p>
This page references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com. Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission. Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.
