import {
    AbilityName,
    ModifierField,
    ModifierKey,
} from "@dh_sheets/app/constants";
import { SubclassData } from "@dh_sheets/app/types";

export const BardSubclassData: SubclassData[] = [
    {
        name: "Troubadour",
        description:
            "Play the Troubadour if you want to play music to bolster your allies.",
        spellcastTrait: AbilityName.PRESENCE,
        foundationFeatures: [
            {
                name: "Gifted Performer",
                description: [
                    <span key="subclass-desc-found-1">
                        Describe how you perform for others. You can play each
                        song once per long rest:
                    </span>,
                    <ul key="subclass-desc-found-2">
                        <li>
                            <b>Relaxing Song</b>: You and all allies within
                            Close range clear a Hit Point.
                        </li>
                        <li>
                            <b>Epic Song</b>: Make a target within Close range
                            temporarily Vulnerable.
                        </li>
                        <li>
                            <b>Heartbreaking Song</b>: You and all allies within
                            Close range gain a Hope.
                        </li>
                    </ul>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Maestro",
                description: [
                    <span key="subclass-desc-spec-1">
                        Your rallying songs steel the courage of those who
                        listen. When you give a Rally Die to an ally, they can
                        gain a Hope or clear a Stress.
                    </span>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Virtuoso",
                description: [
                    <span key="subclass-desc-mastery-1">
                        You are among the greatest of your craft and your skill
                        is boundless. You can perform each of your “Gifted
                        Performer” feature’s songs twice instead of once per
                        long rest.
                    </span>,
                ],
            },
        ],
    },
    {
        name: "Wordsmith",
        description:
            "Play the Wordsmith if you want to use clever wordplay and captivate crowds.",
        spellcastTrait: AbilityName.PRESENCE,
        foundationFeatures: [
            {
                name: "Rousing Speech",
                description: [
                    <span key="subclass-desc-found-1">
                        Once per long rest, you can give a heartfelt, inspiring
                        speech. All allies within Far range clear 2 Stress.
                    </span>,
                ],
            },
            {
                name: "Heart of a Poet",
                description: [
                    <span key="subclass-desc-found-2">
                        After you make an action roll to impress, persuade, or
                        offend someone, you can <b>spend a Hope</b> to add a{" "}
                        <b>d4</b> to the roll.
                    </span>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Eloquent",
                description: [
                    <span key="subclass-desc-spec-1">
                        Your moving words boost morale. Once per session, when
                        you encourage an ally, you can do one of the following:
                    </span>,
                    <ul key="subclass-desc-spec-2">
                        <li>
                            Allow them to find a mundane object or tool they
                            need.
                        </li>
                        <li>Help an Ally without spending Hope.</li>
                        <li>
                            Give them an additional downtime move during their
                            next rest.
                        </li>
                    </ul>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Epic Poetry",
                description: [
                    <span key="subclass-desc-mastery-1">
                        Your Rally Die increases to a <b>d10</b>. Additionally,
                        when you Help an Ally, you can narrate the moment as if
                        you were writing the tale of their heroism in a memoir.
                        When you do, roll a <b>d10</b> as your advantage die.
                    </span>,
                ],
            },
        ],
    },
];

export const DruidSubclassData: SubclassData[] = [
    {
        name: "Warden of the Elements",
        description:
            "Play the Warden of the Elements if you want to embody the natural elements of the wild.",
        spellcastTrait: AbilityName.INSTINCT,
        foundationFeatures: [
            {
                name: "Elemental Incarnation",
                description: [
                    <span key="subclass-desc-found-1">
                        <b>Mark a Stress</b> to <i>Channel</i> one of the
                        following elements until you take Severe damage, your
                        next rest, or you Channel another element:
                    </span>,
                    <ul key="subclass-desc-found-2">
                        <li>
                            <b>Fire</b>: When an adversary within Melee range
                            deals damage to you, they take <b>1d10</b> magic
                            damage.
                        </li>
                        <li>
                            <b>Earth</b>: Gain a bonus to your damage thresholds
                            equal to your Proficiency.
                        </li>
                        <li>
                            <b>Water</b>: When you deal damage to an adversary
                            within Melee range, all other adversaries within
                            Very Close range must mark a Stress.
                        </li>
                        <li>
                            <b>Air</b>: You can hover, gaining advantage on
                            Agility Rolls.
                        </li>
                    </ul>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Elemental Aura",
                description: [
                    <span key="subclass-desc-spec-1">
                        Once per rest while <i>Channeling</i>, you can assume an
                        aura matching your element. The aura affects targets
                        within Close range until your Channeling ends.
                    </span>,
                    <ul key="subclass-desc-spec-2">
                        <li>
                            <b>Fire</b>: When an adversary marks 1 or more Hit
                            Points, they must also mark a Stress.
                        </li>
                        <li>
                            <b>Earth</b>: Your allies gain a +1 bonus to
                            Strength.
                        </li>
                        <li>
                            <b>Water</b>: When an adversary deals damage to you,
                            you can <b>mark a Stress</b> to move them anywhere
                            within Very Close range of where they are.
                        </li>
                        <li>
                            <b>Air</b>: When you or an ally takes damage from an
                            attack beyond Melee range, reduce the damage by{" "}
                            <b>1d8</b>.
                        </li>
                    </ul>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Elemental Dominion",
                description: [
                    <span key="subclass-desc-mastery-1">
                        You further embody your element. While <i>Channeling</i>
                        , you gain the following benefit:
                    </span>,
                    <ul key="subclass-desc-mastery-2">
                        <li>
                            <b>Fire</b>: You gain a +1 bonus to your Proficiency
                            for attacks and spells that deal damage.
                        </li>
                        <li>
                            <b>Earth</b>: When you would mark Hit Points, roll a{" "}
                            <b>d6</b> per Hit Point marked. For each result of
                            6, reduce the number of Hit Points you mark by 1.
                        </li>
                        <li>
                            <b>Water</b>: When an attack against you succeeds,
                            you can <b>mark a Stress</b> to make the attacker
                            temporarily <i>Vulnerable</i>.
                        </li>
                        <li>
                            <b>Air</b>: You gain a +1 bonus to your Evasion and
                            can fly.
                        </li>
                    </ul>,
                ],
            },
        ],
    },
    {
        name: "Warden of Renewal",
        description:
            "Play the Warden of Renewal if you want to use powerful magic to heal your party.",
        spellcastTrait: AbilityName.INSTINCT,
        foundationFeatures: [
            {
                name: "Clarity of Nature",
                description: [
                    <span key="subclass-desc-found-1">
                        Once per long rest, you can create a space of natural
                        serenity within Close range. When you spend a few
                        minutes resting within the space, clear Stress equal to
                        your Instinct, distributed as you choose between you and
                        your allies.
                    </span>,
                ],
            },
            {
                name: "Regeneration",
                description: [
                    <span key="subclass-desc-found-2">
                        Touch a creature and <b>spend 3 Hope</b>. That creature
                        clears <b>1d4</b> Hit Points.
                    </span>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Regenerative Reach",
                description: [
                    <span key="subclass-desc-spec-1">
                        You can target creatures within Very Close range with
                        your “Regeneration” feature.
                    </span>,
                ],
            },
            {
                name: "Warden’s Protection",
                description: [
                    <span key="subclass-desc-spec-2">
                        Once per long rest, <b>spend 2 Hope</b> to clear 2 Hit
                        Points on <b>1d4</b> allies within Close range.
                    </span>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Defender",
                description: [
                    <span key="subclass-desc-mastery-1">
                        Your animal transformation embodies a healing guardian
                        spirit. When you’re in Beastform and an ally within
                        Close range marks 2 or more Hit Points, you can{" "}
                        <b>mark a Stress</b> to reduce the number of Hit Points
                        they mark by 1.
                    </span>,
                ],
            },
        ],
    },
];

export const GuardianSubclassData: SubclassData[] = [
    {
        name: "Stalwart",
        description:
            "Play the Stalwart if you want to take heavy blows and keep fighting.",
        foundationFeatures: [
            {
                name: "Unwavering",
                description: [
                    <span key="subclass-desc-found-1">
                        Gain a permanent +1 bonus to your damage thresholds.
                    </span>,
                ],
                modifier: [
                    {
                        field: ModifierField.MAJOR_THRESHOLD,
                        bonus: 1,
                        modifierKey: ModifierKey.STALWART_GUARDIAN_FOUND_MAJ,
                    },
                    {
                        field: ModifierField.SEVERE_THRESHOLD,
                        bonus: 1,
                        modifierKey: ModifierKey.STALWART_GUARDIAN_FOUND_SEV,
                    },
                ],
            },
            {
                name: "Iron Will",
                description: [
                    <span key="subclass-desc-found-2">
                        When you take physical damage, you can{" "}
                        <b>mark an additional Armor Slot</b> to reduce the
                        severity.
                    </span>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Unrelenting",
                description: [
                    <span key="subclass-desc-spec-1">
                        Gain an additional permanent +2 bonus to your damage
                        thresholds.
                    </span>,
                ],
                modifier: [
                    {
                        field: ModifierField.MAJOR_THRESHOLD,
                        bonus: 2,
                        modifierKey: ModifierKey.STALWART_GUARDIAN_SPEC_MAJ,
                    },
                    {
                        field: ModifierField.SEVERE_THRESHOLD,
                        bonus: 2,
                        modifierKey: ModifierKey.STALWART_GUARDIAN_SPEC_SEV,
                    },
                ],
            },
            {
                name: "Partners-in-Arms",
                description: [
                    <span key="subclass-desc-spec-2">
                        When an ally within Very Close range takes damage, you
                        can <b>mark an Armor Slot</b> to reduce the severity by
                        one threshold.
                    </span>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Undaunted",
                description: [
                    <span key="subclass-desc-mastery-1">
                        Gain an additional permanent +3 bonus to your damage
                        thresholds.
                    </span>,
                ],
                modifier: [
                    {
                        field: ModifierField.MAJOR_THRESHOLD,
                        bonus: 3,
                        modifierKey: ModifierKey.STALWART_GUARDIAN_MAST_MAJ,
                    },
                    {
                        field: ModifierField.SEVERE_THRESHOLD,
                        bonus: 3,
                        modifierKey: ModifierKey.STALWART_GUARDIAN_MAST_SEV,
                    },
                ],
            },
            {
                name: "Loyal Protector",
                description: [
                    <span key="subclass-desc-spec-2">
                        When an ally within Close range has 2 or fewer Hit
                        Points and would take damage, you can{" "}
                        <b>mark a Stress</b> to sprint to their side and take
                        the damage instead.
                    </span>,
                ],
            },
        ],
    },
    {
        name: "Vengeance",
        description:
            "Play the Vengeance if you want to strike down enemies who harm you or your allies.",
        foundationFeatures: [
            {
                name: "At Ease",
                description: [
                    <span key="subclass-desc-found-1">
                        Gain an additional Stress slot.
                    </span>,
                ],
                modifier: [
                    {
                        field: ModifierField.MAX_STRESS,
                        bonus: 1,
                        modifierKey:
                            ModifierKey.VENGEANCE_GUARDIAN_FOUND_STRESS,
                    },
                ],
            },
            {
                name: "Revenge",
                description: [
                    <span key="subclass-desc-found-2">
                        When an adversary within Melee range succeeds on an
                        attack against you, you can <b>mark 2 Stress</b> to
                        force the attacker to mark a Hit Point.
                    </span>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Act of Reprisal",
                description: [
                    <span key="subclass-desc-spec-1">
                        When an adversary damages an ally within Melee range,
                        you gain a +1 bonus to your Proficiency for the next
                        successful attack you make against that adversary.
                    </span>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Nemesis",
                description: [
                    <span key="subclass-desc-mastery-1">
                        <b>Spend 2 Hope</b> to <i>Prioritize</i> an adversary
                        until your next rest. When you make an attack against
                        your <i>Prioritized</i> adversary, you can swap the
                        results of your Hope and Fear Dice. You can only{" "}
                        <i>Prioritize</i> one adversary at a time.
                    </span>,
                ],
            },
        ],
    },
];

export const RangerSubclassData: SubclassData[] = [
    {
        name: "Beastbound",
        description:
            "Play the Beastbound if you want to form a deep bond with an animal ally.",
        spellcastTrait: AbilityName.AGILITY,
        foundationFeatures: [
            {
                name: "Companion",
                description: [
                    <span key="subclass-desc-found-1">
                        You have an animal companion of your choice (at the GM’s
                        discretion). They stay by your side unless you tell them
                        otherwise.
                    </span>,
                    <span key="subclass-desc-found-2">
                        Take the Ranger Companion sheet. When you level up your
                        character, choose a level-up option for your companion
                        from this sheet as well.
                    </span>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Expert Training",
                description: [
                    <span key="subclass-desc-spec-1">
                        Choose an additional level-up option for your companion.
                    </span>,
                ],
            },
            {
                name: "Battle-Bonded",
                description: [
                    <span key="subclass-desc-spec-2">
                        When an adversary attacks you while they’re within your
                        companion’s Melee range, you gain a +2 bonus to your
                        Evasion against the attack.
                    </span>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Advanced Training",
                description: [
                    <span key="subclass-desc-mastery-1">
                        Choose two additional level-up options for your
                        companion.
                    </span>,
                ],
            },
            {
                name: "Loyal Friend",
                description: [
                    <span key="subclass-desc-spec-2">
                        Once per long rest, when the damage from an attack would
                        mark your companion’s last Stress or your last Hit Point
                        and you’re within Close range of each other, you or your
                        companion can rush to the other’s side and take that
                        damage instead.
                    </span>,
                ],
            },
        ],
    },
    {
        name: "Wayfinder",
        description:
            "Play the Wayfinder if you want to hunt your prey and strike with deadly force.",
        spellcastTrait: AbilityName.AGILITY,
        foundationFeatures: [
            {
                name: "Ruthless Predator",
                description: [
                    <span key="subclass-desc-found-1">
                        When you make a damage roll, you can{" "}
                        <b>mark a Stress</b> to gain a +1 bonus to your
                        Proficiency. Additionally, when you deal Severe damage
                        to an adversary, they must mark a Stress.
                    </span>,
                ],
            },
            {
                name: "Path Forward",
                description: [
                    <span key="subclass-desc-found-2">
                        When you’re traveling to a place you’ve previously
                        visited or you carry an object that has been at the
                        location before, you can identify the shortest, most
                        direct path to your destination.
                    </span>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Elusive Predator",
                description: [
                    <span key="subclass-desc-spec-1">
                        When your <i>Focus</i> makes an attack against you, you
                        gain a +2 bonus to your Evasion against the attack.
                    </span>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Apex Predator",
                description: [
                    <span key="subclass-desc-mastery-1">
                        Before you make an attack roll against your Focus, you
                        can <b>spend a Hope</b>. On a successful attack, you
                        remove a Fear from the GM’s Fear pool.
                    </span>,
                ],
            },
        ],
    },
];

export const RogueSubclassData: SubclassData[] = [
    {
        name: "Nightwalker",
        description:
            "Play the Nightwalker if you want to manipulate shadows to maneuver through the environment.",
        spellcastTrait: AbilityName.FINESSE,
        foundationFeatures: [
            {
                name: "Shadow Stepper",
                description: [
                    <span key="subclass-desc-found-1">
                        You can move from shadow to shadow. When you move into
                        an area of darkness or a shadow cast by another creature
                        or object, you can <b>mark a Stress</b> to disappear
                        from where you are and reappear inside another shadow
                        within Far range. When you reappear, you are{" "}
                        <i>Cloaked</i>.
                    </span>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Dark Cloud",
                description: [
                    <span key="subclass-desc-spec-1">
                        Make a <b>Spellcast Roll (15)</b>. On a success, create
                        a temporary dark cloud that covers any area within Close
                        range. Anyone in this cloud can’t see outside of it, and
                        anyone outside of it can’t see in. You’re considered
                        <i>Cloaked</i> from any adversary for whom the cloud
                        blocks line of sight.
                    </span>,
                ],
            },
            {
                name: "Adrenaline",
                description: [
                    <span key="subclass-desc-spec-2">
                        While you’re <i>Vulnerable</i>, add your level to your
                        damage rolls.
                    </span>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Fleeting Shadow",
                description: [
                    <span key="subclass-desc-mastery-1">
                        Gain a permanent +1 bonus to your Evasion. You can use
                        your “Shadow Stepper” feature to move within Very Far
                        range.
                    </span>,
                ],
                modifier: [
                    {
                        field: ModifierField.EVASION,
                        bonus: 1,
                        modifierKey: ModifierKey.NIGHTWALKER_ROGUE_EVA,
                    },
                ],
            },
            {
                name: "Vanishing Act",
                description: [
                    <span key="subclass-desc-mastery-2">
                        <b>Mark a Stress</b> to become <i>Cloaked</i> at any
                        time. When <i>Cloaked</i> from this feature, you
                        automatically clear the
                        <i>Restrained</i> condition if you have it. You remain{" "}
                        <i>Cloaked</i> in this way until you roll with Fear or
                        until your next rest.
                    </span>,
                ],
            },
        ],
    },
    {
        name: "Syndicate",
        description:
            "Play the Syndicate if you want to have a web of contacts everywhere you go.",
        spellcastTrait: AbilityName.FINESSE,
        foundationFeatures: [
            {
                name: "Well-Connected",
                description: [
                    <span key="subclass-desc-found-1">
                        When you arrive in a prominent town or environment, you
                        know somebody who calls this place home. Give them a
                        name, note how you think they could be useful, and
                        choose one fact from the following list:
                    </span>,
                    <ul key="subclass-desc-found-2">
                        <li>
                            They owe me a favor, but they’ll be hard to find.
                        </li>
                        <li>They’re going to ask for something in exchange.</li>
                        <li>They’re always in a great deal of trouble.</li>
                        <li>We used to be together. It’s a long story.</li>
                        <li>We didn’t part on great terms.</li>
                    </ul>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Contacts Everywhere",
                description: [
                    <span key="subclass-desc-spec-1">
                        Once per session, you can briefly call on a shady
                        contact. Choose one of the following benefits and
                        describe what brought them here to help you in this
                        moment:
                    </span>,
                    <ul key="subclass-desc-spec-2">
                        <li>
                            They provide 1 handful of gold, a unique tool, or a
                            mundane object that the situation requires.
                        </li>
                        <li>
                            On your next action roll, their help provides a +3
                            bonus to the result of your Hope or Fear Die.
                        </li>
                        <li>
                            The next time you deal damage, they snipe from the
                            shadows, adding 2d8 to your damage roll.
                        </li>
                    </ul>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Reliable Backup",
                description: [
                    <span key="subclass-desc-mastery-1">
                        You can use your “Contacts Everywhere” feature three
                        times per session. The following options are added to
                        the list of benefits you can choose from when you use
                        that feature:
                    </span>,
                    <ul key="subclass-desc-mastery-2">
                        <li>
                            When you mark 1 or more Hit Points, they can rush
                            out to shield you, reducing the Hit Points marked by
                            1.
                        </li>
                        <li>
                            When you make a Presence Roll in conversation, they
                            back you up. You can roll a d20 as your Hope Die.
                        </li>
                    </ul>,
                ],
            },
        ],
    },
];

export const SeraphSubclassData: SubclassData[] = [
    {
        name: "Divine Wielder",
        description:
            "Play the Divine Wielder if you want to dominate the battlefield with a legendary weapon.",
        spellcastTrait: AbilityName.STRENGTH,
        foundationFeatures: [
            {
                name: "Spirit Weapon",
                description: [
                    <span key="subclass-desc-found-1">
                        When you have an equipped weapon with a range of Melee
                        or Very Close, it can fly from your hand to attack an
                        adversary within Close range and then return to you. You
                        can <b>mark a Stress</b> to target an additional
                        adversary within range with the same attack roll.
                    </span>,
                ],
            },
            {
                name: "Sparing Touch",
                description: [
                    <span key="subclass-desc-found-2">
                        Once per long rest, touch a creature and clear 2 Hit
                        Points or 2 Stress from them.
                    </span>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Devout",
                description: [
                    <span key="subclass-desc-spec-1">
                        When you roll your Prayer Dice, you can roll an
                        additional die and discard the lowest result.
                        Additionally, you can use your “Sparing Touch” feature
                        twice instead of once per long rest.
                    </span>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Sacred Resonance",
                description: [
                    <span key="subclass-desc-mastery-1">
                        When you roll damage for your “Spirit Weapon” feature,
                        if any of the die results match, double the value of
                        each matching die. For example, if you roll two 5s, they
                        count as two 10s.
                    </span>,
                ],
            },
        ],
    },
    {
        name: "Winged Sentinel",
        description:
            "Play the Winged Sentinel if you want to take flight and strike crushing blows from the sky.",
        spellcastTrait: AbilityName.STRENGTH,
        foundationFeatures: [
            {
                name: "Wings of Light",
                description: [
                    <span key="subclass-desc-found-1">
                        You can fly. While flying, you can do the following:
                    </span>,
                    <ul key="subclass-desc-found-2">
                        <li>
                            <b>Mark a Stress</b> to pick up and carry another
                            willing creature approximately your size or smaller.
                        </li>
                        <li>
                            <b>Spend a Hope</b> to deal an extra <b>1d8</b>{" "}
                            damage on a successful attack.
                        </li>
                    </ul>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Ethereal Visage",
                description: [
                    <span key="subclass-desc-spec-1">
                        Your supernatural visage strikes awe and fear. While
                        flying, you have advantage on Presence Rolls. When you
                        succeed with Hope on a Presence Roll, you can remove a
                        Fear from the GM’s Fear pool instead of gaining Hope.
                    </span>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Ascendant",
                description: [
                    <span key="subclass-desc-mastery-1">
                        Gain a permanent +4 bonus to your Severe damage
                        threshold.
                    </span>,
                ],
                modifier: [
                    {
                        field: ModifierField.SEVERE_THRESHOLD,
                        bonus: 4,
                        modifierKey: ModifierKey.WINGED_SENTINEL_SERAPH_SEV,
                    },
                ],
            },
            {
                name: "Power of the Gods",
                description: [
                    <span key="subclass-desc-mastery-2">
                        While flying, you deal an extra <b>1d12</b>
                        damage instead of 1d8 from your “Wings of Light”
                        feature.
                    </span>,
                ],
            },
        ],
    },
];

export const SorcererSubclassData: SubclassData[] = [
    {
        name: "Elemental Origin",
        description:
            "Play the Elemental Origin if you want to channel raw magic to take the shape of a particular element.",
        spellcastTrait: AbilityName.INSTINCT,
        foundationFeatures: [
            {
                name: "Elementalist",
                description: [
                    <span key="subclass-desc-found-1">
                        Choose one of the following elements at character
                        creation: air, earth, fire, lightning, water.
                    </span>,
                    <span key="subclass-desc-found-2">
                        You can shape this element into harmless effects.
                        Additionally, <b>spend a Hope</b> and describe how your
                        control over this element helps an action roll you’re
                        about to make, then either gain a +2 bonus to the roll
                        or a +3 bonus to the roll’s damage.
                    </span>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Natural Evasion",
                description: [
                    <span key="subclass-desc-spec-1">
                        You can call forth your element to protect you from
                        harm. When an attack roll against you succeeds, you can{" "}
                        <b>mark a Stress</b> and describe how you use your
                        element to defend you. When you do, roll a <b>d6</b> and
                        add its result to your Evasion against the attack.
                    </span>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Transcendance",
                description: [
                    <span key="subclass-desc-mastery-1">
                        Once per long rest, you can transform into a physical
                        manifestation of your element. When you do, describe
                        your transformation and choose two of the following
                        benefits to gain until your next rest:
                    </span>,
                    <ul key="subclass-desc-mastery-2">
                        <li>+4 bonus to your Severe threshold</li>
                        <li>+1 bonus to a character trait of your choice</li>
                        <li>+1 bonus to your Proficiency</li>
                        <li>+2 bonus to your Evasion</li>
                    </ul>,
                ],
            },
        ],
    },
    {
        name: "Primal Origin",
        description:
            "Play the Primal Origin if you want to extend the versatility of your spells in powerful ways.",
        spellcastTrait: AbilityName.INSTINCT,
        foundationFeatures: [
            {
                name: "Manipulate Magic",
                description: [
                    <span key="subclass-desc-found-1">
                        Your primal origin allows you to modify the essence of
                        magic itself. After you cast a spell or make an attack
                        using a weapon that deals magic damage, you can
                        <b>mark a Stress</b> to do one of the following:
                    </span>,
                    <ul key="subclass-desc-found-2">
                        <li>Extend the spell or attack’s reach by one range</li>
                        <li>Gain a +2 bonus to the action roll’s result</li>
                        <li>Double a damage die of your choice</li>
                        <li>Hit an additional target within range</li>
                    </ul>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Enchanted Aid",
                description: [
                    <span key="subclass-desc-spec-1">
                        You can enhance the magic of others with your essence.
                        When you Help an Ally with a Spellcast Roll, you can
                        roll a <b>d8</b> as your advantage die. Once per long
                        rest, after an ally has made a Spellcast Roll with your
                        help, you can swap the results of their Duality Dice.
                    </span>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Arcane Charge",
                description: [
                    <span key="subclass-desc-mastery-1">
                        You can gather magical energy to enhance your
                        capabilities. When you take magic damage, you become
                        <i>Charged</i>. Alternatively, you can{" "}
                        <b>spend 2 Hope</b> to become
                        <i>Charged</i>. When you successfully make an attack
                        that deals magic damage while <i>Charged</i>, you can
                        clear your <i>Charge</i> to either gain a +10 bonus to
                        the damage roll or gain a +3 bonus to the Difficulty of
                        a reaction roll the spell causes the target to make. You
                        stop being <i>Charged</i> at your next long rest.
                    </span>,
                ],
            },
        ],
    },
];

export const WarriorSubclassData: SubclassData[] = [
    {
        name: "Call of the Brave",
        description:
            "Play the Call of the Brave if you want to use the might of your enemies to fuel your own power.",
        foundationFeatures: [
            {
                name: "Courage",
                description: [
                    <span key="subclass-desc-found-1">
                        When you fail a roll with Fear, you gain a Hope.
                    </span>,
                ],
            },
            {
                name: "Battle Ritual",
                description: [
                    <span key="subclass-desc-found-2">
                        Once per long rest, before you attempt something
                        incredibly dangerous or face off against a foe who
                        clearly outmatches you, describe what ritual you perform
                        or preparations you make. When you do, clear 2 Stress
                        and gain 2 Hope.
                    </span>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Rise to the Challenge",
                description: [
                    <span key="subclass-desc-spec-1">
                        You are vigilant in the face of mounting danger. While
                        you have 2 or fewer Hit Points unmarked, you can roll a{" "}
                        <b>d20</b> as your Hope Die.
                    </span>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Camaraderie",
                description: [
                    <span key="subclass-desc-mastery-1">
                        Your unwavering bravery is a rallying point for your
                        allies. You can initiate a Tag Team Roll one additional
                        time per session. Additionally, when an ally initiates a
                        Tag Team Roll with you, they only need to spend 2 Hope
                        to do so.
                    </span>,
                ],
            },
        ],
    },
    {
        name: "Call of the Slayer",
        description:
            "Play the Call of the Slayer if you want to strike down adversaries with immense force.",
        foundationFeatures: [
            {
                name: "Slayer",
                description: [
                    <span key="subclass-desc-found-1">
                        You gain a pool of dice called Slayer Dice. On a roll
                        with Hope, you can place a <b>d6</b> on this card
                        instead of gaining a Hope, adding the die to the pool.
                        You can store a number of Slayer Dice equal to your
                        Proficiency. When you make an attack roll or damage
                        roll, you can spend any number of these Slayer Dice,
                        rolling them and adding their result to the roll. At the
                        end of each session, clear any unspent Slayer Dice on
                        this card and gain a Hope per die cleared.
                    </span>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Weapon Specialist",
                description: [
                    <span key="subclass-desc-spec-1">
                        You can wield multiple weapons with dangerous ease. When
                        you succeed on an attack, you can
                        <b>spend a Hope</b> to add one of the damage dice from
                        your secondary weapon to the damage roll. Additionally,
                        once per long rest when you roll your Slayer Dice,
                        reroll any 1s.
                    </span>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Martial Preparation",
                description: [
                    <span key="subclass-desc-mastery-1">
                        You’re an inspirational warrior to all who travel with
                        you. Your party gains access to the Martial Preparation
                        downtime move. To use this move during a rest, describe
                        how you instruct and train with your party. You and each
                        ally who chooses this downtime move gain a <b>d6</b>{" "}
                        Slayer Die. A PC with a Slayer Die can spend it to roll
                        the die and add the result to an attack or damage roll
                        of their choice.
                    </span>,
                ],
            },
        ],
    },
];

export const WizardSubclassData: SubclassData[] = [
    {
        name: "School of Knowledge",
        description:
            "Play the School of Knowledge if you want a keen understanding of the world around you.",
        spellcastTrait: AbilityName.KNOWLEDGE,
        foundationFeatures: [
            {
                name: "Prepared",
                description: [
                    <span key="subclass-desc-found-1">
                        Take an additional domain card of your level or lower
                        from a domain you have access to.
                    </span>,
                ],
                modifier: [
                    {
                        field: ModifierField.DOMAIN_CARDS,
                        bonus: 1,
                        modifierKey: ModifierKey.KNOWLEDGE_WIZARD_FOUND_DOMAIN,
                    },
                ],
            },
            {
                name: "Adept",
                description: [
                    <span key="subclass-desc-found-2">
                        When you Utilize an Experience, you can mark a Stress
                        instead of spending a Hope. If you do, double your
                        Experience modifier for that roll.
                    </span>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Accomplished",
                description: [
                    <span key="subclass-desc-spec-1">
                        Take an additional domain card of your level or lower
                        from a domain you have access to.
                    </span>,
                ],
                modifier: [
                    {
                        field: ModifierField.DOMAIN_CARDS,
                        bonus: 1,
                        modifierKey: ModifierKey.KNOWLEDGE_WIZARD_SPEC_DOMAIN,
                    },
                ],
            },
            {
                name: "Perfect Recall",
                description: [
                    <span key="subclass-desc-spec-2">
                        Once per rest, when you recall a domain card in your
                        vault, you can reduce its Recall Cost by 1.
                    </span>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Brilliant",
                description: [
                    <span key="subclass-desc-mastery-1">
                        Take an additional domain card of your level or lower
                        from a domain you have access to.
                    </span>,
                ],
                modifier: [
                    {
                        field: ModifierField.DOMAIN_CARDS,
                        bonus: 1,
                        modifierKey: ModifierKey.KNOWLEDGE_WIZARD_MAST_DOMAIN,
                    },
                ],
            },
            {
                name: "Perfect Recall",
                description: [
                    <span key="subclass-desc-mastery-1">
                        When you use an Experience, roll a <b>d6</b>. On a
                        result of 5 or higher, you can use it without spending
                        Hope.
                    </span>,
                ],
            },
        ],
    },
    {
        name: "School of War",
        description:
            "Play the Primal Origin if you want to extend the versatility of your spells in powerful ways.",
        spellcastTrait: AbilityName.KNOWLEDGE,
        foundationFeatures: [
            {
                name: "Battlemage",
                description: [
                    <span key="subclass-desc-found-1">
                        You’ve focused your studies on becoming an unconquerable
                        force on the battlefield. Gain an additional Hit Point
                        slot.
                    </span>,
                ],
                modifier: [
                    {
                        field: ModifierField.MAX_HP,
                        bonus: 1,
                        modifierKey: ModifierKey.WAR_WIZARD_HP,
                    },
                ],
            },
            {
                name: "Face Your Fear",
                description: [
                    <span key="subclass-desc-found-2">
                        When you succeed with Fear on an attack roll, you deal
                        an extra <b>1d10</b> magic damage.
                    </span>,
                ],
            },
        ],
        specializationFeatures: [
            {
                name: "Conjure Shield",
                description: [
                    <span key="subclass-desc-spec-1">
                        You can maintain a protective barrier of magic. While
                        you have at least 2 Hope, you add your Proficiency to
                        your Evasion.
                    </span>,
                ],
            },
            {
                name: "Fueled by Fear",
                description: [
                    <span key="subclass-desc-spec-2">
                        The extra magic damage from your “Face Your Fear”
                        feature increases to <b>2d10</b>.
                    </span>,
                ],
            },
        ],
        masteryFeatures: [
            {
                name: "Thrive in Chaos",
                description: [
                    <span key="subclass-desc-mastery-1">
                        When you succeed on an attack, you can{" "}
                        <b>mark a Stress</b> after rolling damage to force the
                        target to mark an additional Hit Point.
                    </span>,
                ],
            },
            {
                name: "Have No Fear",
                description: [
                    <span key="subclass-desc-mastery-2">
                        The extra magic damage from your “Face Your Fear”
                        feature increases to <b>3d10</b>.
                    </span>,
                ],
            },
        ],
    },
];
