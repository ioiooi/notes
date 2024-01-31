# Classic Hunter Macros - Updated

https://www.patreon.com/posts/29575368

Aug 31, 2019

### Start Attacking One Button

```
#showtooltip Auto Shot
/startattack [dead]
/targetenemy [noharm]
/cast !Auto Shot
/startattack [harm,nodead]
/petfollow [@pettarget,noexists]
/petattack
```

Notes:
I have removed Dash/Dive from macros, the Pet AI autocast handles it very well already.

/petfollow is included for synergy with the Freezing Trap macros, if you don't plan on using /petstay in your trap macros, feel free to remove the /petfollow line. I included it baseline here though, as including it has no impact on the macro.

I have removed `/cleartarget [dead][help]` whenever possible due to problems against Hunters in Feign Death in PvP that are considered dead by macros. I have removed it completely from all melee macros.

I have two `/startattack` lines in the above macro because I use the first `/startattack [dead]` to handle dead targets instead of using `/cleartarget` because it will not untarget Feign Death Hunters in PvP. I have a second `/startattack [harm,nodead]` that will never auto target due to the conditions, but will activate my melee if I'm too close to Auto Shot. It is important that this one come after `/cast !Auto Shot` or it will attempt to interrupt my Auto Shot.

I use `/targetenemy [noharm]` now as it will target a new enemy if I don't have a target OR if I have an allied target (in which case I would like to target an enemy instead).

### One Button Hunter

```
#showtooltip Arcane Shot
/startattack [dead]
/targetenemy [noharm]
/castsequence [harm] reset=target Hunter's Mark, null
/castsequence reset=target Serpent Sting, Arcane Shot, Arcane Shot, Arcane Shot
/cast !Auto Shot
/startattack
/petattack
```

I recommend using "Start Attacking One Button" over the "One Button Hunter". This macro WILL make you worse at the game. I will not be held responsible for any apparent lack of skill :P

### Ranged/Melee

```
/startattack [dead]
/targetenemy [noharm]
/cast !Auto Shot
/startattack [harm,nodead]
```

### Aimed

```
#showtooltip
/targetenemy [noharm]
/cast Aimed Shot
/cast !Auto Shot
```

### Arcane

```
#showtooltip
/cast Arcane Shot
/cast !Auto Shot
```

### Serpent Sting

```
#showtooltip
/cast Serpent Sting
/cast !Auto Shot
```

### Multi-Shot

```
#showtooltip
/cast Multi-Shot
/cast !Auto Shot
```

### Multi-Shot(Rank 1)

```
#showtooltip Multi-Shot(Rank 1)
/cast Multi-Shot(Rank 1)
/cast !Auto Shot
```

### Hunter’s Mark

```
#showtooltip Hunter's Mark
/cleartarget [dead][help]
/targetenemy [noexists]
/castsequence [harm] reset=target/5 Hunter's Mark, null
```

## Pet Macros

### Pet Attack

```
#showtooltip
/cleartarget [dead][help]
/petfollow [@pettarget,noexists]
/petattack
```

### Pet Attack (Mouseover)

```
#showtooltip
/cleartarget [dead][help]
/petfollow [@pettarget,noexists]
/petattack [@mouseover,harm,nodead][]
```

I have removed Dash/Dive from macros, the Pet AI autocast handles it very well already.

### Pet Attack/Follow Toggle

```
/petattack [@pettarget,noexists]
/petpassive [@pettarget,exists]
/petfollow [@pettarget,exists]
```

### Pet Control (Call Pet all-in-one)

```
#showtooltip Call Pet
/cast [nomod, nopet] Call Pet
/cast [mod:shift, @pet, dead][mod:shift, nopet] Revive Pet; [mod:shift, nochanneling] Mend Pet
/petpassive [nomod]
/petfollow [nomod]
```

### Intimidation

```
#showtooltip Intimidation
/petattack
/cast [harm,nodead] Intimidation
```

### Intimidation (mouseover)

```
#showtooltip Intimidation
/petattack [@mouseover,harm,nodead][]
/cast [@mouseover,harm,nodead][harm,nodead] Intimidation
```

if you want to be able to cast intimidation without a target, use this:
(useful for stunning out of a Freezing Trap as you can untarget and get the stun ready)

```
#showtooltip Intimidation
/petattack [@mouseover,harm,nodead][]
/cast [@mouseover,harm,nodead][] Intimidation
```

## Melee Macros

### Wing Clip

```
#showtooltip Wing Clip
/cast Raptor Strike
/cast Wing Clip
/startattack
```

### Blood Fury

```
#showtooltip Blood Fury
/cast Blood Fury
/cast Raptor Strike
/startattack
```

### Raptor Strike

```
#showtooltip Raptor Strike
/cast Raptor Strike
/cast Mongoose Bite
/startattack
```

### Melee/Ranged DPS at Same Time

```
/target [@mouseover,harm,nodead]
/cast [@mouseover,harm,nodead] Raptor Strike
/cast [@mouseover,harm,nodead] Mongoose Bite
/startattack [@mouseover,harm,nodead]
/targetlasttarget [@mouseover,harm,nodead]
/cast !Auto Shot
```

