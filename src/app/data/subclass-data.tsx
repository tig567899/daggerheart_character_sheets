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
                        offend someone, you can <b>spend a Hope</b> to add a
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
                    <ul key="subclass-desc-spec-1">
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
                        modifierKey: ModifierKey.STALWART_GUARDIAN_FOUND_MAJ,
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
