# World of Warcraft Classic Warrior Macros

This document contains a set of macros designed for the Warrior class in WoW Classic. The macros are structured to automate common actions, such as stance dancing and weapon swapping, to improve efficiency.

## A Note on Weapon Swapping

Several of these macros include the lines `/click MultiBarRightButton4` and `/click MultiBarRightButton5`. This is a key feature for these macros. It's a way to handle gear swaps without having to change the macro itself. You would place your 1-handed weapon and shield on these two specific buttons on your right action bar. When you change your main weapon, you simply drag the new one to the same button, and the macro will continue to work correctly.

---

## Tanking & Shield Macros

### Bash

This macro casts Shield Bash on your mouseover target (or your current target if there is no mouseover). It automatically swaps to your 1-hand/shield if a shield isn't already equipped and switches to Battle Stance.

```txt
#showtooltip Shield Bash
/startattack
/stopcasting [noworn:Shields]
/click MultiBarRightButton4
/click MultiBarRightButton5
/cast [form:3,worn:Shields] Battle Stance
/cast [@mouseover,harm,nodead][] Shield Bash
```

### Shield Block

This macro casts Shield Block and also switches you into Defensive Stance. It includes the weapon swap commands for a seamless transition.

```txt
#showtooltip Shield Block
/startattack [combat,harm,nodead]
/stopcasting [noworn:Shields]
/click MultiBarRightButton4
/click MultiBarRightButton5
/cast Shield Block
/cast Defensive Stance
```

### Shield Slam

This casts Shield Slam, automatically switching to Defensive Stance and handling the weapon swap.

```txt
#showtooltip Shield Slam
/startattack
/stopcasting [noworn:Shields]
/click MultiBarRightButton4
/click MultiBarRightButton5
/cast Defensive Stance
/cast Shield Slam
```

### Shield Wall

This macro activates Shield Wall, swapping to a shield if one isn't equipped and switching to Defensive Stance.

```txt
#showtooltip Shield Wall
/startattack [combat,harm,nodead]
/stopcasting [noworn:Shields]
/click MultiBarRightButton4
/click MultiBarRightButton5
/cast Defensive Stance
/cast Shield Wall
```

---

## Damage & Offensive Macros

### Bloodrage

A simple macro to cast Bloodrage.

```txt
#showtooltip
/startattack [combat][harm,nodead]
/cast Bloodrage
```

### Charge

This macro switches to Battle Stance and casts Charge, then starts your auto-attack.

```txt
#showtooltip Charge
/startattack
/cast Battle Stance
/cast Charge
```

### Cleave

A macro to cast Cleave and begin auto-attacking.

```txt
#showtooltip
/cast Cleave
/startattack
```

### Execute

This casts Execute and first switches to Berserker Stance.

```txt
#showtooltip Execute
/startattack
/stopcasting
/cast [form:2] Berserker Stance
/cast Execute
```

### Hamstring

This casts Hamstring and ensures you are in Battle Stance.

```txt
#showtooltip Hamstring
/startattack
/cast [form:2] Battle Stance
/cast Hamstring
```

### Heroic Strike

This macro targets the nearest enemy if you don't have a target, then casts Heroic Strike and starts auto-attacking.

```txt
#showtooltip
/cleartarget [dead][help]
/targetenemy [noexists]
/cast Heroic Strike
/startattack
```

### Intercept

This macro switches to Berserker Stance and casts Intercept, then starts auto-attacking.

```txt
#showtooltip Intercept
/startattack
/cast Berserker Stance
/cast Intercept
```

### Mortal Strike

A simple macro to cast Mortal Strike and start auto-attacking.

```txt
#showtooltip
/startattack
/cast Mortal Strike
```

### Overpower

This casts Overpower on your mouseover target (or your current target) and ensures you are in Battle Stance.

```txt
#showtooltip Overpower
/startattack
/cast Battle Stance
/cast [@mouseover,harm,nodead][] Overpower
```

### Rend

This casts Rend and switches to Battle Stance.

```txt
#showtooltip Rend
/startattack
/cast [form:3] Battle Stance
/cast Rend
```

### Retaliation

This casts Retaliation and switches you to Battle Stance first.

```txt
#showtooltip Retaliation
/cast Battle Stance
/cast Retaliation
```

### Revenge

This casts Revenge and switches you to Defensive Stance.

```txt
#showtooltip Revenge
/startattack
/cast Defensive Stance
/cast Revenge
```

### Sunder Armor

This macro targets the nearest enemy if you don't have one, then casts Sunder Armor and begins auto-attacking.

```txt
#showtooltip
/cleartarget [dead][help]
/targetenemy [noexists]
/cast Sunder Armor
/startattack
```

### Sweeping Strikes

This casts Sweeping Strikes and switches to Battle Stance.

```txt
#showtooltip Sweeping Strikes
/startattack
/stopcasting [form:2/3]
/cast Battle Stance
/cast Sweeping Strikes
```

### Whirlwind

This casts Whirlwind and switches you to Berserker Stance.

```txt
#showtooltip Whirlwind
/startattack
/stopcasting [form:1/2]
/cast Berserker Stance
/cast Whirlwind
```

---

## Utility & Control Macros

### Berserker Rage

This macro switches to Berserker Stance and casts Berserker Rage.

```txt
#showtooltip Berserker Rage
/startattack [combat,harm,nodead]
/cast Berserker Rage
/cast Berserker Stance
```

### Demoralizing Shout

This casts Demoralizing Shout and begins auto-attacking.

```txt
#showtooltip
/startattack
/cast Demoralizing Shout
```

### Disarm

This macro casts Disarm and switches to Defensive Stance.

```txt
#showtooltip Disarm
/startattack
/cast Defensive Stance
/cast Disarm
```

### Fear

This macro casts Intimidating Shout and includes a target clear/acquire function, then stops auto-attacking.

```txt
#showtooltip
/cleartarget [dead][help]
/targetenemy [noexists]
/stopattack
/cast Intimidating Shout
```

### Pummel

This is a conditional macro. If you have a shield equipped, it casts Shield Bash. Otherwise, it switches to Berserker Stance and casts Pummel.

```txt
#showtooltip Pummel
/startattack
/cast [form:1/2,worn:Shields] Shield Bash
/cast [noworn:Shields] Berserker Stance
/cast [form:3] Pummel
```

### Mocking Blow

This macro casts Mocking Blow on your mouseover target and switches to Battle Stance.

```txt
#showtooltip Mocking Blow
/startattack [harm,nodead]
/cast Battle Stance
/cast [@mouseover,harm,nodead][] Mocking Blow
```

### Taunt

This macro casts Taunt on your mouseover target and switches to Defensive Stance.

```txt
#showtooltip Taunt
/startattack [harm,nodead]
/cast Defensive Stance
/cast [@mouseover,harm,nodead][] Taunt
```

### Thunder Clap

This casts Thunder Clap and switches to Battle Stance.

```txt
#showtooltip Thunder Clap
/startattack
/cast Battle Stance
/cast Thunder Clap
```
