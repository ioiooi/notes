# WoW Macros

## General

### fishing

Equip fishing gear and use specific items for fishing. Alt-modifier uses additional fishing tools.

```
#showtooltip Fishing
/equip [noequipped:Fishing Pole] Seth's Graphite Fishing Pole
/equip Lucky Fishing Hat
/use [mod:alt] Aquadynamic Fish Attractor
/use [mod:alt] Sharpened Fish Hook
/use [mod:alt] 16
/click StaticPopup1Button1
/cast Fishing
```

### flying and ground mount

Summons different mounts based on the flyable status of the area.

```
/cast [flyable] Swift Purple Gryphon
/cast [noflyable] Swift White Ram
/cast [noflyable] Amani War Bear
/cast [noflyable] Reins of the Swift Mistsaber
```

### wand

```
#showtooltip
/cast !shoot
```

### runes

```
#showtooltip
/use Demonic Rune
/use Dark Rune
```

### healthstones

```
#showtooltip
/use item:22105
/use item:22104
/use item:22103
/use Major Healthstone
```

## Priest

### dispel

This macro interrupts casting and casts Dispel Magic. Ctrl triggers Mass Dispel. Alt dispel player. Shift dispel the target of the current target if it is an enemy. Dispels magic based on mouseover conditions - helping friendly targets or dispelling harmful magic from enemies.

```
#showtooltip
/stopcasting
/cast [mod:ctrl] Mass Dispel;[mod:alt,@player][mod:shift,@targettarget,nodead] [@mouseover,help,nodead][@mouseover,harm,nodead][] Dispel Magic
```

### flash heal

```
#showtooltip
/cast [@mouseover,help,nodead][help][@targettarget,help,nodead][] Flash Heal
```

### shield

```
#showtooltip
/stopcasting
/cast [mod:alt,@player][@mouseover,help,nodead][help][@targettarget,help,nodead][] Power Word: Shield
```

### mind flay

```
#showtooltip
/cast [harm,nodead,nochanneling] Mind Flay
```

## Paladin

### crusader strike

Clears dead/help targets and casts Crusader Strike, initiating attack.

```
#showtooltip
/cleartarget [dead][help]
/cast Crusader Strike
/startattack
```

### avengers shield + cleanse

Casts Cleanse or Avenger's Shield based on modifiers.

```
#showtooltip
/cast [mod:alt,@player][@mouseover,help,nodead][help,nodead] Cleanse; [harm,nodead][] Avenger's Shield
```

## Druid

### faerie Fire

```
#showtooltip
/cast [form:1/3,@mouseover,harm][form:1/3] Faerie Fire (Feral)(); [@mouseover,harm][] Faerie Fire
```

### travel Form

Switches between Aquatic Form and Travel Form based on swimming status.

```
#showtooltip
/cancelform [noform:2/4]
/cast [swimming] Aquatic Form; [noswimming] Travel Form
```

### prowl + pounce

```
#showtooltip
/cast [nostealth] Prowl; Pounce
```

## Shaman

### lightning bolt

Clears target conditions and casts Lightning Bolt on a new enemy if one isn't targeted already.

```
#showtooltip
/cleartarget [dead][help]
/targetenemy [noexists]
/cast Lightning Bolt
```

### earth shock

Interrupts casting and casts Earth Shock. Ctrl+Shift targets focus, Shift+Mouseover harms, using Rank 1. Otherwise, casts Earth Shock on hostile mouseover targets.

```
#showtooltip
/stopcasting
/cast [mod:ctrl,@focus][mod:shift,@mouseover,harm,exists,nodead][mod:shift] Earth Shock(Rank 1); [@mouseover,harm,exists,nodead][] Earth Shock
```

### Chain Heal

```
#showtooltip
/cast [@mouseover,help,nodead] [help][@targettarget,help,nodead][] Chain Heal
```

```
#showtooltip
/cast [mod:shift,@mouseover,help,nodead][mod:shift,help][mod:shift,@targettarget,help,nodead][mod:shift] Chain Heal(Rank 4); [@mouseover,help,nodead] [help][@targettarget,help,nodead][] Chain Heal(Rank 2)
```

### Purge + Cure Disease + Cure Poison

When the target is an enemy, it triggers Purge. If the target is friendly, it adapts: Shift+Alt cleanses the player of diseases, Shift+@mouseover or not cleanses friendlies. Alt cleanses poisons on the player, @mouseover or not cleanses poison of friendlies.

```
#showtooltip
/cast [mod:shift+alt,@player][mod:shift,@mouseover,help,nodead][mod:shift,help,nodead] Cure Disease;[mod:alt,@player][@mouseover,help,nodead][help,nodead] Cure Poison; [mod:shift,@targettarget,harm,nodead][@mouseover,harm,nodead][] Purge
```

### Totems

#### air

Summons different totems based on modifier combinations: Shift+Alt for Nature Resistance Totem, Alt+Ctrl for Tranquil Air Totem, Alt for Grounding Totem, Ctrl for Wrath of Air Totem, Shift for Windfury Totem, and Grace of Air Totem by default.

```
#showtooltip
/cast [mod:alt+shift] Nature Resistance Totem; [mod:alt+ctrl] Tranquil Air Totem; [mod:alt] Grounding Totem; [mod:ctrl] Wrath of Air Totem; [mod:shift] Windfury Totem; Grace of Air Totem
```

#### earth

```
#showtooltip
/cast [mod:alt+ctrl] Earth Elemental Totem; [mod:alt] Tremor Totem; [mod:ctrl] Stoneclaw Totem; [mod:shift] Earthbind Totem; Strength of Earth Totem
```

#### fire

```
#showtooltip
/cast [mod:alt+shift] Frost Resistance Totem; [mod:alt+ctrl] Fire Elemental Totem; [mod:ctrl] Magma Totem; [mod:shift] Fire Nova Totem; Searing Totem
```

#### water

```
#showtooltip
/cast [mod:alt+shift] Fire Resistance Totem; [mod:alt+ctrl] Mana Tide Totem; [mod:alt] Healing Stream Totem; [mod:ctrl] Disease Cleansing Totem; [mod:shift] Poison Cleansing Totem; Mana Spring Totem
```

#### wf/goa

```
/castsequence reset=3 Windfury Totem, Grace of Air Totem
```