### Combined

```
#showtooltip Raptor Strike
/target [@mouseover,harm]
/cast [@mouseover,harm][] Raptor Strike
/cast [@mouseover,harm][] Mongoose Bite
/startattack [@mouseover,harm][]
/targetlasttarget [@mouseover,harm]
/cast !Auto Shot
```

You can remove the !Auto Shot line if you like and just manually reactivate your Auto Shot after every Raptor Strike. I actually recommend this as it doesn't reactivate 100% properly anyways, and this makes it so you don't Auto Shot mobs far away on accident.

I use this to replace my normal Raptor Strike macro completely, as it works exactly the same when you don't have a mouseover. If this macro is confusing, the best way to look at is every line that includes a blank [], is a line included when you hit the macro without a mouseover.
for example, when you press the above macro without a mouseover, your computer only sees and executes exactly this:

```
#showtooltip Raptor Strike
/cast Raptor Strike
/cast Mongoose Bite
/startattack
/cast !Auto Shot
```

### Mouseover Wing Clip

```
#showtooltip Wing Clip
/target [@mouseover,harm]
/cast [@mouseover,harm][] Raptor Strike
/cast [@mouseover,harm][] Wing Clip
/startattack [@mouseover,harm][]
/targetlasttarget [@mouseover,harm]
```

Love this one in PvP. It isn't a true mouseover, technically you are targeting your mouseover for a split second, casting Wing Clip, and then going back to your original target. A little wonky, but that's what you have to do.

## Traps

### Freezing

```
#showtooltip Freezing Trap
/petpassive
/petstay [@pettarget,harm]
/stopattack
/cast [combat] Feign Death
/cast Freezing Trap
```

### Frost

```
#showtooltip Frost Trap
/petpassive
/stopattack
/cast [combat] Feign Death
/cast Frost Trap
```

### Immolation

```
#showtooltip Immolation Trap
/petpassive
/stopattack
/cast [combat] Feign Death
/cast Immolation Trap
```

## Aspects

### Hawk

```
#showtooltip
/cancelaura Aspect of the Cheetah
/cast !Aspect of the Hawk
```

### Pack/Cheetah

```
#showtooltip
/cast [help] Aspect of the Pack; Aspect of the Cheetah
```

Disclaimer: I have stopped using this macro, as I kept using Pack on accident. Fair warning.

### Monkey (PvE)

```
#showtooltip Aspect of the Monkey
/cancelaura Aspect of the Cheetah
/cast !Aspect of the Monkey
/cast [combat,harm,nodead] Raptor Strike
/startattack [combat,harm,nodead]
```

Do not use this in PvP. This macro has the potential to break Freezing Trap on accident.

### Monkey (PvP)

```
#showtooltip Aspect of the Monkey
/cancelaura Aspect of the Cheetah
/cast !Aspect of the Monkey
```

### Toggle Hawk/Cheetah

```
/castsequence !Aspect of the Hawk, !Aspect of the Cheetah
```

## Pull Macro

```
#showtooltip Arcane Shot(Rank 1)
/stopcasting
/stopcasting
/cast Arcane Shot(Rank 1)
```

Requires two presses. /stopcasting has to execute before Auto Shot can wind up or it will still send off a single Auto Shot. So spam the ever living crap out of this to prevent the Auto Shot. (Thank you to "Clearly" for this macro)

## Feed Pet

```
#showtooltip Feed Pet
/cast [pet,nodead] Feed Pet
/use [pet,nodead] Raptor Flesh
/use [pet,nodead] Tiger Meat
/use [pet,nodead] Haunch of Meat
```

you can list as many foods in the macro as you want, and the macro will use the top food first.

## Feed Pet (Place Food on Action Bar)

```
#showtooltip Feed Pet
/cast [pet,nodead] Feed Pet
/click [pet,nodead] MultiBarLeftButton5
```

Other Bars:

```
/click ActionButton1
/click MultiBarBottomLeftButton1
/click MultiBarBottomRightButton1
/click MultiBarRightButton1
```

## Cursor Macros (cast at ground instantly)

Flare

```
#showtooltip
/cast [@cursor] Flare
```

Volley

```
#showtooltip
/cast [@cursor] Volley
```

Eagle Eye

```
#showtooltip
/cleartarget
/cast [@cursor] !Eagle Eye
```

Mouseover
Scatter Shot

```
#showtooltip
/petpassive
/cast [@mouseover,harm,nodead][] Scatter Shot
```

`/petpassive` may be unnecessary if the Pet AI is already smart enough to stop attacking. I would probably still include /petpassive in PvP though to completely prevent warriors from taunting your pet. I'm not sure if this is necessary (warriors might never be able to taunt pet, not sure), it will require extensive testing on my part in the future.

Scare Beast

```
#showtooltip
/cast [@mouseover,harm,nodead][] Scare Beast
```

Eyes of the Beast

```
#showtooltip
/cast Eyes of the Beast
/cancelaura Eyes of the Beast
/petstay
```

remember to spam the macro for at least one second when ending eyes of the beast so that /petstay will stick.

Shadowmeld/Prowl

```
#showtooltip
/cast !Shadowmeld
/cast !Prowl
```
